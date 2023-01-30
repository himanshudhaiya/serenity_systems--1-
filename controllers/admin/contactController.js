const Contact = require("../../models/Contact");



class ContactController {
    static contactList = async (req, res) => {
        try {
            const contact = await Contact.find();
            return res.render('admin/contact', {
                contact
            });
        } catch (err) {
            console.log(err);
        }
    }

    static contactAdd = async (req, res) => {
        try {

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

    static contactedit = async (req, res) => {
        try {
            // return console.log(req.body.editid);
            const contact = await Contact.findOne({
                _id: req.body.editid,
            });
            // return console.log(req.body.editid);
            await Contact.findOneAndUpdate({
                _id: req.body.editid
            }, {
                name: req.body.editname,
                email: req.body.editemail,
                subject: req.body.editsubject,
                message: req.body.editmessage,
            })
            return res.send("contact edited successfully");
        } catch (err) {
            console.log(err);
        }
    }


    static contactDelete = async (req, res) => {
        try {
            // console.log(req.body.id);
            const contact = await Contact.deleteOne({
                _id: req.body.id
            });
            if (contact) {
                return console.log("Contact deleted successfully");
            } else {
                return console.log("Contact not found");
            }
        } catch (err) {
            console.log(err);
        }
    }


}
module.exports = ContactController;