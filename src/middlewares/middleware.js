exports.middleWare = (req, res, next) => {
    res.locals.localvariable = 'Este é o value';
    console.log();
    console.log('Passei no seu middleware global');
    console.log(res.locals);
    next();
}
exports.checkCsrf = (err, req, res, next) =>{
    if (err) {
        return res.render('404');
    }
    next();
}
exports.csrfMiddleware = (req, res, next) =>{
    res.locals.csrfToken = req.csrfToken();
    next();
}