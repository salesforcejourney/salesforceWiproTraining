({
  initHandler: function (component, event, helper) {
    let weekdays = component.get("v.weekdays");
    //to populate the array in JS : push
    weekdays.push("Monday");
    weekdays.push("Tuesday");
    weekdays.push("Wednesday");
    weekdays.push("Thursday");
    weekdays.push("Friday");
    component.set("v.weekdays", weekdays);

    let accList = component.get("v.accList");
    accList.push({ Name: "United", Rating: "Hot" });
    accList.push({ Name: "Global", Rating: "Warm" });
    accList.push({ Name: "Dickson", Rating: "Cold" });
    component.set("v.accList", accList);
  }
});
