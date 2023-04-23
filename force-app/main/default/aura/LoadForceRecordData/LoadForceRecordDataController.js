({
  handleRecordUpdated: function (component, event, helper) {
    //console.log("handleRecordUpdated method invoked");
    //changeType --> this attribute highlight the reason current state of form load
    let eventParam = event.getParams();
    if (eventParam.changeType === "LOADED") {
      console.log("Record Loaded Successfully");
      console.log(
        " Simple Record Variable ",
        JSON.stringify(component.get("v.simepleRecord"))
      );
    } else if (eventParam.changeType === "CHANGED") {
      console.log("Record Changed Successfully");
    } else if (eventParam.changeType === "REMOVED") {
      console.log("Record Removed Successfully");
    } else if (eventParam.changeType === "ERROR") {
      console.log("Error in record");
    }
  }
});
