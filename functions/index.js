const functions = require("firebase-functions");
const { Nuxt } = require('nuxt-start');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({origin: true}));

const admin = require("firebase-admin");
const adminInit=admin.initializeApp(functions.config().firebase);
const routes= require('./routes');

app.use('/v1',routes)

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