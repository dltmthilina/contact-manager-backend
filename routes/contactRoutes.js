const express = require("express");
const router = express.Router();

const {getContacts, createContacts, getContactsById, updateContactsById, deleteContactsById } = require("../controllers/contactControllers")

router.route("/").get(getContacts).post(createContacts);
router.route("/:id").get(getContactsById).put(updateContactsById).delete(deleteContactsById)

module.exports = router;