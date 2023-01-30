const router = require("express").Router();
const ourteam = require("../../controllers/admin/ourteamController");

router.get("/list", ourteam.Ourteamlist);
router.post("/add", ourteam.Ourteamadd);
router.post("/edit", ourteam.Ourteamedit);
router.post("/delete", ourteam.Ourteamdelete);

module.exports = router;