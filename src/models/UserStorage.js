"use strict";
const db = require("../config/dbcon");

class UserStorage {

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const sql = "select id from nodesign WHERE id='" + id + "'";
            db.query(sql, function (err, result, fields) {
                if (err) reject(err); 
                resolve(result[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO nodesign(id,name,pass) VALUES (?, ?, ?);";
            db.query(sql, [userInfo.id, userInfo.name, userInfo.psword], function (err, fields) {
                if (err) reject(`${err}`); 
                resolve({success: true});
            });
        });
    } 
}

module.exports = UserStorage;