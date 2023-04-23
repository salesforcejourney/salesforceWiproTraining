public with sharing class OpportunityHelper {
  @AuraEnabled(cacheable=true)
  public static List<Opportunity> getOpportunity() {
    return [SELECT id, name, stageName FROM Opportunity];
  }

  @AuraEnabled(cacheable=true)
  public static List<Opportunity> getOpportunityBasedonAmount(Decimal amount) {
    return [
      SELECT id, Name, Amount, StageName, Account.Name
      FROM Opportunity
      WHERE Amount > :amount AND StageName != 'Closed Won'
      WITH SECURITY_ENFORCED
    ];
  }

  @AuraEnabled
  public static String updateOpportunity(Decimal amount) {
    List<Opportunity> oppList = [
      SELECT id, Name, Amount, StageName, Account.Name
      FROM Opportunity
      WHERE Amount > :amount AND StageName != 'Closed Won'
      WITH SECURITY_ENFORCED
    ];

    for (Opportunity opp : oppList) {
      opp.StageName = 'Closed Won';
    }

    try {
        update oppList;
        return 'Opportunity Updated Successfully';
    } catch (Exception ex) {
        return ex.getMessage();
    }
  }
}