import { LightningElement, api } from "lwc";

export default class ChildCalculatorApiMethod extends LightningElement {
  result = 0;

  @api
  doAddition(number1, number2) {
    this.result = parseInt(number1) + parseInt(number2);

    //1. create the custom event
    let myEvent = new CustomEvent("addresult", {
      detail: {
        result: this.result
      }
    });

    //2. dispatch the event
    this.dispatchEvent(myEvent);
  }
}
