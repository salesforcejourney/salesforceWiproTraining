import { LightningElement, track } from "lwc";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
import insertAccount from "@salesforce/apex/AccountHelper.insertAccount";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from "lightning/navigation";

export default class CreateAccountUsingImperativeApex extends NavigationMixin(
  LightningElement
) {
  objectname = ACCOUNT_OBJECT;
  accName = NAME_FIELD;
  accIndustry = INDUSTRY_FIELD;
  accPhone = PHONE_FIELD;

  @track rec = {
    Name: this.accName,
    Industry: this.accIndustry,
    Phone: this.accPhone
  };

  changeHandler(event) {
    let { name, value } = event.target;
    if (name === "accname") this.rec.Name = value;
    if (name === "accindustry") this.rec.Industry = value;
    if (name === "accphone") this.rec.Phone = value;
  }
  clickHandler(event) {
    let isValid = this.validateInput();
    if (isValid) {
      insertAccount({
        account: this.rec
      })
        .then((data) => {
          console.log(data);
          this.showToast("Success", "Record Created Successfully", "success");
          this.rec.Name = "";
          this.rec.Industry = "";
          this.rec.Phone = "";
          // let elementList = Array.from(
          //   this.template.querySelectorAll("lightning-input")
          // );
          // elementList.forEach((item, index) => {
          //   item.value = "";
          // });
          //create the page reference
          let pageReference = {
            type: "standard__recordPage",
            attributes: {
              recordId: data,
              objectApiName: "Account",
              actionName: "view"
            }
          };
          this[NavigationMixin.Navigate](pageReference);
        })
        .catch((error) => {
          console.log(error);
          this.showToast("Error", error, "error");
        });
    }
  }

  showToast(customtitle, custommessage, customvariant) {
    const event = new ShowToastEvent({
      title: customtitle,
      message: custommessage,
      variant: customvariant
    });
    this.dispatchEvent(event);
  }

  validateInput() {
    //Array.from(this.template.querySelector("lightning-input"));
    let inputElements = [...this.template.querySelectorAll("lightning-input")];
    let isValid = inputElements.reduce((validaSoFar, inputCmp) => {
      inputCmp.reportValidity();
      return validaSoFar && inputCmp.checkValidity();
    }, true);
    let inputIndustry = this.template.querySelector(".industry");

    if (inputIndustry.value !== "Energy") {
      inputIndustry.setCustomValidity("Entered industry is invalid");
      isValid = false;
    } else {
      inputIndustry.setCustomValidity("");
    }
    inputIndustry.reportValidity();

    if (isValid === true) {
      return true;
    } else {
      return false;
    }
  }

  isInputValid() {
    let isValid = true;
    let inputElements = [...this.template.querySelectorAll("lightning-input")];
    inputElements.forEach((currItem) => {
      if (!currItem.checkValidity()) {
        isValid = false;
        currItem.reportValidity();
      }
    });
    return isValid;
  }
}
