import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class ShowSelectedBooking extends NavigationMixin(LightningElement) {
    @track showBooking
    @track schedule = {
        "Date_of_Journey__c": "10-12-2020",
        "Boarding_Station__c": "10-12-2020",
        "Destination_Station__c": "10-12-2020",
        "Train_Name_Code__c": "10-12-2020",
        "Is_Talkal__c":true,
        "Is_Ac__c": false,
        "Bedroll_Required__c":true,
        "Status_of_Booking__c": "Open",
        "Planned_Booking_Date__c": "10-12-2020",
        "Booking_Open_Date__c": "10-12-2020"
    };

    viewDetailed()
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.schedule.data.Id,
                objectApiName: 'Train_Shedule__c',
                actionName: 'view'
            }
        });
    }
    navigateToEdit()
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.schedule.data.Id,
                objectApiName: 'Train_Shedule__c',
                actionName: 'edit'
            }
        });
    }
}