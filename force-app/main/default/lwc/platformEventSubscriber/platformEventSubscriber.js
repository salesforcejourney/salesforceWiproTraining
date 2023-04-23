import { LightningElement } from "lwc";
import {
  subscribe,
  unsubscribe,
  onError,
  setDebugFlag,
  isEmpEnabled
} from "lightning/empApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
export default class PlatformEventSubscriber extends LightningElement {
  channelName = "/event/Communication_Message__e";
  subscription;
  connectedCallback() {
    this.handleSubscribe();
  }

  handleSubscribe() {
    // Callback invoked whenever a new event message is received
    const messageCallback = (response) => {
      console.log("New message received: ", JSON.stringify(response));
      // Response contains the payload of the new message received
      this.handleNotification(response);
    };

    subscribe(this.channelName, -1, messageCallback).then((response) => {
      console.log(
        "Subscripton has been sent to ",
        JSON.stringify(response.channel)
      );
      this.subscription = response;
      this.handleNotification(response);
    });
  }

  handleNotification(response) {
    console.log("response ", response);
    //console.log("Response Message", response.data.payload.message__c);
    if (response.hasOwnProperty("data")) {
      let jsonObj = response.data;
      if (jsonObj.hasOwnProperty("payload")) {
        console.log("Response Message", response.data.payload.message__c);
        const event = new ShowToastEvent({
          title: "Get Help",
          message: response.data.payload.message__c,
          variant: "warning",
          mode: "sticky"
        });
        this.dispatchEvent(event);
      }
    }
  }
}
