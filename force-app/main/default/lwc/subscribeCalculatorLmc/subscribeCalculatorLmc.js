import { LightningElement, wire } from "lwc";
import CALCHANNEL from "@salesforce/messageChannel/calculatorChannel__c";
import {
  APPLICATION_SCOPE,
  subscribe,
  unsubscribe,
  MessageContext
} from "lightning/messageService";

export default class SubscribeCalculatorLmc extends LightningElement {
  subscriber;
  calresult;

  @wire(MessageContext) context;

  connectedCallback() {
    this.subscribecalculatorchannel();
  }

  subscribecalculatorchannel() {
    this.subscriber = subscribe(
      this.context,
      CALCHANNEL,
      (lmcpayload) => this.handleMessage(lmcpayload),
      { scope: APPLICATION_SCOPE }
    );
  }

  handleMessage(lmcpayload) {
    this.calresult = lmcpayload.lmsData.result;
  }

  disconnectedCallback() {
    unsubscribe(this.subscriber);
    this.subscriber = null;
  }
}
