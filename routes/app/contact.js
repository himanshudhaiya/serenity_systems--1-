const router = require("express").Router()
const contact = require("../../controllers/app/contactController")

router.get("/list", contact.contactList)
router.post("/add", contact.contactAdd)

module.exports = router;