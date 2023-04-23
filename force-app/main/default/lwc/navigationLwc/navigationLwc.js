import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import { encodeDefaultFieldValues } from "lightning/pageReferenceUtils";
export default class NavigationLwc extends NavigationMixin(LightningElement) {
  homeHandler(event) {
    let pageReference = {
      type: "standard__namedPage",
      attributes: {
        pageName: "home"
      }
    };
    this[NavigationMixin.Navigate](pageReference);
  }

  accountHomeHandler(event) {
    let pageReference = {
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Account",
        actionName: "home"
      }
    };
    this[NavigationMixin.Navigate](pageReference);
  }

  accountListViewHandler() {
    let pageReference = {
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Account",
        actionName: "list"
      },
      state: {
        filterName: "PlatinumandGoldSLACustomers"
      }
    };
    this[NavigationMixin.Navigate](pageReference);
  }
  accountnewHandler() {
    let pageReference = {
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Account",
        actionName: "new"
      }
    };
    this[NavigationMixin.Navigate](pageReference);
  }

  accountnewwithDefaultHandler() {
    let accountDefaultValue = encodeDefaultFieldValues({
      Rating: "Hot",
      Industry: "Energy"
    });
    let pagereference = {
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Account",
        actionName: "new"
      },
      state: {
        defaultFieldValues: accountDefaultValue
      }
    };
    this[NavigationMixin.Navigate](pagereference);
  }

  quickAccountHandler(event) {
    let pageReference = {
      type: "standard__navItemPage",
      attributes: {
        apiName: "Quick_Account_Creation"
      }
    };
    this[NavigationMixin.Navigate](pageReference);
  }
}
