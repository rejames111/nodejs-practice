"use strict";

const User = require("../../models/User");
const db = require("../../config/dbcon");

const show = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    },
    dbtest: (req, res) => {
        const sql = " select * from ustats_log";
        db.query(sql, function (err, result, fields) {
            if (err) throw err; 
            res.render("home/dbtest", { result: result }); 
        });
        }, 
}

const process = {
        login: async (req, res) => {
            const user = new User(req.body);
            const response = await user.login(); 
            return res.json(response);
        },
        register: async (req, res) => {
            const user = new User(req.body);
            const response =  await user.register();
            return res.json(response);
        },
        dbtest: (req, res) => {
            const user = new User(req.body);
            const response = user.test();
            return res.json(response);

        },

    };


    module.exports = {
        show,
        process
    }


