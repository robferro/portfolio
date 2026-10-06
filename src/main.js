import { createElement } from 'lwc';
import App from 'my/app';

const app = createElement('my-app', { is: App });
document.querySelector('#main').appendChild(app);
