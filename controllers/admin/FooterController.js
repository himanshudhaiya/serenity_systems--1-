const Footer = require('../../models/Footer');

class FooterController {
    static footerlist = async (req, res) => {
        try {
            const footer = await Footer.find();
            return res.render('admin/footer', {
                footer
            });
        } catch (err) {
            console.log(err);
        }
    }
    // static addfooter = async (req, res) => {
    //     try {
    //         const footer = Footer({

    //         })
    //         await footer.save();
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    static addfooter = async (req, res) => {
        try {
            // console.log(req.body)
            var footer = await Footer.findOne();
            if (footer) {
                await Footer.findOneAndUpdate({}, {
                    about: req.body.about.trim(),
                    email: req.body.email.trim(),
                    mobile: req.body.mobile.trim(),
                    address: req.body.address.trim(),
                    twitter: req.body.twitter.trim(),
                    facebook: req.body.facebook.trim(),
                    linkedin: req.body.linkedin.trim(),
                    updated_at: Date.now(),
                })
            } else {
                const footer = await Footer({
                    about: req.body.about.trim(),
                    email: req.body.email.trim(),
                    mobile: req.body.mobile.trim(),
                    address: req.body.address.trim(),
                    twitter: req.body.twitter.trim(),
                    facebook: req.body.facebook.trim(),
                    linkedin: req.body.linkedin.trim(),
                    updated_at: Date.now(),
                })
                await footer.save();
            }
            return res.send("Contact add successfully")

        } catch (err) {
            console.log(err)
            return res.status(500).send("Something went wrong please try again later")
        }
    }

    static deletefooter = async (req, res) => {
        try {
            const footer = await Footer.deleteOne({
                _id: req.body.id
            })
            if (footer) {
                return console.log("Footer deleted successfully");
            } else {
                return console.log("Footer not found");
            }
        } catch (err) {
            console.log(err);
        }
    }



}
module.exports = FooterController;