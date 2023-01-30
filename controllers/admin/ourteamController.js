const Ourteam = require('../../models/OurTeam');
const path = require('path');
const multer = require('multer');
const root = process.cwd();
const imageFilter = require('../../config/imageFilter');
const fs = require('fs');

const storage = multer.diskStorage({

    destination(req, file, cb) {
        cb(null, path.join(root + "/public/uploads/ourteam"));
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }

})

const upload = multer({
    storage: storage,
    fileFilter: imageFilter,
}).single('image');


class OurteamController {
    static Ourteamlist = async (req, res) => {
        try {
            const ourteam = await Ourteam.find();
            return res.render('admin/ourteam', {
                ourteam
            });
        } catch (err) {
            console.log(err);
        }
    }
    static Ourteamadd = async (req, res) => {
        try {
            upload(req, res, async function (err) {
                // console.log(req.file);
                const ourteam = Ourteam({
                    name: req.body.name,
                    image: req.file.filename,
                    designation: req.body.designation,
                    facebook_url: req.body.facebook_url,
                    twitter_url: req.body.twitter_url,
                    linkedin_url: req.body.linkedin_url

                })
                await ourteam.save()
            })
        } catch (err) {
            console.log(err);
        }
    }
    static Ourteamedit = async (req, res) => {
        try {
            // console.log(req.body.editid);
            const ourteam = await Ourteam.findOne({
                _id: req.body.editid,
            });
            // console.log(overtime);
            await Ourteam.findOneAndUpdate({
                _id: req.body.editid
            }, {
                name: req.body.editname,
                designation: req.body.editdesignation,
                facebook_url: req.body.editfacebook_url,
                twitter_url: req.body.edittwitter_url,
                linkedin_url: req.body.editlinkedin_url
            });
            return res.send("Ourteam updated successfully");
        } catch (err) {
            console.log(err);
        }
    }

    static Ourteamdelete = async (req, res) => {
        try {
            // console.log(req.body.id);
            const ourteam = await Ourteam.findByIdAndDelete({
                _id: req.body.id
            });
            fs.unlinkSync(path.join(root, "/public/uploads/overtime", Ourteam.image),
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

module.exports = OurteamController;