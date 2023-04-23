import { LightningElement, wire } from "lwc";
import { fireEvent } from "c/pubsub";
import { CurrentPageReference } from "lightning/navigation";
export default class PublishMessageLwc extends LightningElement {
  @wire(CurrentPageReference)
  pageRef;
  clickHandler(event) {
    let payload = {
      message: "Welcome to learn LWC : Pub-Sub"
    };
    fireEvent(this.pageRef, "publishevent", payload);
  }
}
