const Technologies = require("../../models/Technologies");
const path = require('path');
const multer = require('multer');
const root = process.cwd();
const imageFilter = require('../../config/imageFilter');
const fs = require('fs');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.join(root + "/public/uploads/technologies"));
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
    fileFilter: imageFilter,
}).single('icon');

class TechnologiesController {
    static technologieslist = async (req, res) => {
        try {
            const technologies = await Technologies.find();
            return res.render('admin/technologies', {
                technologies
            });
        } catch (err) {
            console.log(err);
        }
    }
    static technologiesadd = async (req, res) => {
        try {
            upload(req, res, async function (err) {
                // console.log(req.file);
                // console.log(req.body);
                const technologies = Technologies({
                    category: req.body.category,
                    icon: req.file.filename,
                    text: req.body.text
                })
                await technologies.save()
            })
        } catch (err) {
            console.log(err);
        }
    }
    static technologiesedit = async (req, res) => {
        try {
            const technologies = await Technologies.findOne({
                _id: req.body.editid,
            });
            // console.log(technologies);
            await Technologies.findOneAndUpdate({
                _id: req.body.editid
            }, {
                category: req.body.editcategory,
                text: req.body.edittext,
            });
            return res.send("Technologies updated successfully");
        } catch (err) {
            console.log(err);
        }
    }

    static technologiesdelete = async (req, res) => {
        try {
            // console.log(req.body.id);
            const technologies = await Technologies.findByIdAndDelete({
                _id: req.body.id
            });
            fs.unlinkSync(path.join(root, "/public/uploads/technologies", technologies.image),
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
module.exports = TechnologiesController;