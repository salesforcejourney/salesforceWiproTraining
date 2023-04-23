import { LightningElement } from "lwc";

export default class QuerySelectorDemo extends LightningElement {
  carList = ["Audi", "BMW", "Maruti", "Honda"];
  clickHandler(event) {
    //to access single input
    let firstcomponent = this.template.querySelector("lightning-input");
    let firstnameText = firstcomponent.value;
    //alert(enteredText);

    //to access specific input : data-id
    let lastnameComponent = this.template.querySelector(
      '[data-id = "lastname"]'
    );
    let lastnameText = lastnameComponent.value;

    //alert(lastnameText);

    //to access specific input : classname
    let lastnameClassComponent = this.template.querySelector(".enteredlast");
    let lastnameClassText = lastnameClassComponent.value;
    //alert(lastnameClassText);

    //access h1 tag - modify
    let h1component = this.template.querySelector("h1");
    h1component.style.border = "1px solid red";

    //access element using ref
    let lastnameref = this.refs.inputlastname;
    console.log("lastnameref", lastnameref);
    console.log("lastnameref", lastnameref.value);
  }

  carHandler(event) {
    console.log("inside car handler");
    let carElements = Array.from(this.template.querySelectorAll(".carname"));
    console.log("carElements ", carElements.length);
    carElements.forEach((currItem) => {
      console.log(currItem);
      console.log(currItem.innerText);
      currItem.style.border = "1px solid red";
    });
  }
}
