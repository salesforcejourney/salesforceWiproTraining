({
  handleRecordUpdated: function (component, event, helper) {
    let eventParam = event.getParams();
    if (eventParam.changeType === "LOADED") {
      console.log("Record Loaded Successfully");
    } else if (eventParam.changeType === "CHANGED") {
      console.log("Record Loaded Successfully");
    } else if (eventParam.changeType === "REMOVED") {
      console.log("Record Loaded Successfully");
    } else if (eventParam.changeType === "ERROR") {
      console.log("Record Loaded Successfully");
    }
  },

  clickHandler: function (component, event, helper) {
    component.find("recordHandler").deleteRecord(
      $A.getCallback(function (saveResult) {
        if (saveResult.state === "SUCCESS") {
          console.log("Record Deleted Successfully");
          //Assignment
          //Navigate to Account List Page
        } else if (saveResult.state === "ERROR") {
          console.log("Error while deleting the record ", saveResult.error);
        }
      })
    );
  }
});
