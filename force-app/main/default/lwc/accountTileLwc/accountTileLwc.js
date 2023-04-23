import { LightningElement, api } from "lwc";

export default class AccountTileLwc extends LightningElement {
  @api accountile;

  clickHandler(event) {
    event.preventDefault();
    //1 create the custom event

    let myEvent = new CustomEvent("selectedrec", {
      detail: this.accountile.Id
    });

    //2. dispatch event
    this.dispatchEvent(myEvent);
  }
}
