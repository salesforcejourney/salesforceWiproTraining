import { LightningElement } from "lwc";

export default class ChildCustomEvent extends LightningElement {
  closeModalHandler() {
    //step 1 : create the custom event
    let myEvent = new CustomEvent("closemodal");

    //step 2 : dispatch the event
    this.dispatchEvent(myEvent);
  }
}
