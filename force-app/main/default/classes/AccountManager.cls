//https://ojastraining-dev-ed.develop.lightning.force.com/services/apexrest/v1/accountdetail/asd11231231asd1
@Restresource(urlmapping = '/v1/accountdetail/*')
global class AccountManager {
	
    //it will accept Id from the URL and return the account details, related contacts, and related cases for that account
    @Httpget
    global static AccountWrapper accountInformation(){
        //1. Access the request
        RestRequest request = RestContext.request;
        
        //2. From Request access the URI/endpoint
        String requestUri = request.requestURI;
        
        //3. Get the id from the URI
        String accountId = requestUri.substringAfterLast('/');
        
        System.debug(accountId);
        
        List<Account> accList = [select id,industry,rating,annualrevenue from account where id = :accountId];
        List<Contact> conList = [select id,firstname,lastname from contact where accountId = :accountId];
        List<Case> caseList = [select id,Subject,Status,Description from case where accountId = :accountId];
        AccountWrapper wrapper = new AccountWrapper();
        if(accList.size() > 0){
	        wrapper.accRecord = accList.get(0);
    	    wrapper.conRecord = conList;
        	wrapper.caseList = caseList;
        }
        return wrapper;
    }	
    
    /*
		<request>
		<accountname>Account Created From Workbench</accountname>
		<accIndustry>Energy</accIndustry>
		<accRating>Rating</accRating>
		</request>
	*/
    @Httppost
    global static String createAccount(String accountname,String accIndustry,String accRating){
        Account acc = new Account(Name = accountname,Industry = accIndustry,rating = accRating);
        insert acc;
        return acc.Id;
    }
    
    global class AccountWrapper{
        
        global Account accRecord;
        global List<Contact> conRecord;
        global List<Case> caseList;
        
    }
}