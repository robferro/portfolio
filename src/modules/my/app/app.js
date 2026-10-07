import { LightningElement } from 'lwc';
import projects from 'data/projects';

export default class App extends LightningElement {
    name = 'Roberto Ferro';
    projects = projects;
}
