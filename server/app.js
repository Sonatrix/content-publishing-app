/** require dependencies */
const express = require('express');
const routes = require('./routes/');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cloudinary = require('cloudinary');

//initialise env variables
require('dotenv').config();

const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/medium';

/** configure cloudinary */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/** connect to MongoDB datastore */
try {
  mongoose.connect(url, {
    //useMongoClient: true
  });
} catch (error) {}

let port = 5000 || process.env.PORT;

/** set up routes {API Endpoints} */
routes(router);

/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
//app.use('/static',express.static(path.join(__dirname,'static')))

app.use('/api', router);

/** start server */
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
