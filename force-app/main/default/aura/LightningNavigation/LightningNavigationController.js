({
  homeNavigation: function (component, event, helper) {
    //Step 2
    let pageReference = {
      type: "standard__namedPage",
      attributes: {
        pageName: "home"
      }
    };

    //step 3
    let navService = component.find("navid");
    event.preventDefault();
    navService.navigate(pageReference);
  },

  accountNavigation: function (component, event, helper) {
    //step 2
    let pageReference =
      // Opens the case home page.
      {
        type: "standard__objectPage",
        attributes: {
          objectApiName: "Account",
          actionName: "home"
        }
      };

    //step 3

    let navservice = component.find("navid");
    event.preventDefault();
    navservice.navigate(pageReference);
  },

  nextWeekaccountNavigation: function (component, event, helper) {
    //step 2
    let pageReference =
      // Navigates to account list with the filter set to RecentlyViewedAccounts.
      {
        type: "standard__objectPage",
        attributes: {
          objectApiName: "Account",
          actionName: "list"
        },
        state: {
          filterName: "NewThisWeek"
        }
      };

    //step 3
    let navservice = component.find("navid");
    event.preventDefault();
    navservice.navigate(pageReference);
  }
});
