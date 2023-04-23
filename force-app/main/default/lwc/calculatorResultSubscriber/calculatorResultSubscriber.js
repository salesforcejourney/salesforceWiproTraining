import { LightningElement, wire } from "lwc";
import { registerListener, unregisterAllListeners } from "c/pubsub";
import { CurrentPageReference } from "lightning/navigation";
export default class CalculatorResultSubscriber extends LightningElement {
  result = 0;

  @wire(CurrentPageReference)
  pageRef;

  connectedCallback() {
    this.registerListnerPubSub();
  }

  registerListnerPubSub() {
    registerListener("addresult", this.handlePubSubOutput, this);
  }

  handlePubSubOutput(payload) {
    this.result = payload.addresultvalue;
  }

  disconnectedCallback() {
    unregisterAllListeners(this);
  }
}
