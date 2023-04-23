({
  clickHandler: function (component, event, helper) {
    //alert("Record clicked ");
    event.preventDefault();
    let account = component.get("v.accrec");
    let accountName = account.Name;
    let accountId = account.Id;

    //get the reference of event
    let sendaccountname = component.getEvent("sendaccountname");

    //set the param
    sendaccountname.setParams({
      accname: accountName
    });

    //fire an event
    sendaccountname.fire();

    //design payload
    let payload = {
      lmsData: accountId
    };

    //publish the message
    component.find("lmsid").publish(payload);
  }
});
