import { LightningElement, api } from "lwc";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import RATING_FIELD from "@salesforce/schema/Account.Rating";
import ANNAUL_REVENUE from "@salesforce/schema/Account.AnnualRevenue";
export default class LightningRecordFormLwc extends LightningElement {
  @api objectApiName;
  @api recordId;

  fieldList = [NAME_FIELD, INDUSTRY_FIELD, RATING_FIELD, ANNAUL_REVENUE];
  successHandler(event) {
    console.log("event.detail.id", event.detail.id);

    //Assignment

    //Show toast event

    //Navigate to new record
  }

  editSuccessHandler(event) {
    //show the toast event
  }
}
