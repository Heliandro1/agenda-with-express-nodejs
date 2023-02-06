import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login  from "./modules/login";

const login = new Login('.form-cadastro');
const cadastro = new Login('.form-login');
login.init();
cadastro.init();