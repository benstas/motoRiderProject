import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./About.html";
class Home extends LightningElement {
  constructor(...args) {
    super(...args);
    this.menuClass = 'slds-hide';
    this._timeoutId = void 0;
  }
  showMenu(event) {
    clearTimeout(this._timeoutId);
    this.menuClass = 'slds-show';
  }
  hideMenu(event) {
    this._timeoutId = setTimeout(() => {
      this.menuClass = 'slds-hide';
    }, 300);
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(Home, {
  track: {
    menuClass: 1
  },
  fields: ["_timeoutId"]
});
export default _registerComponent(Home, {
  tmpl: _tmpl,
  sel: "pages-about",
  apiVersion: 60
});