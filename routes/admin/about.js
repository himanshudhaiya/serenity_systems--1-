const router = require('express').Router();
const about = require('../../controllers/admin/AboutControllers');

router.get('/list', about.aboutlist);
router.post('/add', about.addabout);
router.post('/delete', about.deleteabout);

module.exports = router;