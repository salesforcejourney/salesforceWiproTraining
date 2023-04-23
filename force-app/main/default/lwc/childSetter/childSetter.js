import { LightningElement, api } from "lwc";

export default class ChildSetter extends LightningElement {
  childDetail;
  @api
  get condetail() {
    return this.childDetail;
  }

  set condetail(data) {
    let myLocalValue = { ...data };
    let calage = myLocalValue.age * 2;
    myLocalValue = { ...myLocalValue, age: calage };
    this.childDetail = { ...myLocalValue };
  }
}

/**
 *
 * getter always returns
 * setter always take one parameter as input and it does not return anything
 */
