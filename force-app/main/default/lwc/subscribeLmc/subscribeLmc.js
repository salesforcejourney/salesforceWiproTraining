import { LightningElement, wire } from "lwc";
import SAMPLEMC from "@salesforce/messageChannel/sampleMessage__c";
import {
  APPLICATION_SCOPE,
  MessageContext,
  subscribe,
  unsubscribe
} from "lightning/messageService";

export default class SubscribeLmc extends LightningElement {
  message;
  mySubscriber;
  @wire(MessageContext) context;

  connectedCallback() {
    this.subscribeSampleMessageChannel();
  }

  subscribeSampleMessageChannel() {
    this.mySubscriber = subscribe(
      this.context,
      SAMPLEMC,
      (payload) => {
        this.handleMessage(payload);
      },
      {
        scope: APPLICATION_SCOPE
      }
    );
  }

  handleMessage(payload) {
    this.message = payload.lmsData.message;
  }

  disconnectedCallback() {
    unsubscribe(this.mySubscriber);
    this.mySubscriber = null;
  }
}
