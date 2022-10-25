
const express = require('express');
const router = express.Router()



const apiRoute = require("./api/usuarios")
const apiadmin = require("./api/adminapi") 
const apistripe = require("./api/adminapi") 

router.use("/users", apiRoute)
router.use("/adminusers", apiadmin)
router.use("/stripe", apistripe)

module.exports = router