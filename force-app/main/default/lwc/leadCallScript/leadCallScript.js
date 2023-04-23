import { LightningElement, api, wire } from "lwc";
import { getRecord } from "lightning/uiRecordApi";
const OPENAI_ENDPOINT = "https://api.openai.com/v1/completions";

export default class LeadCallScript extends LightningElement {
  @api recordId;
  lead;
  callScript;

  @wire(getRecord, {
    recordId: "$recordId",
    fields: ["Lead.Name", "Lead.Email"]
  })
  wiredLead({ error, data }) {
    if (data) {
      this.lead = data.fields;
      this.generateText();
    } else if (error) {
      console.error(error);
    }
  }

  //   async generateCallScript() {
  //     const body = {
  //       leadId: this.recordId,
  //       leadName: this.lead.Name.value,
  //       leadEmail: this.lead.Email.value
  //     };
  //     const response = await fetch(CHATGPT_ENDPOINT, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*"
  //       },
  //       body: JSON.stringify(body)
  //     });
  //     if (response.ok) {
  //       const callScript = await response.text();
  //       this.callScript = callScript;
  //     } else {
  //       console.error(response.status);
  //     }
  //   }

  async generateText() {
    const body = {
      model: "text-davinci-003",
      prompt: `Insights about ${this.lead.Name.value}`,
      max_tokens: 4000
    };
    const response = await fetch(OPENAI_ENDPOINT, {
      method: "POST",
      //timeout: 120000,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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"
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      const data = await response.json();
      this.callScript = data.choices[0].text;
    } else {
      console.error(response.status);
    }
  }
}
