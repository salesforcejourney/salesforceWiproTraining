import { LightningElement, api } from "lwc";

export default class ConfigurationFileDemo extends LightningElement {
  @api maxpageno;
  @api message;
  @api city;
}
