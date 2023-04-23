public with sharing class AccountHelper {
  @AuraEnabled(cacheable=true)
  public static List<Account> getTopAccounts() {
    List<Account> accList = [
      SELECT id, name, industry, rating, annualrevenue
      FROM account
      WHERE AnnualRevenue != NULL
      WITH SECURITY_ENFORCED
      ORDER BY AnnualRevenue DESC
    ];
    return accList;
  }

  @AuraEnabled(cacheable=true)
  public static List<Account> getAccountByIndustry(String industry) {
    List<Account> accList = [
      SELECT id, name, industry, rating, annualrevenue
      FROM account
      WHERE Industry = :Industry
      WITH SECURITY_ENFORCED
      ORDER BY AnnualRevenue DESC
    ];
    return accList;
  }

  @AuraEnabled(cacheable=true)
  public static Map<String, String> getIndustryOptions() {
    Map<String, String> options = new Map<String, String>();
    //get account industry field describe
    Schema.DescribeFieldResult fieldResult = Account.Industry.getDescribe();

    //get picklist values
    List<Schema.PicklistEntry> pickListEntries = fieldResult.getPicklistValues();

    //Iterate over picklist and populate the map
    for (Schema.PicklistEntry picklistEntry : pickListEntries) {
      options.put(picklistEntry.getLabel(), picklistEntry.getValue());
    }
    return options;
  }

  @AuraEnabled
  public static String insertAccount(Account account) {
    try {
      insert account;
      return account.Id;
    } catch (Exception ex) {
      return ex.getMessage();
    }
  }

  @AuraEnabled
  public static AccountContactListWrapper getAccountWithContacts(
    String accountId
  ) {
    List<Account> accList = [
      SELECT
        id,
        name,
        industry,
        (SELECT id, FirstName, LastName, Email FROM contacts)
      FROM Account
      WHERE id = :accountId
      WITH SECURITY_ENFORCED
    ];
    AccountContactListWrapper wrapperInstance = new AccountContactListWrapper();
    wrapperInstance.accRecord = accList[0];
    wrapperInstance.conList = accList[0].contacts;
    wrapperInstance.contactCount = accList[0].contacts.size();
    return wrapperInstance;
  }

  public class AccountContactListWrapper {
    @AuraEnabled
    public Account accRecord { get; set; }
    @AuraEnabled
    public List<Contact> conList { get; set; }
    @AuraEnabled
    public Integer contactCount { get; set; }
  }
}