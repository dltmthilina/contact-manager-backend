
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res)=>{
    res.status(200).json({message:"Get all contacts"});
    
}


//@desc create contacts
//@route POST /api/contacts
//@access public
const createContacts = async(req, res)=>{
    console.log(req.body)
    const {name, email, phone} = req.body; 
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandetory")
    }
    res.status(201).json({message:"Create contacts"})
}

//@desc get contacts by id
//@route GET /api/contacts/:id
//@access public
const getContactsById = async(req, res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`});
}

//@desc update contacts by id
//@route PUT /api/contacts/:id
//@access public
const updateContactsById = async(req, res)=>{
    
    res.status(200).json({message:`Update contact for ${req.params.id}`});
}

//@desc delete contacts by id
//@route DELETE /api/contacts/:id
//@access public
const deleteContactsById = async(req, res)=>{
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
  
}



module.exports = {getContacts, createContacts, getContactsById, updateContactsById, deleteContactsById}