"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl"); 


router.get("/", ctrl.show.home);

router.get("/login", ctrl.show.login);
router.get("/register", ctrl.show.register); 
router.get("/dbtest", ctrl.show.dbtest); 

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/dbtest", ctrl.process.dbtest);

module.exports = router;