"use strict";

const app = require("../app");
const Port = 5000;

app.listen(Port, () => {
    console.log("서버 가동....port:",Port);
});