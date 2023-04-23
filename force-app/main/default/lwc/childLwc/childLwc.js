import { LightningElement, api } from "lwc";

export default class ChildLwc extends LightningElement {
  @api message;

  clickHandler(event) {
    //create the event
    let myEvent = new CustomEvent("sendmsg", {
      detail: {
        msg: "Welcome from LWC"
      }
    });

    //dispatch the event

    this.dispatchEvent(myEvent);
  }
}
