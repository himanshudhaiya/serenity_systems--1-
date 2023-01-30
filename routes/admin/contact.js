const router = require('express').Router();
const Contact = require("../../controllers/admin/contactController");

router.get('/list', Contact.contactList);
router.post('/add', Contact.contactAdd);
router.post('/edit', Contact.contactedit);
router.post('/delete', Contact.contactDelete);

module.exports = router;