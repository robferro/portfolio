import { LightningElement, api } from 'lwc';

export default class ProjectCard extends LightningElement {
    @api project;

    expanded = false;

    get toggleLabel() {
        return this.expanded ? 'Show less' : 'Read more';
    }

    get ariaExpanded() {
        return String(this.expanded);
    }

    handleToggle() {
        this.expanded = !this.expanded;
    }
}
