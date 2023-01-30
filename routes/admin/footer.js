const router = require("express").Router();
const footer = require("../../controllers/admin/FooterController");

router.get("/list", footer.footerlist);
router.post("/add", footer.addfooter);
router.post("/delete", footer.deletefooter);


module.exports = router;