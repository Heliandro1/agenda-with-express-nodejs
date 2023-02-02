const HomeModel = require('../models/HomeModel');

exports.homePage = (_req, res) =>{
    res.render('index', {
        titulo: 'Este é o <span style="color:red;">titulo</span>',
        num: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
};
exports.post = (_req, res) =>{
    res.send(_req.body);
}