import { LightningElement, wire } from "lwc";
import getAccountByIndustry from "@salesforce/apex/AccountHelper.getAccountByIndustry";
export default class WireWithParameters extends LightningElement {
  accountIndustry = "";

  changeHandler(event) {
    this.accountIndustry = event.target.value;
  }

  @wire(getAccountByIndustry, {
    industry: "$accountIndustry"
  })
  accounts;
}
