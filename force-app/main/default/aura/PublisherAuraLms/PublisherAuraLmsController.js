({
  clickHandler: function (component, event, helper) {
    let payload = {
      lmsData: "Message from Publisher : Welcome to Learn Aura LMS"
    };
    component.find("lmsid").publish(payload);
  }
});
