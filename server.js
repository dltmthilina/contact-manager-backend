const express = require("express");
const connectionDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");


const dotenv = require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes")
const userRoutes = require("./routes/userRoutes")

const app = express()

connectionDb();

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})