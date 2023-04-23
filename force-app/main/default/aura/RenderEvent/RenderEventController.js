({
  renderHandler: function (component, event, helper) {
    console.log("Render Event Invoked");
  },

  clickHandler: function (component, event, helper) {
    component.set("v.Welcome", "Welcome to learn Aura Programming");
  }
});
