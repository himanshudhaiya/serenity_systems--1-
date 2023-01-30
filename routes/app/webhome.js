const router = require("express").Router();
const webhome = require("../../controllers/app/webHome")

router.get("/list", webhome.homeget)
router.get("/services", webhome.services)

module.exports = router;