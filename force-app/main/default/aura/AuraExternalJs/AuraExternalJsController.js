({
  scriptHandler: function (component, event, helper) {
    console.log("Script File Loaded Successfully");
  },

  clickHandler: function (component, event, helper) {
    let momentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    component.set("v.todaysDate", momentDate);
  }
});
