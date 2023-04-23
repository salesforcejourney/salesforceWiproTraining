import { LightningElement, wire } from "lwc";
import { registerListener, unregisterAllListeners } from "c/pubsub";
import { CurrentPageReference } from "lightning/navigation";
import getAccountByIndustry from "@salesforce/apex/AccountHelper.getAccountByIndustry";
export default class AccountDetailsByIndustryLwc extends LightningElement {
  inputIndustry = "";
  accounts;
  error;
  @wire(CurrentPageReference)
  pageRef;
  selectedRec;

  @wire(getAccountByIndustry, {
    industry: "$inputIndustry"
  })
  accountHandler({ data, error }) {
    if (data) {
      this.accounts = data;
      this.error = null;
      console.log("this.accounts", this.accounts);
    } else if (error) {
      this.accounts = null;
      this.error = error;
    }
  }
  connectedCallback() {
    this.registerIndustrySubscriber();
  }

  disconnectedCallback() {
    unregisterAllListeners(this);
  }

  registerIndustrySubscriber() {
    registerListener("searchindustry", this.handleIndustryResponse, this);
  }

  handleIndustryResponse(payload) {
    this.inputIndustry = payload.industry;
    console.log("inputIndustry ", this.inputIndustry);
  }

  selectedRecHandler(event) {
    let accId = event.detail;
    alert(accId);
    this.selectedRec = this.accounts.find((currItem) => currItem.Id === accId);
  }
}
