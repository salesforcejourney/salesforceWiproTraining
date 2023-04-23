import { LightningElement, track } from "lwc";

export default class ParentApi extends LightningElement {
  @track lastname = "Jain";
  @track accountname = "Training";
  contact = {
    id: 1,
    firstname: "Ankit",
    lastname: "Jain",
    email: "ankitjain@training.com"
  };
}
