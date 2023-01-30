const Product = require("../../models/Product")
const fs = require("fs")
const path = require("path")
const multer = require("multer")
const root = process.cwd()
const imageFilter = require("../../config/imageFilter")

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.join(root + "/public/uploads/product"));
    },
    filename(req, file, cb) {
        cb(
            null,
            `${Date.now()}${path.extname(file.originalname)}`
        )
    }
})

const upload = multer({
    storage: storage,
}).fields([{
    name: "image1",
    maxCount: 9
}, {
    name: "image2",
    maxCount: 1
}, {
    name: "image3",
    maxCount: 1
}, {
    name: "image4",
    maxCount: 1
}]);


class ProductController {
    static productlist = async (req, res) => {
        try {
            const product = await Product.find()
            return res.render("admin/product", {
                product
            })
        } catch (error) {
            console.log(error)
        }
    }

    static productadd = async (req, res) => {
        try {
            upload(req, res, async function (err) {
                // console.log(req.files)
                const product = Product({
                    image1: req.files.image1 ? req.files.image1[0].filename : null,
                    image2: req.files.image2 ? req.files.image2[0].filename : null,
                    image3: req.files.image3 ? req.files.image3[0].filename : null,
                    image4: req.files.image4 ? req.files.image4[0].filename : null,
                })
                await product.save()
                console.log('success')
            })
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = ProductController;