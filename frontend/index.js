import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login  from "./modules/login";

const login = new Login('.form-cadastro');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();