const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT =  4000;
const MONGO_URI = "mongodb+srv://shanmugavel:Sam123456@items-10-04-2025.global.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000";

// Enable CORS for all origins (or restrict to specific ones)
app.use(cors());

// Middleware
app.use(express.json());
app.use('/api', itemRoutes);

// Connect to Azure Cosmos DB (MongoDB API)
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
