import { LightningElement, wire } from "lwc";
import { registerListener, unregisterAllListeners } from "c/pubsub";
import { CurrentPageReference } from "lightning/navigation";

export default class SubscribeMessageLwc extends LightningElement {
  publishermessage;
  @wire(CurrentPageReference)
  pageRef;
  connectedCallback() {
    this.registerListnerPubSub();
  }

  registerListnerPubSub() {
    registerListener("publishevent", this.handleEvent, this);
  }

  handleEvent(payload) {
    this.publishermessage = payload.message;
  }

  disconnectedCallback() {
    unregisterAllListeners(this);
  }
}
