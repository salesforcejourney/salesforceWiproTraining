public class PlatformEventPublisher {

    public static void publishMessage(){
        Communication_Message__e platformEvent = new Communication_Message__e(
        	message__c = 'Please refresh the page for updated values'
        );
        
        Database.SaveResult sr = Eventbus.publish(platformEvent);
        if(sr.isSuccess()){ 
            System.debug('Please refresh the page for updated value');
        }else{
            for(Database.Error err : sr.getErrors()){
                System.debug('Error ' + err.getMessage());
            }
        }
        
    }
}