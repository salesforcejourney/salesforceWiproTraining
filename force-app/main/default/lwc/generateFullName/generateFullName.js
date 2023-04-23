import { LightningElement } from "lwc";

export default class GenerateFullName extends LightningElement {
  fname = "";
  lname = "";
  changeHandler(event) {
    //Destructing
    let { name, value } = event.target;
    if (name === "fname") this.fname = value;
    if (name === "lname") this.lname = value;
  }

  get fullname() {
    return `${this.fname} ${this.lname}`.trim().toUpperCase();
  }
}
