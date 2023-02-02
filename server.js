require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const mongoose = require('mongoose');
const {checkCsrf, csrfMiddleware }= require('./src/middlewares/middleware');
const helmet = require('helmet');
const csrf = require("csurf");
const session = require('express-session');
let MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const sessionOpt = session({
    secret: 'joopmop',
    store: new MongoStore({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 24 * 7,
        httpOnly: true
    }
});
mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => app.emit('pronto'))
    .catch(e => console.log('Erro'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(sessionOpt);
app.use(cookieParser());
app.use(flash());
app.use(helmet());
app.use(csrf());
app.use(checkCsrf);
app.use(csrfMiddleware); 
app.use(routes);
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.on('pronto', () =>{
    app.listen(3001, () =>{
        console.log('Acessar http://localhost:3001');
        console.log('Server rodando na porta 3001');
    });
})