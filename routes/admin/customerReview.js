const router = require("express").Router();
const customerReview = require("../../controllers/admin/customerReviewController");

router.get("/list", customerReview.customerReviewList);
router.post("/add", customerReview.customerReviewAdd);
router.post("/edit", customerReview.customerReviewEdit);
router.post("/delete", customerReview.customerReviewDelete);

module.exports = router;