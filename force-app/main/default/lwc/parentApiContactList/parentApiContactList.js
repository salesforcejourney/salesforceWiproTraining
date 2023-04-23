import { LightningElement } from "lwc";

export default class ParentApiContactList extends LightningElement {
  contactList = [
    {
      id: 1,
      firstname: "Ankit",
      lastname: "Jain",
      email: "ankitjain@test.com"
    },
    {
      id: 2,
      firstname: "Sanjay",
      lastname: "Gupta",
      email: "rajeshgupta@test.com"
    },
    {
      id: 3,
      firstname: "Gaurav",
      lastname: "Kheterpal",
      email: "gauravkheterpal@test.com"
    },
    {
      id: 4,
      firstname: "Nitu",
      lastname: "Bansal",
      email: "nitubansal@test.com"
    }
  ];
}
