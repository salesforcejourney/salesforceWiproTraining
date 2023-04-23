import { LightningElement } from "lwc";

export default class CssLwcDemo extends LightningElement {
  applyClass = false;
  addClassHandler(event) {
    this.applyClass = true;
  }
  removeClassHandler(event) {
    this.applyClass = false;
  }
  get box() {
    if (this.applyClass === false) {
      //remove the class
      return "";
    } else if (this.applyClass === true) {
      //add the class
      return "box-color";
    }
  }
  addClassDomHandler() {
    let element = this.template.querySelector(".domselector");
    element.classList.add("box-color");
  }
  removeClassDomHandler() {
    let element = this.template.querySelector(".domselector");
    element.classList.remove("box-color");
  }
}
