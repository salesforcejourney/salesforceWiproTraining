({
  handleMessage: function (component, event, helper) {
    console.log(
      "Event Received in Aura ",
      JSON.stringify(event.getParam("lmsData"))
    );

    let messagefromlwc = event.getParam("lmsData").message;
    component.set("v.messagefromlwc", messagefromlwc);
  }
});
