const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const middlewares = require('./middlewares');

const app = express();

var akceRouters = require('./api/routes/akceRoutes');
var aktualityRouters = require('./api/routes/aktualityRoutes');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"]
}));
app.use(bodyParser.json())



app.use('/api/akce', akceRouters);
app.use('/api/aktuality', aktualityRouters);
//app.use('/img', express.static('uploads'));
//app.use('/api/articles', require('./api/routes/articleRoutes'));


app.use(middlewares.notFound);
app.use(middlewares.otherError);

const port = process.env.PORT || 1338;
app.listen(port, () =>{
    console.log(`Listening at http://localhost:${port}`);
})