<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <img src="/images/iconos/Astronauta.png" width="100%" />
        </v-col>
        <v-col cols="6" class="text-center">
          <div style="height: 100px"></div>
          <h2 class="morado--text">
            Gracias por Suscribirte a Planeta Preescolar
          </h2>
          <br />
          <h2>
            Ahora podrás disfrutar de todos nuestros recursos sin restricciones
          </h2>
          <router-link to="/planeaciones">Planeaciones</router-link> -
          <router-link to="/hojas-de-trabajo">Hojas de trabajo</router-link> -
          <router-link to="/material-didactico">Material Didáctico</router-link>
          - <router-link to="/interactivo">Interactivo</router-link> -
          <router-link to="/administracion">Administración</router-link>

          <br />

          También te recomendamos mantener tu
          <router-link to="/perfil">Perfil</router-link> actualizado
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  async asyncData(ctx) {
    ctx.app.$fire.firestore
      .collection("pagos")
      .where("id", "==", ctx.route.query.session_id)
      .get()
      .then((resp) => {
        var datares = resp.docs[0].data();
        datares.idPago = resp.docs[0].id;
        datares.payment_status = "paid";

        //// definin fecha de expiracion segun el plan
        var meses = 0;
        var dias = 0;

        switch (datares.plan) {
          case "mensual":
            dias = 31;
            meses = 1;
            break;
          case "trimestral":
            dias = 90;
            meses = 3;
            break;
          case "semestral":
            dias = 180;
            meses = 6;
            break;
          case "anual":
            dias = 360;
            meses = 12;
            break;
        }

        datares.expires_at = ctx.app
          .$moment(datares.created)
          .add(meses, "months")
          .format("YYYY/MM/DD");
   
        ctx.app.$fire.firestore
          .collection("pagos")
          .doc(resp.docs[0].id)
          .update(datares)
          .then((res) => {
       
            /// actualiza claims
            var payload = {
              claims: {
                admin: false,
                premium: true,
                level: 1,
              },
              uid: datares.idAuth,
              pass: "PlanetaSereyd2022#",
            };

            fetch(process.env.functions + "/v1/adminusers/editclaims", {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(payload),
            })
              .then((res) => res.json())
              .then((res) => {
                console.log(res);
              });
          });
      });
  },
};
</script>
