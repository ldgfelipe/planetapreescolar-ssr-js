const express = require('express');
const router = express.Router()

const apiRoute = require("./api/usuarios")
const apiadmin = require("./api/adminapi") 
const apistripe = require("./api/stripe") 
const apirecursos= require("./api/recursos") 
const webhookstripe= require("./api/webhook_stripe") 
router.use("/users", apiRoute)
router.use("/adminusers", apiadmin)
router.use("/stripe", apistripe)
router.use("/recursos", apirecursos)
router.use("/webhookstripe", webhookstripe)

module.exports = router