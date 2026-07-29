const express = require("express");

const app = express();

app.use(express.json());

app.use("/actor", require("./actorRoutes/actorRoutes"));
app.use("/language", require("./languageRoutes/languageRoutes"));

module.exports = app;