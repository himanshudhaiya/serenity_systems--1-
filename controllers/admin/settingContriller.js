const Setting = require("../../models/Settings")


class SettingController {
    static settinglist = async (req, res) => {
        try {
            const setting = await Setting.find()
            return res.render("admin/setting", {
                setting
            })
        } catch (err) {
            console.log(err)
        }
    }

    static settingadd = async (req, res) => {
        try {
            // console.log(req.body)
            const setting = Setting({
                title: req.body.title,
                service_text: req.body.service_text,
                service_title: req.body.service_title,
                description: req.body.description,
            })
            await setting.save();
        } catch (err) {
            console.log(err)
        }
    }

    static settingedit = async (req, res) => {
        try {
            // console.log(req.body)

            const setting = await Setting.findOneAndUpdate({
                _id: req.body.editid
            }, {
                title: req.body.editservice_title,
                service_text: req.body.editservice_text,
                service_title: req.body.editservice_title,
                description: req.body.editdescription,
            })

        } catch (err) {
            console.log(err)
        }
    }

    static settingdelete = async (req, res) => {
        try {
            // console.log(req.body.id)
            const setting = await Setting.deleteOne({
                _id: req.body.id,
            })
            if (setting) {
                console.log("Setting Delete Successfully")

            } else {
                console.log("Setting Delete NOT Found")
            }
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = SettingController;