const express = require("express");

const app = express();

app.use(express.json());

app.use("/actor", require("./actorRoutes/actorRoutes"));
app.use("/language", require("./languageRoutes/languageRoutes"));
app.use("/category", require("./categoryRoutes/categoryRoutes"));
app.use("/country", require("./countryRoutes/countryRoutes"));
app.use("/city", require("./cityRoutes/cityRoutes"));
app.use("/address", require("./addressRoutes/addressRoutes"));
app.use("/store", require("./storeRoutes/storeRoutes"));
app.use("/staff", require("./staffRoutes/staffRoutes"));
app.use("/customer", require("./customerRoutes/customerRoutes"));
app.use("/film", require("./filmRoutes/filmRoutes"));
app.use("/film-actor", require("./filmActorRoutes/filmActorRoutes"));
app.use("/film-category", require("./filmCategoryRoutes/filmCategoryRoutes"));
app.use("/inventory", require("./inventoryRoutes/inventoryRoutes"));
app.use("/rental", require("./rentalRoutes/rentalRoutes"));

module.exports = app;