const router = require("express").Router();
const logo = require("../../controllers/admin/logoController")

router.get("/list", logo.Logolist)
router.post("/add", logo.addlogo)
router.post("/delete", logo.logoedelete)

module.exports = router;