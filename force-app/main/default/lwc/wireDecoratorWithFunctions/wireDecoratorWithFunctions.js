import { LightningElement, wire } from "lwc";
import getTopAccounts from "@salesforce/apex/AccountHelper.getTopAccounts";
export default class WireDecoratorWithFunctions extends LightningElement {
  accounts;
  accounterror;
  @wire(getTopAccounts) accountResponseHandler({ data, error }) {
    if (data) {
      this.accounts = data.map((currItem) => {
        return { ...currItem, dummyPhone: "12313123123" };
      });
      //console.log("this.accounts ", JSON.stringify(this.accounts));
      //this.accounts = data;
      this.accounterror = null;
    } else if (error) {
      this.accounts = null;
      this.accounterror = error;
    }
  }
}
