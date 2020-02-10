({
	doInit : function(component, event, helper) {
		var action = component.get("c.getAllJourneyInit");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.trainShed", response.getReturnValue());
            }
        });
	 $A.enqueueAction(action);       
     component.set('v.columns', [
            //{label: 'Booking ID', fieldName: 'Name', type: 'text'},
 			//{label: 'Traveller', fieldName: 'Name_of_Person__r.Name', type: 'text'},
 			{label: 'Journey Date', fieldName: 'Date_of_Journey__c', type: 'date'},
            {label: 'From', fieldName: 'Boarding_Station__c', type: 'text'},
            {label: 'To', fieldName: 'Destination_Station__c', type: 'text'},
            {label: 'Booking Open Date', fieldName: 'Booking_Open_Date__c', type: 'date'},
 			//{label: 'Booking Date', fieldName: 'Planned_Booking_Date__c', type: 'date'},
            //{label: 'Status', fieldName: 'Status_of_Booking__c', type: 'text'},
            {label: 'Train Name/Code', fieldName: 'Train_Name_Code__c', type: 'text'},
            //{label: 'Talkal', fieldName: 'Is_Talkal__c', type: 'boolean'},
 			//{label: 'Ac', fieldName: 'Is_Ac__c', type: 'boolean'},
 			//{label: 'Bedroll', fieldName: 'Bedroll_Required__c', type: 'boolean'}
        ]);
	},
    createRecord : function (component, event, helper) {
    var createRecordEvent = $A.get("e.force:createRecord");
    createRecordEvent.setParams({
        "entityApiName": "Train_Shedule__c"
    });
    createRecordEvent.fire();
}
})