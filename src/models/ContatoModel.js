const mongoose = require('mongoose');
const validator = require('validator');
const ContatoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: false, defalut: ''},
    telefone: {type: String, required: false, defalut: ''},
    email: {type: String, required: false, defalut: ''},
    criadoEm: {type: Date, defalut: Date.now()},

});
const ContatoModel = mongoose.model('Contato', ContatoSchema);
class Contato{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.contato = null;
    }
    async register(){
        this.valida();
        if(this.errors.length > 0) return;
        this.contato = await ContatoModel.create(this.body);
    }
    static async getContatoById(id){
        if(typeof id !== 'string') return;
        const user = await ContatoModel.findById(id);
        return user;
    }
    valida(){
        this.cleanUp();
        if(this.body.email && !validator.default.isEmail(this.body.email)) this.errors.push('E-mail inválido');

        if(!this.body.nome) this.errors.push('Nome é um campo obrigatório')
        if(!this.body.email && !this.body.telefone) this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone')
    }
    cleanUp(){
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.telefone,
        }
    }
}
module.exports = Contato;