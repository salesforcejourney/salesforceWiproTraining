import { LightningElement, wire } from "lwc";
import { fireEvent } from "c/pubsub";
import { CurrentPageReference } from "lightning/navigation";
import CALCHANNEL from "@salesforce/messageChannel/calculatorChannel__c";
import {
  APPLICATION_SCOPE,
  publish,
  MessageContext
} from "lightning/messageService";
export default class ParentCalculatorApiMethod extends LightningElement {
  number1;
  number2;
  result;

  @wire(CurrentPageReference)
  pageRef;

  @wire(MessageContext) context;

  chanegeHandler(event) {
    let { name, value } = event.target;
    if (name === "number1") this.number1 = value;
    if (name === "number2") this.number2 = value;
  }

  clickHandler(event) {
    this.refs.calculate.doAddition(this.number1, this.number2);
  }

  resultHandler(event) {
    this.result = event.detail.result;

    let payload = {
      addresultvalue: this.result
    };

    fireEvent(this.pageRef, "addresult", payload);

    let lmcpayload = {
      lmsData: {
        result: this.result
      }
    };
    publish(this.context, CALCHANNEL, lmcpayload);
  }
}
