const router = require("express").Router();
const SliderController = require("../../controllers/admin/serviceController");

router.get("/list", SliderController.servicelist);
router.post("/add", SliderController.serviceadd);
router.post("/update", SliderController.serviceupdate)
router.post("/delete", SliderController.servicedelete);

module.exports = router;