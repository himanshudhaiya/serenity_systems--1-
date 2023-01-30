const router = require("express").Router()
const our_work = require("../../controllers/admin/Our_workConteroller")

router.get("/list", our_work.our_worklist)
router.get("/listform", our_work.our_worklistform)
router.post("/add", our_work.our_workadd)
router.get("/editform/:id", our_work.our_worklist_edit_form)
router.post("/edit", our_work.our_workedit)
router.post("/delete", our_work.our_workdelete)

module.exports = router;