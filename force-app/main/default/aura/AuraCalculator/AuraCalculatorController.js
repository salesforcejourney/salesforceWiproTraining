({
  addHandler: function (component, event, helper) {
    helper.addHelper(component);
  },
  subHandler: function (component, event, helper) {
    helper.subHelper(component);
  },
  mulHandler: function (component, event, helper) {
    helper.mulHelper(component);
  },
  divHandler: function (component, event, helper) {
    helper.divHelper(component);
  },
  calHandler: function (component, event, helper) {
    helper.calcHelper(component, event);
  }
});
