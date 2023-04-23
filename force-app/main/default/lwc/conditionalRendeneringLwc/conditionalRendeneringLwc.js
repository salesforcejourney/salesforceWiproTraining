import { LightningElement } from "lwc";

export default class ConditionalRendeneringLwc extends LightningElement {
  showDetails = false;

  changeHandler(event) {
    this.showDetails = event.target.checked;
  }
}
