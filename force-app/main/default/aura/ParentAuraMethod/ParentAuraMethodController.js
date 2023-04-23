({
  clickHandler: function (component, event, helper) {
    component
      .find("child")
      .childMessageMethod("Welcome from Parent Aura Method");
  }
});
