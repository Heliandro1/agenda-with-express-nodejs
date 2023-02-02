exports.middleWare = (req, res, next) => {
    res.locals.localvariable = 'Este é o value';
    console.log();
    console.log('Passei no seu middleware global');
    console.log(res.locals);
    next();
}
exports.checkCsrf = (err, req, res, next) =>{
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.send('NOT FOUND');
    }
}
exports.csrfMiddleware = (req, res, next) =>{
    res.locals.csrfToken = req.csrfToken();
    next();
}