import {
  getRecord,
  getFieldValue,
  getFieldDisplayValue
} from "lightning/uiRecordApi";
import { LightningElement, api, wire } from "lwc";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import RATING_FIELD from "@salesforce/schema/Account.Rating";
import ANNUAL_REVENUE from "@salesforce/schema/Account.AnnualRevenue";
import ACCOUNT_OWNER from "@salesforce/schema/Account.Owner.Name";

export default class GetRecordAdapter extends LightningElement {
  @api recordId;
  accountName;
  accountOwner;
  accountRevenue;
  @wire(getRecord, {
    recordId: "$recordId",
    fields: [
      NAME_FIELD,
      RATING_FIELD,
      INDUSTRY_FIELD,
      ANNUAL_REVENUE,
      ACCOUNT_OWNER
    ]
  })
  getRecordHandler({ data, error }) {
    if (data) {
      console.log("Account record ", data);
      //   this.accountName = data.fields.Name.value;
      //   this.accountOwner = data.fields.Owner.displayValue;
      //   this.accountRevenue = data.fields.AnnualRevenue.value;
      this.accountName = getFieldValue(data, NAME_FIELD);
      this.accountOwner = getFieldValue(data, ACCOUNT_OWNER);
      this.accountRevenue = getFieldDisplayValue(data, ANNUAL_REVENUE);
    } else if (error) {
      console.log("Account error", error);
    }
  }
}
