const main = require("./routes/admin/main");
const auth = require("./routes/admin/auth");
const dashboard = require("./routes/admin/dashboard");
const slider = require("./routes/admin/slider");
const service = require("./routes/admin/service");
const technologies = require("./routes/admin/technologies");
const ourteam = require("./routes/admin/ourteam");
const customerReview = require("./routes/admin/customerReview");
const contact = require("./routes/admin/contact");
const footer = require("./routes/admin/footer");
const about = require("./routes/admin/about");
const setting = require("./routes/admin/setting")
const logo = require("./routes/admin/logo");
const our_work = require("./routes/admin/our_work")
const product = require("./routes/admin/product")

const AdminRoutes = (app) => {
  app.use("/", main);
  app.use("/admin", auth);
  app.use("/admin", dashboard);
  app.use("/admin/slider", slider);
  app.use("/admin/service", service);
  app.use("/admin/technologies", technologies);
  app.use("/admin/ourteam", ourteam);
  app.use("/admin/customerreview", customerReview);
  app.use("/admin/contact", contact);
  app.use("/admin/footer", footer);
  app.use("/admin/about", about);
  app.use("/admin/setting", setting);
  app.use("/admin/logo", logo);
  app.use("/admin/ourwork", our_work);
  app.use("/admin/product", product)

};

module.exports = AdminRoutes;