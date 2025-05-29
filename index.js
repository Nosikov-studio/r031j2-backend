const express = require("express");
const cookieParser =require("cookie-parser");

const {jwtMiddleware} = require('./jwtMiddleware');
const login = require('./routes/login');
const test = require('./routes/test');
const logout = require('./routes/logout');
const cors = require('cors');


const app=express();
const corsOptions = {
  origin: 'https://truruky.ru',  // ваш фронтенд домен
  credentials: true,            // разрешаем куки
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {res.send("hello from backend")});
app.post('/login', login);
app.post('/test', test);
app.post('/logout', logout);

app.listen(40444, () => {
        console.log('Сервер запущен на порту 40444')});