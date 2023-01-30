const Our_Work = require("../../models/Our_work.js")
const fs = require("fs")
const path = require("path")
const multer = require("multer")
const root = process.cwd()

const imageFilter = function (req, file, cb) {
    // Accept images only|
    if (!file.originalname.match(/\.(svg|SVG)$/)) { // jpg|JPG|jpeg|JPEG|png|PNG|mp4|avi
        req.fileValidationError = "Only image files are allowed!";
        return cb(new Error("Only image files are allowed!"), false);
    }
    cb(null, true);
};

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.join(root + "/public/uploads/Our_work"))
    },
    filename(ew, file, cb) {
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


class Our_workConteroller {
    static our_worklist = async (req, res) => {
        try {
            const our_work = await Our_Work.find()
            return res.render("admin/our_work", {
                our_work
            })
        } catch (err) {
            console.log(err)
        }
    }
    static our_worklistform = async (req, res) => {
        try {
            const our_work = await Our_Work.find()
            return res.render("admin/our_workform", {
                our_work
            })
        } catch (err) {
            console.log(err)
        }
    }

    static our_workadd = async (req, res) => {
        try {
            upload(req, res, async function (err) {
                // console.log(req.file)
                // console.log(req.body)
                const our_work = Our_Work({
                    image: req.file.filename,
                    heading: req.body.heading,
                    paragraph: req.body.paragraph,
                    heading1: req.body.heading1,
                    paragraph1: req.body.paragraph,
                    heading2: req.body.heading2,
                    paragraph2: req.body.paragraph,
                    heading3: req.body.heading3,
                    paragraph3: req.body.paragraph3,
                })
                await our_work.save();
            })

        } catch (error) {
            console.log(error)
        }
    }
    static our_worklist_edit_form = async (req, res) => {
        try {
            const user_id = req.params.id
            // console.log(user_id)
            const ourwork = await Our_Work.findOne({
                _id: user_id
            })
            return res.render("admin/our_work_Editform", {
                ourwork
            })
        } catch (err) {
            console.log(err)
        }
    }

    static our_workedit = async (req, res) => {
        try {
            const userid = req.body.editid
            // const our_work = await Our_Work.findOne({
            //     _id: req.body.editid
            // })
            await Our_Work.findByIdAndUpdate(userid, {
                heading: req.body.editheading,
                paragraph: req.body.editparagraph,
                heading1: req.body.editheading1,
                paragraph1: req.body.editparagraph1,
                heading2: req.body.editheading2,
                paragraph2: req.body.editparagraph2,
                heading3: req.body.editheading3,
                paragraph3: req.body.editparagraph3,
            })
        } catch (error) {
            console.log(error)
        }
    }

    static our_workdelete = async (req, res) => {
        try {
            const our_work = await Our_Work.findByIdAndDelete({
                _id: req.body.id
            })
            fs.unlinkSync(path.join(root, "/public/uploads/Our_work", our_work.image),
                (err) => {
                    if (err) {
                        console.log(err);
                    }
                }
            );
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Our_workConteroller;