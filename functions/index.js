const {admin, functions} =require('./fb')
const { Nuxt } = require('nuxt-start');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({origin: true}));

const bodyParser = require('body-parser');

// my routings
const apiRoute = require("./api/usuarios")
// add routes to the express app.
app.use("/users", apiRoute)

app.get("/test",(req,res)=>{
  res.json({rest:'carga datos get'})
})

const api = functions.https.onRequest(app);

///////////conexion ssrapp///////////
const nuxtConfig = require("./nuxt.config.js");
const config = {
  ...nuxtConfig,
  dev: false,
  debug: false,
  buildDir: "nuxt",
};

const nuxt = new Nuxt(config);
const ssrapp = functions.https.onRequest(async (req, res) => {
  await nuxt.ready();
  nuxt.render(req, res);
});



module.exports = {
  ssrapp,
  api
}