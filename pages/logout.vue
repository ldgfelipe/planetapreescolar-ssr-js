<template>
  <v-card>
    <v-card-text> Cerrando Sistema </v-card-text>
  </v-card>
</template>
<script>
export default {
  mounted(){
    this.logout()
    },
  methods: {
    logout() {
      this.$fire.auth
        .signOut()
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
</script>
