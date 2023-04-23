import { LightningElement, api } from "lwc";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import RATING_FIELD from "@salesforce/schema/Account.Rating";
import ANNUALREVENUE_FIELD from "@salesforce/schema/Account.AnnualRevenue";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
export default class LightningRecordEditFormLwc extends LightningElement {
  @api objectApiName;
  @api recordId;
  accfields = {
    namefield: NAME_FIELD,
    industryfield: INDUSTRY_FIELD,
    ratingfield: RATING_FIELD,
    annualfield: ANNUALREVENUE_FIELD
  };

  successHandler(event) {
    //record updated successfully
    this.dispatchEvent(
      new ShowToastEvent({
        title: "Success",
        message: "Record Edited Successfully",
        variant: "success"
      })
    );
  }

  submitHandler(event) {
    event.preventDefault();
    let fields = event.detail.fields;
    this.template.querySelector("lightning-record-edit-form").submit(fields);
  }

  errorHandler(event) {}

  resetHandler(event) {
    let inputFields = Array.from(
      this.template.querySelectorAll("lightning-input-field")
    );
    inputFields.forEach((currItem) => currItem.reset());
  }
}
