import { LightningElement } from 'lwc';
import projects from 'data/projects';

export default class App extends LightningElement {
    name = 'Rob Ferro';
    projects = projects;
}
