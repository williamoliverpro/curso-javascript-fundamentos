/*
  TODO:
  - Remover var, utilizar let ou const
  - Refatorar para não ter função anônima
  - Refatorar callback
*/

import UserPage from './pages/User';

const app = document.querySelector('#app');

UserPage(html => app.innerHTML = html)