const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    titulo: {type: String, require: true},
    descricao: String

});
const LoginModel = mongoose.model('Login', LoginSchema);
class Login{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.users = null;
    }

    valida(){
        
    }
}
module.exports = Login;