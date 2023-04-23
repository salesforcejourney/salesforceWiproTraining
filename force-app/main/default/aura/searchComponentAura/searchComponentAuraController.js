({
  searchHandler: function (component, event, helper) {
    let enteredIndustry = component.get("v.searchIndustry");
    //get the reference of event
    let appEvent = $A.get("e.c:SearchIndustryEvent");

    //set the param
    appEvent.setParams({
      industry: enteredIndustry
    });

    //fire an event
    appEvent.fire();
  }
});
