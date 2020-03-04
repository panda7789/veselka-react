const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const middlewares = require('./middlewares');
const articles = require('./api/articles');

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.use(express.json());

app.get('/', (req, res) => {
   res.json({
    message: 'Hello World!',
   });
});

app.use('/api/articles', articles);

app.use(middlewares.notFound);
app.use(middlewares.otherError);

const port = process.env.PORT || 1338;
app.listen(port, () =>{
    console.log(`Listening at http://localhost:${port}`);
})