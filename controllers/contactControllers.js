const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async(req, res)=>{
    const contacts = await Contact.find({user_id: req.user.id });  
    res.status(200).json(contacts); 
})


//@desc create contacts
//@route POST /api/contacts
//@access private
const createContacts = asyncHandler(async(req, res)=>{
   
    const {name, email, phone} = req.body; 
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandetory")
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    })
    res.status(201).json(contact)
})

//@desc get contacts by id
//@route GET /api/contacts/:id
//@access private
const getContactsById = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(200).json(contact);
})


//@desc update contacts by id
//@route PUT /api/contacts/:id
//@access private
const updateContactsById = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true},
    );

    res.status(200).json(updatedContact);
})

//@desc delete contacts by id
//@route DELETE /api/contacts/:id
//@access private
const deleteContactsById = asyncHandler(async(req, res)=>{
     const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    } 
    await Contact.remove(contact);
    res.status(200).json("deleted");
})


module.exports = {getContacts, createContacts, getContactsById, updateContactsById, deleteContactsById}