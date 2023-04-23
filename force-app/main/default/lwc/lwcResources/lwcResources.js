import { LightningElement } from "lwc";
import ID from "@salesforce/user/Id";
import IS_GUEST from "@salesforce/user/isGuest";
import OJAS_LOGO from "@salesforce/resourceUrl/ojaslogo";
import ANIMATE from "@salesforce/resourceUrl/cssstyling";
import MOMENTSCRIPT from "@salesforce/resourceUrl/moment";
import { loadStyle, loadScript } from "lightning/platformResourceLoader";
import ENTER_NAME from "@salesforce/label/c.EnterName";
import ENTER_INDUSTRY from "@salesforce/label/c.EnterIndustry";
export default class LwcResources extends LightningElement {
  userId = ID;
  isGuest = IS_GUEST;
  logo = OJAS_LOGO;
  isResourceLoaded = false;
  currDate;
  message;
  //   enterName = ENTER_NAME;
  //   enterIndustry = ENTER_INDUSTRY
  Labels = {
    enterName: ENTER_NAME,
    enterIndustry: ENTER_INDUSTRY
  };
  renderedCallback() {
    console.log("renderedCallback invoked");
    if (!this.isResourceLoaded) {
      //   loadStyle(this, ANIMATE)
      //     .then(() => {
      //       console.log("Style Loaded Successfully");
      //     })
      //     .catch((error) => console.log("Error while laoding style ", error));

      //   loadScript(this, MOMENTSCRIPT)
      //     .then(() => {
      //       console.log("Script Loaded Successfully");
      //       this.setCurrentDate();
      //     })
      //     .catch((error) => console.log("Error while laoding style ", error));

      Promise.all([loadStyle(this, ANIMATE), loadScript(this, MOMENTSCRIPT)])
        .then(() => {
          console.log("All Promises resolved Successfully");
          this.setCurrentDate();
        })
        .catch((error) => {
          console.error("Promise Rejected", error);
        });
      this.isResourceLoaded = true;
    } else {
      return;
    }
  }

  setCurrentDate() {
    this.currDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  }

  changeHandler(event) {
    this.message = event.target.value;
  }
}
