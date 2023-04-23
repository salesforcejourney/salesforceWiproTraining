({
  addClassHandler: function (component, event, helper) {
    let dynamiccss = component.find("dynamiccss");
    $A.util.addClass(dynamiccss, "dynamicClass");
  },
  removeClassHandler: function (component, event, helper) {
    let dynamiccss = component.find("dynamiccss");
    $A.util.removeClass(dynamiccss, "dynamicClass");
  },
  toggleClassHandler: function (component, event, helper) {
    let dynamiccss = component.find("dynamiccss");
    $A.util.toggleClass(dynamiccss, "dynamicClass");
  },
  hideClassHandler: function (component, event, helper) {
    let dynamiccss = component.find("dynamicdisplay");
    $A.util.addClass(dynamiccss, "dynamicDisplay");
  },
  displayClassHandler: function (component, event, helper) {
    let dynamiccss = component.find("dynamicdisplay");
    $A.util.removeClass(dynamiccss, "dynamicDisplay");
  },
  toggleDisplayClassHandler: function (component, event, helper) {
    let dynamiccss = component.find("dynamicdisplay");
    $A.util.toggleClass(dynamiccss, "dynamicDisplay");
  }
});
