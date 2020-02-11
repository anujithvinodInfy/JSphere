import { LightningElement, track, wire } from 'lwc';
import getAllJourneyInit from '@salesforce/apex/TrainSheduleController.getAllJourneyInit';
export default class TrainTrack extends LightningElement {
    @track trainShe;
    @track isTrainSheEmpty;
    @track error;
    @track working;
    columnList=[
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
    ];

    @wire(getAllJourneyInit)
    getAllData({error, data})
    {
        if(data){
            this.trainShe=data;
            this.isTrainSheEmpty=false;
            this.working="Hurraaaaay";
        }
        else if(error){
            this.isTrainSheEmpty=true;
            this.trainShe=undefined;
            this.error=error;
        }
    }

}