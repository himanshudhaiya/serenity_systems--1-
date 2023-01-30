const Slider = require("../../models/Slider")
const Technologies = require("../../models/Technologies")
const Ourteam = require("../../models/OurTeam")
const CustomerReview = require("../../models/CustomerReview")
const Contact = require("../../models/Contact")
const Footer = require("../../models/Footer")
const Service = require("../../models/Services")
const About = require("../../models/About")
const Our_work = require("../../models/Our_work")

class HomeController {
    static homeget = async (req, res) => {
        try {
            const slider = await Slider.find();
            const service = await Service.find();
            const technologies = await Technologies.find();
            const ourteam = await Ourteam.find();
            const customerReview = await CustomerReview.find();
            const contact = await Contact.find();
            const footer = await Footer.find();
            const about = await About.find();
            const ourwork = await Our_work.find();

            return res.render("web/index", {
                slider,
                service,
                technologies,
                ourteam,
                customerReview,
                contact,
                footer,
                about,
                ourwork,
            })

        } catch (error) {
            console.log(error)
        }
    }
    static services = async (req, res) => {
        try {
            const service = await Service.find();
            const about = await About.find();
            const footer = await Footer.find();
            console.log(service)
            return res.render("/web/footer", {
                service,
                about,
                footer
            })
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = HomeController;