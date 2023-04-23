/* it is a Javascript file 
 * Your component file can only communicate with the controller file
 * this file is also referred as client side controller file
 * this file is used to handle the standard and custom events.
 * Best Practice --> Avoid writing business logic in this file
 */ 
({
	myAction : function(component, event, helper) {
        helper.showMessage();
	}
})