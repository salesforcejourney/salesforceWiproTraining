import { LightningElement } from "lwc";

export default class ParentCustomEvent extends LightningElement {
  showModal = false;
  clickHandler() {
    this.showModal = true;
  }
  closeModalHandler() {
    this.showModal = false;
  }
}
