const Logo = require("../../models/Logo")
const fs = require("fs")
const multer = require("multer")
const root = process.cwd()
const path = require("path")
const imageFilter = require('../../config/imageFilter')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.join(root + "/public/uploads/logo"));
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
}).single('logo')


class logoController {
    static Logolist = async (req, res) => {
        try {
            const logo = await Logo.find();
            return res.render('admin/logo', {
                logo
            });
        } catch (err) {
            console.log(err);
        }
    }

    static addlogo = async (req, res) => {
        try {
            // console.log(req.body)
            upload(req, res, async function (err) {
                // if (req.fileValidationError) {
                //     return res.send(req.fileValidationError);
                // } else if (!req.file) {
                //     return res.send("Please upload an icon");
                // } else if (err instanceof multer.MulterError) {
                //     console.log(err);
                //     return res.send(err);
                // } else if (err) {
                //     console.log(err);
                //     return res.send(err);
                // }

                var logo = await Logo.findOne();
                if (logo) {
                    await Logo.findOneAndUpdate({}, {
                            logo: req.file.filename,
                            updated_at: Date.now(),
                        },
                        fs.unlink(
                            path.join(root, "/public/uploads/logo", logo.logo),
                            function (err) {
                                if (err) {
                                    console.log(err);
                                }
                            }
                        )
                    )

                } else {
                    const logo = await Logo({
                        logo: req.file.filename,
                        updated_at: Date.now(),
                    })
                    await logo.save();
                }
                return res.send("Contact add successfully")

            })

        } catch (err) {
            console.log(err)
            return res.status(500).send("Something went wrong please try again later")
        }
    }

    static logoedelete = async (req, res) => {
        try {
            const logo = await Logo.findByIdAndDelete({
                _id: req.body.id
            });
            fs.unlinkSync(path.join(root, "/public/uploads/services", service.image),
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
            if (logo) {
                return console.log("logo deleted successfully");
            } else {
                return console.log("logo not found");
            }
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = logoController;

// static about_add = async (req, res) => {
//     try {
//         upload(req, res, async function (err) {
//             if (req.fileValidationError) {
//                 return res.send(req.fileValidationError);
//             } else if (!req.file) {
//                 return res.send("Please upload an icon");
//             } else if (err instanceof multer.MulterError) {
//                 console.log(err);
//                 return res.send(err);
//             } else if (err) {
//                 console.log(err);
//                 return res.send(err);
//             }

//             var exist = await About.findOne();
//             if (exist) {
//                 await About.findOneAndUpdate({}, {
//                     image: req.file.filename,
//                     heading: req.body.heading,
//                     description: req.body.description,
//                     updated_at: Date.now(),
//                 });

//                 fs.unlink(
//                     path.join(root, "public/uploads/about", exist.image),
//                     function (err) {
//                         if (err) {
//                             console.log(err);
//                         }
//                     }
//                 );
//             } else {
//                 const about = await About({
//                     image: req.file.filename,
//                     heading: req.body.heading,
//                     description: req.body.description,
//                 });
//                 await about.save();
//             }
//             return res.send("about updated successfully");
//         });
//     } catch (error) {
//         console.log(error);
//         return res
//             .status(500)
//             .send("Something went wrong please try again later");
//     }
// };