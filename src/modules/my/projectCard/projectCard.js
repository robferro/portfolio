import { LightningElement, api } from 'lwc';

export default class ProjectCard extends LightningElement {
    @api project;

    openDialog() {
        this.refs.dialog.showModal();
        // Stop the page behind the dialog from scrolling
        document.body.style.overflow = 'hidden';
    }

    closeDialog() {
        this.refs.dialog.close();
    }

    // Clicking the dimmed backdrop (outside the dialog content) closes it
    handleBackdropClick(event) {
        if (event.target === this.refs.dialog) {
            this.closeDialog();
        }
    }

    // Fires for every close: ✕ button, backdrop click or Esc key
    handleClose() {
        document.body.style.overflow = '';
    }

    disconnectedCallback() {
        document.body.style.overflow = '';
    }
}
