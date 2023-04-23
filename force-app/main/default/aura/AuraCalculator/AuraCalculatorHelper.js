({
  calcHelper: function (component, event) {
    let result = 0;
    let evtSource = event.getSource().get("v.label");
    //get the number 1
    let number1 = component.get("v.Number1");
    //get the number 2
    let number2 = component.get("v.Number2");
    if (evtSource === "Add") {
      result =
        this.genericConversion(number1) + this.genericConversion(number2);
    } else if (evtSource === "Sub") {
      result =
        this.genericConversion(number1) - this.genericConversion(number2);
    } else if (evtSource === "Mul") {
      result =
        this.genericConversion(number1) * this.genericConversion(number2);
    } else if (evtSource === "Div") {
      result =
        this.genericConversion(number1) / this.genericConversion(number2);
    }
    component.set("v.result", result);
    component.set("v.showresult", true);
    //alert(result);
  },

  addHelper: function (component) {
    //get the number 1
    let number1 = component.get("v.Number1");
    //get the number 2
    let number2 = component.get("v.Number2");
    //default data type will be string
    console.log(typeof number1);
    console.log(typeof number2);

    //convert string to integer : parseInt
    let result =
      this.genericConversion(number1) + this.genericConversion(number2);

    alert(result);
  },
  subHelper: function (component) {
    //get the number 1
    let number1 = component.get("v.Number1");
    //get the number 2
    let number2 = component.get("v.Number2");
    //default data type will be string
    console.log(typeof number1);
    console.log(typeof number2);

    //convert string to integer : parseInt
    let result =
      this.genericConversion(number1) - this.genericConversion(number2);

    alert(result);
  },
  mulHelper: function (component) {
    //get the number 1
    let number1 = component.get("v.Number1");
    //get the number 2
    let number2 = component.get("v.Number2");
    //default data type will be string
    console.log(typeof number1);
    console.log(typeof number2);

    //convert string to integer : parseInt
    let result =
      this.genericConversion(number1) * this.genericConversion(number2);

    alert(result);
  },
  divHelper: function (component) {
    //get the number 1
    let number1 = component.get("v.Number1");
    //get the number 2
    let number2 = component.get("v.Number2");
    //default data type will be string
    console.log(typeof number1);
    console.log(typeof number2);

    //convert string to integer : parseInt
    let result =
      this.genericConversion(number1) / this.genericConversion(number2);

    alert(result);
  },

  genericConversion: function (enteredString) {
    let converetdNumber = parseInt(enteredString);
    return converetdNumber;
  }
});
