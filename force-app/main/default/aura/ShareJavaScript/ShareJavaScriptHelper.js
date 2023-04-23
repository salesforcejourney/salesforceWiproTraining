//Resulable code
//business logic
//Helper method can be called by another helper method or from another JS as well
({
  genericMessage: function () {
    console.log("Welcome to learn Aura programming");
    this.showMessage("Welcome to learn Aura Programming");
  },

  showMessage: function (message) {
    alert(message);
  }
});
