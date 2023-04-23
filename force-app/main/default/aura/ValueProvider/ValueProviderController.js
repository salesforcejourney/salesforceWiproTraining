({
    changeTech : function(component, event, helper) {
        let tech = component.get('v.Technology');
        console.log('tech',tech)
        component.set('v.Technology', "LWC Programming");
    },

    deviceCheck : function(component,event,helper){
        let device = $A.get("$Browser.formFactor")
        console.log('device',device);
    },

    localeCheck: function(component,event,helper){
        let language = $A.get("$Locale.language")
        console.log('language',language);
    },

    labelCheck: function(component,event,helper){
        let label = $A.get("$Label.c.APIKey")
        console.log('label',label);
    }
})
