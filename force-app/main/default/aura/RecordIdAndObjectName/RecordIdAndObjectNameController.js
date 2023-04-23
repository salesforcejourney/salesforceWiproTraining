({
  initHandler: function (component, event, helper) {
    console.log("Record Id", component.get("v.recordId"));
    console.log("Object Name", component.get("v.sObjectName"));
  }
});
