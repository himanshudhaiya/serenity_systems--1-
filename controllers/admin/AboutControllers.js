const About = require("../../models/About")

class AboutController {
    static aboutlist = async (req, res) => {
        try {
            const about = await About.find()
            return res.render("admin/about", {
                about
            })
        } catch (error) {
            console.log(error)
        }
    }
    static addabout = async (req, res) => {
        try {
            const about = About({
                title: req.body.title,
            })
            await about.save()
        } catch (error) {
            console.log(error)
        }
    }

    static deleteabout = async (req, res) => {
        try {
            const about = await About.findByIdAndDelete({
                _id: req.body.id
            })
            if (about) {
                return console.log("About deleted successfully")
            } else {
                return console.log("About not found")
            }
        } catch (error) {
            console.log(error)
        }

    }
}

module.exports = AboutController