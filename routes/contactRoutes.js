const express = require("express");
const router = express.Router();

const {getContacts, createContacts, getContactsById, updateContactsById, deleteContactsById } = require("../controllers/contactControllers");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken)
router.route("/").get(getContacts).post(createContacts);
router.route("/:id").get(getContactsById).put(updateContactsById).delete(deleteContactsById)

module.exports = router;