require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const recipeRoutes = require('./routes/recipes');



const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/recipes', recipeRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
