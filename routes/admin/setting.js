const router = require("express").Router();
const setting = require("../../controllers/admin/settingContriller")


router.get("/list", setting.settinglist)
router.post("/add", setting.settingadd)
router.post("/edit", setting.settingedit)
router.post("/delete", setting.settingdelete)


module.exports = router;