const router = require("express").Router();
const technologies = require("../../controllers/admin/technologiesControllers");

router.get("/list", technologies.technologieslist);
router.post("/add", technologies.technologiesadd);
router.post("/edit", technologies.technologiesedit);
router.post("/delete", technologies.technologiesdelete);

module.exports = router;