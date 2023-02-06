import validator from 'validator';
export default class Login{
    constructor(formClass){
        this.form = document.querySelector(formClass);
        this.error = false;
    }
    init(){
        console.log('olá mundo');
        this.events();
    }
    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', (e) =>{
            e.preventDefault();
            this.validate(e);
        });
    }
    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name = "email"]');
        const passwordInput = el.querySelector('input[name = "password"]');
        
        if(this.error){
            return;
        }
        if(!validator.isEmail(emailInput.value)){
            emailInput.insertAdjacentHTML('afterend', '<p>E-mail inválido</p>');
            
            this.error = true;
        }
        if(passwordInput.value.length < 3 || passwordInput.value.length > 50){
            passwordInput.insertAdjacentHTML('afterend', '<p>Password precisa ter entre 3 e 50 caracteres</p>');
            this.error = true;
        }

        if(!this.error){
            el.submit();
        }
    }
}