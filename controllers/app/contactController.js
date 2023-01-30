const Contact = require("../../models/Contact");
const Service = require("../../models/Services")
const About = require("../../models/About")
const Footer = require("../../models/Footer")

class contactController {
    static contactList = async (req, res) => {
        try {
            const service = await Service.find();
            const about = await About.find();
            const footer = await Footer.find();
            // const contact = await Contact.find();
            return res.render('web/contact', {
                service,
                about,
                footer
            });
        } catch (err) {
            console.log(err);
        }
    }
    static contactAdd = async (req, res) => {
        try {
            // console.log("scnfxc");
            const contact = Contact({
                name: req.body.name,
                email: req.body.email,
                subject: req.body.subject,
                message: req.body.message,
            })
            await contact.save()
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = contactController;