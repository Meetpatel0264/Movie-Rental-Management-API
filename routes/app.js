const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const app = express();

app.use(express.json());


app.use("/auth", require("./authRoutes/authRoutes"));

app.use("/country", protect, require("./countryRoutes/countryRoutes"));
app.use("/city", protect, require("./cityRoutes/cityRoutes"));
app.use("/address", protect, require("./addressRoutes/addressRoutes"));
app.use("/language", protect, require("./languageRoutes/languageRoutes"));
app.use("/actor", protect, require("./actorRoutes/actorRoutes"));
app.use("/category", protect, require("./categoryRoutes/categoryRoutes"));
app.use("/film", protect, require("./filmRoutes/filmRoutes"));
app.use("/store", protect, require("./storeRoutes/storeRoutes"));
app.use("/staff", protect, require("./staffRoutes/staffRoutes"));
app.use("/customer", protect, require("./customerRoutes/customerRoutes"));
app.use("/inventory", protect, require("./inventoryRoutes/inventoryRoutes"));
app.use("/film-actor", protect, require("./filmActorRoutes/filmActorRoutes"));
app.use("/film-category", protect, require("./filmCategoryRoutes/filmCategoryRoutes"));
app.use("/rental", protect, require("./rentalRoutes/rentalRoutes"));

module.exports = app;