const router = require("express").Router();
const product = require("../../controllers/admin/productController")

router.get("/list", product.productlist)
router.post("/add", product.productadd)

module.exports = router;