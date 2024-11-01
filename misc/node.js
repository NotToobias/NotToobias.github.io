// Importer nødvendige moduler
require('dotenv').config(); // Loader miljøvariabler fra .env-filen
const mongoose = require('mongoose'); // Mongoose til MongoDB-forbindelse
const express = require('express'); // Express til serveropsætning

const app = express(); // Initialiserer Express
const PORT = 3000; // Definerer porten, serveren kører på

// Forbind til MongoDB Atlas ved hjælp af forbindelsesstrengen fra .env
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Forbundet til MongoDB Atlas");
}).catch(err => {
    console.error("MongoDB Atlas fejl:", err);
});

// Start Express-serveren
app.listen(PORT, () => {
    console.log(`Serveren kører på http://localhost:${PORT}`);
});
