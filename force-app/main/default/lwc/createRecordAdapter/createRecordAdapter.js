import { LightningElement, track } from "lwc";
import FIRST_NAME from "@salesforce/schema/Contact.FirstName";
import LAST_NAME from "@salesforce/schema/Contact.LastName";
import PHONE_FIELD from "@salesforce/schema/Contact.Phone";
import CONTACT_OBJECT from "@salesforce/schema/Contact";
import { createRecord } from "lightning/uiRecordApi";

export default class CreateRecordAdapter extends LightningElement {
  @track
  conRecord = {
    firstName: FIRST_NAME,
    lastName: LAST_NAME,
    phone: PHONE_FIELD
  };

  changeHandler(event) {
    let { name, value } = event.target;
    if (name === "fname") this.conRecord.firstName = value;
    if (name === "lname") this.conRecord.lastName = value;
    if (name === "phone") this.conRecord.phone = value;
  }

  clickHandler(event) {
    console.log("CONTACT_OBJECT", CONTACT_OBJECT);
    console.log("LAST_NAME", LAST_NAME);
    //assignment : validate the inputs
    //all inputs are valid
    let inputFields = {};
    inputFields[FIRST_NAME.fieldApiName] = this.conRecord.firstName;
    inputFields[LAST_NAME.fieldApiName] = this.conRecord.lastName;
    inputFields[PHONE_FIELD.fieldApiName] = this.conRecord.phone;

    let recordInput = {
      apiName: CONTACT_OBJECT.objectApiName,
      fields: inputFields
    };

    createRecord(recordInput)
      .then((result) => {
        console.log("Create record adapter", result);
        console.log("Newly created record", result.Id);
        this.conRecord.firstName = "";
        this.conRecord.lastName = "";
        this.conRecord.phone = "";

        //this.conRecord = {};
        //Toast event
        //Navigate to new record
        //clear the input fields
      })
      .catch((error) => {
        console.log(("Create record adapter", error));
      });
  }
}
