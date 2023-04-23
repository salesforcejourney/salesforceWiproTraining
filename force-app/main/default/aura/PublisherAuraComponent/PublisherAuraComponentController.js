({
  clickHandler: function (component, event, helper) {
    //get the reference of event
    let appEvent = $A.get("e.c:MessageApplicationEvent");

    //set the param
    appEvent.setParams({
      message: "Message from Publisher : Welcome to learn Application Event "
    });

    //fire an event
    appEvent.fire();

    console.log("Event Fired");
  }
});
