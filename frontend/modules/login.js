import validator from 'validator';
export default class Login{
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }
    init(){
        this.events();
    }
    events(){
        if(!this.forms) return;
        this.form.addEventListener('submit', (e) =>{
            e.preventDefault();
            this.validate(e);
        });
    }
    validate(e){
        const el = e.target;
        const p = document.createElement("p");
        p.classList.add('text-danger');
        p.style.fontSize = '0.9em';
        const emailInput = el.querySelector('input[name = "email"]');
        const passwordInput = el.querySelector('input[name = "password"]');
        let error = false;
        if(!validator.isEmail(emailInput.value)){
            emailInput.insertAdjacentElement('afterend', p);
            error = true;
        }
        if(passwordInput.value.length < 3 || passwordInput.value.length > 50){
            passwordInput.insertAdjacentElement('afterend', p);
            error = true;
        }

        if(!error){
            el.submit();
        }
    }
}