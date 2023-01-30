const Service = require('../../models/Services');
const fs = require("fs")
const path = require("path")
const multer = require("multer")
const root = process.cwd()
const imageFilter = require("../../config/imageFilter")

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.join(root + "/public/uploads/services"));
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

}).single("image")



class ServiceController {
    static servicelist = async (req, res) => {
        try {
            const service = await Service.find();
            return res.render("admin/service", {
                service
            });
        } catch (error) {
            console.log(error);
        }
    }

    // static serviceaddforms = async (req, res) => {
    //     try {
    //         return res.render("admin/serviceform", {

    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    static serviceadd = async (req, res) => {
        try {
            upload(req, res, async function (err) {
                // console.log(req.body)
                // console.log(req.file)
                const service = Service({
                    category: req.body.category,
                    image: req.file.filename,
                    description: req.body.description,
                    short_description: req.body.short_description
                })
                await service.save()
            })
        } catch (error) {
            console.log(error);
        }
    }

    static serviceupdate = async (req, res) => {
        try {
            const service = await Service.findOne({
                _id: req.body.editid
            })
            // console.log(req.body)
            const hello = await Service.findOneAndUpdate({
                _id: req.body.editid
            }, {
                category: req.body.editcategory,
                description: req.body.editdescription,
                short_description: req.body.editshort_description
            })
            // console.log(hello)
            return res.send("seccessful")
        } catch (error) {
            console.log(error);
        }
    }

    static servicedelete = async (req, res) => {
        try {
            const service = await Service.findByIdAndDelete({
                _id: req.body.id
            });
            fs.unlinkSync(path.join(root, "/public/uploads/services", service.image),
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
            if (service) {
                return console.log("Service deleted successfully");
            } else {
                return console.log("Service not found");
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ServiceController;