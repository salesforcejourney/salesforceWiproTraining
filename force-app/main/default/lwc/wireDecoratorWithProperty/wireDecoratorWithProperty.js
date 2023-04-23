import { LightningElement, wire } from "lwc";
import getTopAccounts from "@salesforce/apex/AccountHelper.getTopAccounts";
export default class WireDecoratorWithProperty extends LightningElement {
  @wire(getTopAccounts) accounts;
}
