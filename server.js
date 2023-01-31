const express = require("express")

const dotenv = require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes")

const app = express()

app.use("/api/contacts/", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})