const Contato = require('../models/ContatoModel');
exports.index = (req, res) =>{
    res.render('contato');
}
exports.register = async (req, res) =>{
    try {
        const contato = new Contato(req.body);
        contato.register();
        if(!req.session.user){
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('success', 'Contato registado com sucesso');
        req.session.save(() => res.redirect('back'));
        
    } catch (error) {
        console.log(error);
        return res.render("404");
    }
}