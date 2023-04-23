import { LightningElement, wire } from "lwc";
import getOpportunity from "@salesforce/apex/OpportunityHelper.getOpportunity";
export default class OpportunityStageLoader extends LightningElement {
  opportunities;
  opperror;

  /**
   * Practical Assignments

Extend yesterday's third assignment and add the conditional CSS based on the stage name. 

- If opportunity stagename is In Progress apply CSS - '.slds-badge .slds-theme_warning'
-If opportunity stagename is closed apply CSS - .slds-badge .slds-theme_success
  */
  @wire(getOpportunity) opportunityHandler({ data, error }) {
    if (data) {
      console.log(data);
      this.opportunities = data.map((currItem) => {
        if (
          currItem.StageName === "Closed Won" ||
          currItem.StageName === "Closed Lost"
        ) {
          return {
            ...currItem,
            stageSummary: "Closed",
            dynamicbadge: "slds-badge slds-theme_success"
          };
        } else {
          return {
            ...currItem,
            stageSummary: "In Progress",
            dynamicbadge: "slds-badge slds-theme_warning"
          };
        }
      });
      this.opperror = null;
    } else if (error) {
      console.log(error);
      this.opperror = error;
      this.opportunities = null;
    }
  }
}
