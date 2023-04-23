({
  clickHandler: function (component, event, helper) {
    console.log("Save Method Invoked");
    let validity = component.find("inputText").get("v.validity");
    if (validity === true) {
      alert("Input is valid");
    } else {
      alert("Input is invalid");
    }
  },

  validateEmailAndRevenue: function (component, event, helper) {
    let inputFieldArray = component.find("inputField");
    let allValid = inputFieldArray.reduce(function (validSoFar, inputCmp) {
      let label = inputCmp.get("v.label");
      if (
        label === "Account Email" &&
        inputCmp.get("v.value") !== "ankit@gmail.com"
      ) {
        inputCmp.setCustomValidity("Enter email address as ankit@gmail.com");
      }
      inputCmp.reportValidity();
      return validSoFar && inputCmp.checkValidity();
    }, true);
    if (allValid === true) {
      alert("complete form is valid");
    } else {
      alert("Form Entry is Invalid");
    }
  },

  validateIndustry: function (component, event, helper) {
    let inputIndustry = component.find("inputIndustry");
    let industryValue = inputIndustry.get("v.value");
    if (industryValue !== "Energy") {
      inputIndustry.setCustomValidity("Please entery Energy Industry");
    } else {
      inputIndustry.setCustomValidity("");
    }
    inputIndustry.reportValidity();
  }
});
