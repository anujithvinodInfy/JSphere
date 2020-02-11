public with sharing class TrainSheduleController {
    
    @AuraEnabled(cacheable = true)
    public static List<Train_Shedule__c> getAllJourneyInit()
    {
        List<Train_Shedule__c> listRecords= new List<Train_Shedule__c>();
        Date myDate= date.today();
        listRecords=[SELECT Id, Name, CreatedDate, Boarding_Station__c, Destination_Station__c, 
                     Planned_Booking_Date__c, Is_Talkal__c, Train_Name_Code__c, Name_of_Person__c, Age__c, Is_Ac__c,
                     Bedroll_Required__c, Status_of_Booking__c, Date_of_Journey__c, Booking_Open_Date__c FROM Train_Shedule__c 
                     where Date_of_Journey__c>= :myDate and Date_of_Journey__c<= :myDate+7 ];
        //system.debug(listRecords.size()+100);
        return listRecords;
    }
}