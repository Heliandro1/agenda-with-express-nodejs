const Contato = require('../models/ContatoModel');
exports.index = (req, res) =>{
    res.render('contato');
}
exports.register = async (req, res) =>{
    try {
        const contato = new Contato(req.body);
        contato.register();
        if(contato.errors.length > 0){
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('index'));
            return;
        }
        req.flash('success', 'Contato registado com sucesso');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        
    } catch (error) {
        console.log(error);
        return res.render("404");
    }
}
exports.editIndex = async (req, res) =>{
    if(!req.params.id) return res.render('404');

    res.render('contato');
}