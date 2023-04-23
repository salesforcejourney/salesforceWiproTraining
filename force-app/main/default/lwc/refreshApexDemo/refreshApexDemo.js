import { LightningElement, wire } from "lwc";
import getOpportunityBasedonAmount from "@salesforce/apex/OpportunityHelper.getOpportunityBasedonAmount";
import { refreshApex } from "@salesforce/apex";
import updateOpportunity from "@salesforce/apex/OpportunityHelper.updateOpportunity";
export default class RefreshApexDemo extends LightningElement {
  oppAmount = 0;
  opportunities;
  oppError;
  wireProp;
  changeHandler(event) {
    this.oppAmount = parseInt(event.target.value);
  }

  @wire(getOpportunityBasedonAmount, {
    amount: "$oppAmount"
  })
  //   opportunities;
  opportutnityHandler(value) {
    this.wireProp = value;
    const { data, error } = value;
    if (data) {
      this.opportunities = data;
      this.oppError = null;
    } else if (error) {
      this.oppError = error;
      this.opportunities = null;
    }
  }
  closedOppHandler(event) {
    updateOpportunity({
      amount: this.oppAmount
    })
      .then((data) => {
        console.log(data);
        //refreshApex(this.opportunities);
        refreshApex(this.wireProp);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
