({
  initHandler: function (component, event, helper) {
    component.find("recordHandler").getNewRecord(
      "Account", //object API NAME
      "null", //record type id
      "false", //skip cache ?
      $A.getCallback(function () {
        let error = component.get("v.targetError");
        let rec = component.get("v.newAccount");
        console.log("Error", error);
        console.log("New Account Initialized", rec);

        if (error) {
          console.log(
            "Error while initializing the component ",
            component.get("v.targetError")
          );
        } else {
          console.log("Component initialized successfully");
        }
      })
    );
  },

  clickHandler: function (component, event, helper) {
    //Assignment : Validations
    //Account name is entered or not , if fields are valid then only create the record
    component.find("recordHandler").saveRecord(
      $A.getCallback(function (saveResult) {
        if (saveResult.state === "SUCCESS") {
          console.log("Record Created Successfully");
          console.log(
            "Get new record details ",
            JSON.stringify(component.get("v.newAccount"))
          );
          //Assignment
          //Navigate to new record
        } else if (saveResult.state === "ERROR") {
          console.log("Error while creating the record ", saveResult.error);
          //Assignment
          //toast event to show the error message
        }
      })
    );
  }
});
