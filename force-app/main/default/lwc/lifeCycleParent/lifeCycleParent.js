import { LightningElement } from "lwc";

export default class LifeCycleParent extends LightningElement {
  showChild = true;
  constructor() {
    super();
    console.log("Parent Constructor is called");
    //this.addEventListener("select", () => {});
  }

  connectedCallback() {
    console.log("Parent Connected callback is called");
  }

  renderedCallback() {
    console.log("Parent render callback is called");
  }

  disconnectedCallback() {
    console.log("Parent component removing");
  }

  changeHandler(event) {
    this.showChild = event.target.checked;
  }

  errorCallback(error, stack) {
    console.log("Error ", JSON.stringify(error));
    console.log(error.message);
    console.log("Stack ", stack);
  }
}
