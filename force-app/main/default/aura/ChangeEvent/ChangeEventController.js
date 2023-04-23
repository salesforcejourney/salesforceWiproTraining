({
  clickHandler: function (component, event, helper) {
    component.set("v.Welcome", "Welcome to Learn Aura Programming");
  },

  welcomeChangeHandler: function (component, event, helper) {
    console.log("Change Event triggerd");
    console.log("Old Value " + event.getParam("oldValue"));
    console.log("New Value " + event.getParam("value"));
    component.set("v.oldValue", event.getParam("oldValue"));
  }
});
