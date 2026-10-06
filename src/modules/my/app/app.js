import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    name = 'Rob Ferro';
    clicks = 0;

    handleClick() {
        this.clicks++;
    }
}
