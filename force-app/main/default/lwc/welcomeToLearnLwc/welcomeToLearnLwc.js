import { LightningElement } from "lwc";

export default class WelcomeToLearnLwc extends LightningElement {
  cutomtitle = "Hello"; //class member

  changeHandler(event) {
    //let myVariable = 'dummy' //method variable
    this.cutomtitle = event.target.value;
  }
}
