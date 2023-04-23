({
    handleClick : function(component) {
        //console.log('Button Clicked');
        let subidentifier = component.find('subidentifier');
        console.log('subidentifier',subidentifier);

        if(subidentifier){
            let subButtonName = subidentifier.get('v.name');
            console.log('subButtonName',subButtonName)
        }

        let addidentifier = component.find('addidentifier');
        console.log('addidentifier',addidentifier);

        let mulidentifier = component.find('mulidentifier');
        console.log('mulidentifier',mulidentifier)
    }
})
