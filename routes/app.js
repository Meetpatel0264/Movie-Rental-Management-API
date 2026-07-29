const express = require("express");

const app = express();

app.use(express.json());

app.use("/actor", require("./actorRoutes/actorRoutes"));
app.use("/language", require("./languageRoutes/languageRoutes"));
app.use("/category", require("./categoryRoutes/categoryRoutes"));
app.use("/country", require("./countryRoutes/countryRoutes"));
app.use("/city", require("./cityRoutes/cityRoutes"));

module.exports = app;