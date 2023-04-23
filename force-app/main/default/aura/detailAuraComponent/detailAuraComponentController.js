({
  showAccountDetailHandler: function (component, event, helper) {
    let param = event.getParam("lmsData");
    component.set("v.accrecid", param);
    component.set("v.showRecordForm", true);
  }
});
