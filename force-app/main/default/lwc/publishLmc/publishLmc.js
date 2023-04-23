import { LightningElement, wire } from "lwc";
import SAMPLEMC from "@salesforce/messageChannel/sampleMessage__c";
import {
  APPLICATION_SCOPE,
  MessageContext,
  publish
} from "lightning/messageService";
export default class PublishLmc extends LightningElement {
  @wire(MessageContext) context;

  clickHandler(event) {
    let payload = {
      lmsData: {
        message: "Welcome from Publisher LMC"
      }
    };
    publish(this.context, SAMPLEMC, payload);
  }
}
