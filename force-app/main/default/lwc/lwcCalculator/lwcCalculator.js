import { LightningElement } from "lwc";

export default class LwcCalculator extends LightningElement {
  number1 = 0;
  number2 = 0;
  result = 0;
  showResult = false;
  operation = "";

  numberChangeHandler(event) {
    let name = event.target.name;
    if (name === "number1") {
      this.number1 = event.target.value;
    } else if (name === "number2") {
      this.number2 = event.target.value;
    }
  }

  clickHandler(event) {
    let label = event.target.label;
    this.operation = label;
    this.showResult = true;
    if (label === "Add") {
      this.result = parseInt(this.number1) + parseInt(this.number2);
    } else if (label === "Sub") {
      this.result = parseInt(this.number1) - parseInt(this.number2);
    } else if (label === "Mul") {
      this.result = parseInt(this.number1) * parseInt(this.number2);
    } else if (label === "Div") {
      this.result = parseInt(this.number1) / parseInt(this.number2);
    }
  }
  number1ChangeHandler(event) {
    this.number1 = event.target.value;
  }

  number2ChangeHandler(event) {
    this.number2 = event.target.value;
  }

  addClickHandler(event) {
    this.result = parseInt(this.number1) + parseInt(this.number2);
  }
  subClickHandler(event) {
    this.result = parseInt(this.number1) - parseInt(this.number2);
  }
  mulClickHandler(event) {
    this.result = parseInt(this.number1) * parseInt(this.number2);
  }
  divClickHandler(event) {
    this.result = parseInt(this.number1) / parseInt(this.number2);
  }

  get outtext() {
    let generatedText = `Entered number 1 ${this.number1} and number 2 ${this.number2} and performed operation ${this.operation} gives result ${this.result}`;
    return generatedText;
  }
}
