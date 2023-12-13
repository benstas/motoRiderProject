import { LightningElement, track } from "lwc";
export default class Home extends LightningElement{
    @track menuClass = 'slds-hide';
    _timeoutId;

    showMenu(event) {
        clearTimeout(this._timeoutId);
        this.menuClass = 'slds-show';
    }

    hideMenu(event) {
        this._timeoutId = setTimeout(() => {
            this.menuClass = 'slds-hide';
        }, 300);
    }
}