({
  initHandler: function (component, event, helper) {
    $A.createComponent(
      "lightning:button",
      {
        label: "Click Me",
        variant: "brand",
        onclick: component.getReference("c.clickHandler")
      },
      function (compCreate, status, errorMessage) {
        if (status === "SUCCESS") {
          console.log("Component Created successfully");
          let body = component.get("v.body");
          body.push(compCreate);
          component.set("v.body", body);
        } else if (status === "ERROR") {
          console.log("Error Message " + errorMessage);
        }
      }
    );
  },

  clickHandler: function (component, event, helper) {
    alert("Button Clicked");
  }
});
