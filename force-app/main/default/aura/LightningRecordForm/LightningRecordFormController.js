({
  createSuccessHandler: function (component, event, helper) {
    //step 2 : create the page reference
    console.log("New Record Id ", event.getParam("id"));
    console.log("Event ", JSON.stringify(event));

    let pageReference = {
      type: "standard__recordPage",
      attributes: {
        recordId: event.getParam("id"),
        objectApiName: component.get("v.sObjectName"),
        actionName: "view"
      }
    };

    //step 3 : use the navigate method
    let navservice = component.find("navservice");
    event.preventDefault();
    navservice.navigate(pageReference);
  },

  successEditHandler: function (component, event, helper) {
    component.find("notifLib").showToast({
      title: "Creation Successful!",
      message: "Account Edited Successfully",
      variant: "success",
      mode: "dismissable"
    });
  },

  createSubmitHandler: function (component, event, helper) {
    //stop the default behaviour of component
    event.preventDefault();
    console.log("Events " + JSON.stringify(event));

    //getting the fields and populating the value
    const field = event.getParam("fields");
    if (field.Industry === "Energy") {
      field.Rating = "Hot";
    }

    //submit the component
    component.find("createrecordform").submit(field);
  }
});
