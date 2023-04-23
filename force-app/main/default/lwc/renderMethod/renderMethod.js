import { LightningElement } from "lwc";
import signInIntemplate from "./signIn.html";
import signUpIntemplate from "./signUp.html";
import rendertemplate from "./renderMethod.html";
export default class RenderMethod extends LightningElement {
  buttonLabel;
  render() {
    if (this.buttonLabel === "Sign In") {
      return signInIntemplate;
    } else if (this.buttonLabel === "Sign Up") {
      return signUpIntemplate;
    } else {
      return rendertemplate;
    }
  }
  clickHandler(event) {
    this.buttonLabel = event.target.label;
    console.log("buttonLabel ", this.buttonLabel);
  }
  submitHandler(event) {
    alert(`${event.target.label} is successful`);
  }
}
