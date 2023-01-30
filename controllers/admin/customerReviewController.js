const CustomerReview = require("../../models/CustomerReview");
const path = require("path");
const multer = require("multer");
const root = process.cwd();
const imageFilter = require('../../config/imageFilter');
const fs = require('fs');

const storage = multer.diskStorage({

    destination(req, file, cb) {
        cb(null, path.join(root + "/public/uploads/customerReview"));
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }

})

const upload = multer({
    storage: storage,
    fileFilter: imageFilter,
}).single('image');

class CustomerReviewController {
    static customerReviewList = async (req, res) => {
        try {
            const customerReview = await CustomerReview.find();
            return res.render('admin/customerReview', {
                customerReview
            });
        } catch (err) {
            console.log(err);
        }
    }
    static customerReviewAdd = async (req, res) => {
        try {
            upload(req, res, async function (err) {
                // console.log(req.body);
                const customerReview = CustomerReview({
                    name: req.body.name,
                    image: req.file.filename,
                    designation: req.body.designation,
                    description: req.body.description,
                })
                await customerReview.save()
            })
        } catch (err) {
            console.log(err);
        }
    }
    static customerReviewEdit = async (req, res) => {
        try {
            const customerReview = await CustomerReview.findById({
                _id: req.body.editid,
            });
            await customerReview.updateOne({
                name: req.body.editname,
                designation: req.body.editdesignation,
                description: req.body.editdescription,
            })
            return res.send("Customer Review Updated Successfully");
        } catch (err) {
            console.log(err);
        }
    }
    static customerReviewDelete = async (req, res) => {
        try {
            // console.log(req.body.id);
            const customerReview = await CustomerReview.findByIdAndDelete({
                _id: req.body.id,
            });
            fs.unlinkSync(path.join(root, "/public/uploads/customerReview", customerReview.image),
                (err) => {
                    if (err) {
                        console.log(err);
                    }
                }
            );

        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = CustomerReviewController;