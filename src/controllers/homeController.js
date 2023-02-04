const Contato = require('../models/ContatoModel')
exports.index = async (_req, res) =>{
    const contatos = await Contato.getContatos();
    res.render('index', { contatos });
};