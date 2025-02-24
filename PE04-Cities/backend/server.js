
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const CitySchema = new mongoose.Schema({
  name: String,
  country: String,
  population: String,
});

const City = mongoose.model('City', CitySchema);

app.get('/cities', async (req, res) => {
  const cities = await City.find();
  res.json(cities);
});

app.post('/cities', async (req, res) => {
  const city = new City(req.body);
  await city.save();
  res.json(city);
});

app.get('/cities/:id', async (req, res) => {
  const city = await City.findById(req.params.id);
  res.json(city);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
