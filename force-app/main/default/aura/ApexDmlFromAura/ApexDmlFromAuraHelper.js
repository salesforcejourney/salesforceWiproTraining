({
  initHandlerHelper: function (component, event, helper) {
    //step 1
    let action = component.get("c.getIndustryOptions");
    //step 2 -- set param

    //step 3 -- handle response
    action.setCallback(this, function (response) {
      let state = response.getState();
      if (state === "SUCCESS") {
        console.log("Industry Options Output ", response.getReturnValue());
        let industryOptions = response.getReturnValue();
        let formattedOptions = [];
        for (let key in industryOptions) {
          formattedOptions.push({
            label: key,
            value: industryOptions[key]
          });
        }
        console.log("Industry formatted options ", formattedOptions);
        component.set("v.industryOptions", formattedOptions);
      } else if (state === "ERROR") {
        console.log("Industry Options Error ", response.getError());
      }
    });

    //step 4 - make server call
    $A.enqueueAction(action);
  },
  createHandlerHelper: function (component, event, helper) {
    let isValid = this.validateInput(component);
    if (isValid) {
      //step 1 -- define the method
      let action = component.get("c.insertAccount");

      //step 2 -- set the param

      action.setParams({
        account: component.get("v.acc")
      });

      //step 3 - handle the response
      action.setCallback(this, function (response) {
        let state = response.getState();
        if (state === "SUCCESS") {
          console.log(
            "Record Created Successfullly ",
            response.getReturnValue()
          );
          //Assignment --> Navigation to newly created record
        } else if (state === "ERROR") {
          console.log("Error on Account Creation ", response.getError());
          //Assignment : toast message
        }
      });

      //step 4 - server call
      $A.enqueueAction(action);
    }
  },

  validateInput: function (component) {
    //Assignment -- validations
    //check validations for all input fields
    return true;
  }
});
