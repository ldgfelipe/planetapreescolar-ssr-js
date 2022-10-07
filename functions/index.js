const functions = require('firebase-functions');
const { Nuxt } = require('nuxt-start');
const express = require('express');
const app = express();

//////////// api rest ////////////////


app.get("/test", (req, res) => {
  var json1 = {
    prueba: "prueba correcta"
  }

  res.json(json1)

})
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
  console.log('ini server')
  nuxt.render(req, res);
});

const api = functions.https.onRequest(app);

module.exports = {
  ssrapp,
  api
}
