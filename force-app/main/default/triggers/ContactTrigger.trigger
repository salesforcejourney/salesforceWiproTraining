trigger ContactTrigger on Contact(before insert, before update) {
  for (Contact con : Trigger.new) {
    if (Trigger.isInsert) {
      if (con.Phone != null) {
        //validate the phone number
        ContactUtility.validatePhoneNumber(con.Id);
      }
    } else if (Trigger.isUpdate) {
      Contact oldContact = Trigger.oldMap.get(con.Id);
      if (con.phone != oldContact.phone) {
        //validate the phone number
        ContactUtility.validatePhoneNumber(con.Id);
      }
    }
  }
}