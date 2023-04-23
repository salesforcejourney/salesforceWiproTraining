//from trigger we cannot make a syncronous call to the third party API
/*http://apilayer.net/api/validate?access_key=ba2c8e7e66ab53ce2eaad06a57d73e6a&number=14158586273
 */
public with sharing class ContactUtility {
  @future(callout=true)
  public static void validatePhoneNumber(String contactId) {
    Contact con = [select id,phone,Verified_Phone_Number__c from contact where id = :contactId];
    String endpoint =
      System.LABEL.NumverifyEndpoint + '?access_key=' + System.LABEL.NumverifyKey + '&number=' + con.phone;

    //1. Create instance of HTTP
    Http http = new Http();

    //2. create the request instance
    HttpRequest request = new HttpRequest();

    //3. set the parameters in the request
    request.setEndpoint(endpoint);
    request.setMethod('GET');
    request.setHeader('Content-Type', 'application/json');
    request.setTimeout(12000);

    //4.send the request and handle the response
    Httpresponse response = http.send(request);

    System.debug('Response Code ' + response.getStatusCode());
    System.debug('Response Status ' + response.getStatus());
    System.debug('Response ' + response.getBody());
      
/*
{
  "valid": true,
  "number": "918668411923",
  "local_format": "08668411923",
  "international_format": "+918668411923",
  "country_prefix": "+91",
  "country_code": "IN",
  "country_name": "India (Republic of)",
  "location": "Maharashtra",
  "carrier": "Reliance Jio Infocomm Ltd (RJIL)",
  "line_type": "mobile"
}
*/
      if(response.getStatusCode() == 200){
		      NumverifyResponse formattedResponse = NumverifyResponse.parse(response.getBody());
		      System.debug('Is Phone Valid ' + formattedResponse.valid);
      		con.Verified_Phone_Number__c = formattedResponse.valid;
      		update con;
      }else {
          System.debug('Error from Numverify API ' + response.getBody());
      }
  }
}