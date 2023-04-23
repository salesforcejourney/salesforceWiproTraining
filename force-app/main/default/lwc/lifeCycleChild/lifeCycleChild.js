import Error from "@salesforce/schema/BackgroundOperation.Error";
import { LightningElement } from "lwc";

export default class LifeCycleChild extends LightningElement {
  constructor() {
    super();
    console.log("Child Constructor is called");
  }

  connectedCallback() {
    console.log("Child Connected callback is called");
    throw new Error("Loading of child Component is failed");
  }

  renderedCallback() {
    console.log("Child render callback is called");
  }

  disconnectedCallback() {
    console.log("Child component removing");
  }
}
