import { LightningElement } from "lwc";

export default class ParentApiMethod extends LightningElement {
  clickHandler(event) {
    //this.refs.childapimethod.displayMessage("Welcome from Parent Component");
    this.template
      .querySelector("c-child-api-method")
      .displayMessage("Welcome from Parent Component");
  }
}
