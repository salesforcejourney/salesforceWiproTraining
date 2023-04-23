import { LightningElement, track } from "lwc";

export default class ToDoLwc extends LightningElement {
  @track toDoArray = [
    "Wake up at 5",
    "Get ready for office",
    "go to office",
    "do office work"
  ];

  @track contact = {
    id: "1",
    firstName: "Ankit",
    lastName: "Jain",
    email: "ankitjain@training.com"
  };

  clickHandler(event) {
    this.toDoArray.push("Self Study");
    console.log("this.toDoArray" + this.toDoArray);
  }

  changeEmailHandler(event) {
    let updatedemail = "ankit@ojastraining.com";
    this.contact["email"] = updatedemail;
    //this.contact.email = updatedemail;
    console.log("udpated this.contact ", JSON.stringify(this.contact));
  }
}
