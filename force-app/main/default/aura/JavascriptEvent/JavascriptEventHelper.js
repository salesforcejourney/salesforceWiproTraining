({
  helperMethod: function (component) {
    let inputvalue = component.find("input").get("v.value");
    component.set("v.message", inputvalue);
  }
});
