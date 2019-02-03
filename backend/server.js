const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');

// Exporting routes
const resources = require('./routes/api/resources');
const stocks = require('./routes/api/stocks');


// const userInfo = require('./routes/api/userInfo');
// const login = require('./routes/api/login');
// const portfolio = require('./routes/api/portfolio');
// const signup = require('./routes/api/signup');
// const transactions = require('./routes/api/transactions');

// const companies = require('./routes/api/companies');

// Exporting db
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD');
     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
     res.setHeader('Access-Control-Allow-Credentials', true);
     next();
});

// app.use(passport.initialize());
// require('./config/passport')(passport);

app.get('/', (req, res) => res.send(' Luis Hello, you are on the root directory Luis!'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Use routes
app.use('/api/resources', resources);
app.use('/api/stocks', stocks);


// app.use('/api/users', userInfo);
// app.use('/api/transactions', transactions);
// app.use('/api', portfolio);

// app.use('/api', companies);

// app.use('/api', login);

// app.use('/api', signup);




// process.env.PORT for Heroku, port 5000 for local
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

