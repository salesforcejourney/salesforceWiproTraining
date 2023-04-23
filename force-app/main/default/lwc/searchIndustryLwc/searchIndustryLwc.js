import { LightningElement, wire } from "lwc";
import { fireEvent } from "c/pubsub";
import { CurrentPageReference } from "lightning/navigation";
export default class SearchIndustryLwc extends LightningElement {
  searchIndustry = "";

  @wire(CurrentPageReference)
  pageRef;

  changeHandler(event) {
    this.searchIndustry = event.target.value;
  }

  clickHandler() {
    let payload = {
      industry: this.searchIndustry
    };
    fireEvent(this.pageRef, "searchindustry", payload);
  }
}
