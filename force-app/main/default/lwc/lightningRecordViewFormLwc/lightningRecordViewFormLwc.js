import { LightningElement, api } from "lwc";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import RATING_FIELD from "@salesforce/schema/Account.Rating";
import ANNUALREVENUE_FIELD from "@salesforce/schema/Account.AnnualRevenue";
export default class LightningRecordViewFormLwc extends LightningElement {
  @api objectApiName;
  @api recordId;
  accfields = {
    namefield: NAME_FIELD,
    industryfield: INDUSTRY_FIELD,
    ratingfield: RATING_FIELD,
    annualfield: ANNUALREVENUE_FIELD
  };
}
