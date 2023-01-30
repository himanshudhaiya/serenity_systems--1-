const Slider = require("../../models/Slider");
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const root = process.cwd();
const imageFilter = require('../../config/imageFilter');


const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.join(root + "/public/uploads/slider"));
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
}).single('image');


class SliderController {
    static sliderlist = async (req, res) => {
        try {
            const slider = await Slider.find();
            return res.render("admin/slider", {
                slider
            });
        } catch (error) {
            console.log(error);
        }
    }

    static slideradd = async (req, res) => {
        try {
            upload(req, res, async function (err) {
                // console.log(req.file);
                const slider = Slider({
                    image: req.file.filename
                })
                await slider.save()
            });
        } catch (error) {
            console.log(error);
        }
    }
    static sliderdelete = async (req, res) => {
        try {
            // console.log(req.body.id);
            const slider = await Slider.findByIdAndDelete({
                _id: req.body.id
            });
            fs.unlinkSync(path.join(root, "/public/uploads/slider", slider.image),
                (err) => {
                    if (err) {
                        console.log(err);
                    }
                }
            );
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = SliderController;