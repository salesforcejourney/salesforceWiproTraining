({
  handleRecordUpdated: function (component, event, helper) {
    console.log("event.getParams() ", JSON.stringify(event.getParams()));
    let eventParam = event.getParams();
    if (eventParam.changeType === "LOADED") {
      console.log("Form Loaded Successfully");
    } else if (eventParam.changeType === "CHANGED") {
      console.log("Record Changed Successfully");
    } else if (eventParam.changeType === "REMOVED") {
      console.log("Record Deleted Successfully");
    } else if (eventParam.changeType === "Error") {
      console.log("Error while loading the form");
    }
  },

  updateHandler: function (component, event, helper) {
    //Assignment :
    //show the error message for the name field if missing : "Account name is mandatory"
    //Dont execute the update logic if Account name is not entered.
    component.find("recordHandler").saveRecord(
      $A.getCallback(function (saveResult) {
        console.log("saveResult ", JSON.stringify(saveResult));
        console.log("record ", JSON.stringify(component.get("v.record")));

        if (saveResult.state === "SUCCESS") {
          console.log("Record Updated Successfully");
          //Assignment : show successful toast message
        } else if (saveResult.state === "ERROR") {
          //Assignment : show error toast message
          console.log("Error while updating the record", saveResult.error);
        }
      })
    );
  }
});
