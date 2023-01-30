const home = require("./routes/app/home");
const webhome = require("./routes/app/webhome")
const contact = require("./routes/app/contact")

const AppRoutes = (app) => {
  app.use("/app", home);
  app.use("/app/webhome", webhome);
  app.use("/app/contact", contact)
};

module.exports = AppRoutes;