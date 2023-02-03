exports.middleWare = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    next();
}
exports.checkCsrf = (err, req, res, next) =>{
    if (err) {
        console.log(err);
        return res.render('404');
    }
    next();
}
exports.csrfMiddleware = (req, res, next) =>{
    res.locals.csrfToken = req.csrfToken();
    next();
}