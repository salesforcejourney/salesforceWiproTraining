({
  getMessage: function (component, event, helper) {
    let params = event.getParam("arguments");
    let message = params.childMessage;
    alert(message);
  }
});
