const router = require("express").Router();
const SliderController = require("../../controllers/admin/sliderConteroller");

router.get("/list", SliderController.sliderlist);
router.post("/add", SliderController.slideradd);
router.post("/delete", SliderController.sliderdelete);

module.exports = router;