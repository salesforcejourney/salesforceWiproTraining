import { LightningElement } from "lwc";
import getAccountByIndustry from "@salesforce/apex/AccountHelper.getAccountByIndustry";
export default class ApexImperativeWithoutDml extends LightningElement {
  accountIndustry;
  accounts;
  accounterror;
  changeHandler(event) {
    this.accountIndustry = event.target.value;
  }

  clickHandler(event) {
    getAccountByIndustry({
      industry: this.accountIndustry
    })
      .then((data) => {
        this.accounts = data;
        this.accounterror = null;
      })
      .catch((error) => {
        this.accounts = null;
        this.accounterror = error;
      });
  }
}
