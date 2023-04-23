import { LightningElement } from "lwc";

export default class IteratorLwc extends LightningElement {
  carList = ["Audi", "BMW", "Ferrari", "Bentley"];
  coeList = [
    {
      id: 1,
      coename: "Elon Musk",
      orgname: "Tesla"
    },
    {
      id: 2,
      coename: "Jeff",
      orgname: "Amazon"
    },
    {
      id: 3,
      coename: "Tim Cook",
      orgname: "Apple"
    }
  ];
}
