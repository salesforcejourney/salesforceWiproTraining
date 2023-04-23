import { LightningElement, wire } from "lwc";
import {
  getObjectInfo,
  getObjectInfos,
  getPicklistValues,
  getPicklistValuesByRecordType
} from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import CONTACT_OBJECT from "@salesforce/schema/Contact";
import OPPORTUNITY_OBJECT from "@salesforce/schema/Opportunity";
import USER_OBJECT from "@salesforce/schema/User";
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry";
export default class ObjectApiAdapter extends LightningElement {
  accountObjectDetails;
  multiObjectDetails;
  industryOptions;
  selectedIndustry;
  accountSourceOptions;
  ratingOptions;
  selectedAccountSource;
  selectedRating;
  @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT }) getObjectInfoHandler({
    data,
    error
  }) {
    if (data) {
      console.log("get object info data", data);
      this.accountObjectDetails = data;
    } else if (error) {
      console.log("get object info data", error);
    }
  }

  @wire(getObjectInfos, {
    objectApiNames: [CONTACT_OBJECT, OPPORTUNITY_OBJECT, USER_OBJECT]
  })
  getObjectInfosHandler({ data, error }) {
    if (data) {
      console.log("getobject infos data ", data);
      this.multiObjectDetails = data;
    } else if (error) {
      console.log("getobject infos data ", error);
    }
  }

  @wire(getPicklistValues, {
    recordTypeId: "$accountObjectDetails.defaultRecordTypeId",
    fieldApiName: ACCOUNT_INDUSTRY
  })
  picklistValuesHandler({ data, error }) {
    if (data) {
      console.log("Account Industry Picklist", data);
      let industryPickList = [...data.values];
      this.industryOptions = industryPickList.map((currItem) => ({
        label: currItem.label,
        value: currItem.value
      }));
      console.log("industryOptions", this.industryOptions);
    } else if (error) {
      console.log("Picklist error", error);
    }
  }

  @wire(getPicklistValuesByRecordType, {
    recordTypeId: "$accountObjectDetails.defaultRecordTypeId",
    objectApiName: ACCOUNT_OBJECT
  })
  picklistValuesByRecordTypeHandler({ data, error }) {
    if (data) {
      console.log("picklistValuesByRecordTypeHandler data", data);

      // Access account source
      let accountSource = [...data.picklistFieldValues.AccountSource.values];
      this.accountSourceOptions = accountSource.map((currItem) => ({
        label: currItem.label,
        value: currItem.value
      }));

      //Access Rating
      let rating = [...data.picklistFieldValues.Rating.values];
      this.ratingOptions = rating.map((currItem) => ({
        label: currItem.label,
        value: currItem.value
      }));
    } else {
      if (error) {
        console.log("picklistValuesByRecordTypeHandler error ", error);
      }
    }
  }
  changeHandler(event) {
    let { name, value } = event.target;
    if (name === "industry") this.selectedIndustry = event.target.value;
    if (name === "accountsource")
      this.selectedAccountSource = event.target.value;
    if (name === "accountrating") this.selectedRating = event.target.value;
  }
}
