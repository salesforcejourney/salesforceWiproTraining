import { LightningElement, api } from "lwc";
import LightningAlert from "lightning/alert";

export default class ChildApiMethod extends LightningElement {
  @api message;

  @api
  displayMessage(message) {
    this.handleAlertClick(message);
  }

  async handleAlertClick(message) {
    await LightningAlert.open({
      message: message,
      theme: "success", // a red theme intended for error states
      label: "Message from Parent" // this is the header text
    });
    //Alert has been closed
  }
}
