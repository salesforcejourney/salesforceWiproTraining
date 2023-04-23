({
  clickHandler: function (component, event, helper) {
    let payload = {
      lmsData: {
        message: "Welcome from Aura Publisher"
      }
    };
    component.find("samplemessage").publish(payload);
  }
});
