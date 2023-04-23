import { LightningElement, api, wire, track } from "lwc";
import {
  deleteRecord,
  getFieldValue,
  getRecord,
  updateRecord
} from "lightning/uiRecordApi";
import FIRST_NAME from "@salesforce/schema/Contact.FirstName";
import LAST_NAME from "@salesforce/schema/Contact.LastName";
import PHONE_FIELD from "@salesforce/schema/Contact.Phone";
import CONTACT_ID from "@salesforce/schema/Contact.Id";
import CONTACT_OBJECT from "@salesforce/schema/Contact";

export default class UpdateRecordAdapter extends LightningElement {
  @api recordId;
  @track
  conRecord = {
    firstName: FIRST_NAME,
    lastName: LAST_NAME,
    phone: PHONE_FIELD
  };
  @wire(getRecord, {
    recordId: "$recordId",
    fields: [FIRST_NAME, LAST_NAME, PHONE_FIELD]
  })
  getRecordHandler({ data, error }) {
    if (data) {
      console.log("Contact Record", data);
      this.conRecord.firstName = getFieldValue(data, FIRST_NAME);
      this.conRecord.lastName = getFieldValue(data, LAST_NAME);
      this.conRecord.phone = getFieldValue(data, PHONE_FIELD);
    } else if (error) {
      console.log("Error while loading contact record", error);
    }
  }

  changeHandler(event) {
    let { name, value } = event.target;
    if (name === "fname") this.conRecord.firstName = value;
    if (name === "lname") this.conRecord.lastName = value;
    if (name === "phone") this.conRecord.phone = value;
  }

  clickHandler(event) {
    //Assignment - validations

    let inputFields = {};
    inputFields[FIRST_NAME.fieldApiName] = this.conRecord.firstName;
    inputFields[LAST_NAME.fieldApiName] = this.conRecord.lastName;
    inputFields[PHONE_FIELD.fieldApiName] = this.conRecord.phone;
    inputFields[CONTACT_ID.fieldApiName] = this.recordId;

    let recordInput = { fields: inputFields };
    updateRecord(recordInput)
      .then((result) => console.log("Record Updated Successfully"))
      //show success toast event
      .catch((error) => {
        console.log("Record Update Failure", error);
        //show the failure toast event
      });
  }

  deleteHandler(event) {
    deleteRecord(this.recordId)
      .then((result) => {
        console.log("Record deleted Successfully");
        //Assignment - Navigate to list view of Contact
        //toast event
      })
      .catch((error) => {
        console.log("Failure in record deletetion", error);
      });
  }
}
