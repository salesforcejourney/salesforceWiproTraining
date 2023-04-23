import { LightningElement, api } from "lwc";

export default class ChildApi extends LightningElement {
  @api contactlastname;
  @api accountLastName;
  @api contactFromParent;
  @api showDetails = false;
}
