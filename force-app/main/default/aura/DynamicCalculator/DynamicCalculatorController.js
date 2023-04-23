({
  clickHandler: function (component, event, helper) {
    $A.createComponent(
      "c:AuraCalculator",
      {
        Number1: "50",
        Number2: "10"
      },
      function (createdcomp, status, errorMessage) {
        if (status === "SUCCESS") {
          console.log("Component Created Successfully");
          let body = component.get("v.body");
          body.push(createdcomp);
          component.set("v.body", body);
        } else if (status === "ERROR") {
          console.log("Error while creating component " + errorMessage);
        }
      }
    );
  }
});
