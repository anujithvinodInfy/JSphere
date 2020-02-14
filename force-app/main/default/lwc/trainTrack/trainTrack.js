/* eslint-disable no-alert */
import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAllJourneyInit from '@salesforce/apex/TrainSheduleController.getAllJourneyInit';
export default class TrainTrack extends NavigationMixin(LightningElement) {
    @track trainShe;
    @track isTrainSheEmpty;
    @track error;
    @track working;
    @track bShowModal=false;
    recordId;
    columnList = [
        //{label: 'Booking ID', fieldName: 'Name', type: 'text'},
        //{label: 'Traveller', fieldName: 'Name_of_Person__r.Name', type: 'text'},
        {
            label: 'View',
            type: 'button-icon',
            initialWidth: 50,
            typeAttributes: {
                iconName: 'action:preview',
                title: 'Preview',
                variant: 'border-filled',
                alternativeText: 'View'
            }
        },
        //{label: 'Booking ID', fieldName: 'Name', type: 'text'},
        { label: 'Journey Date', fieldName: 'Date_of_Journey__c', type: 'date' },
        { label: 'From', fieldName: 'Boarding_Station__c', type: 'text' },
        { label: 'To', fieldName: 'Destination_Station__c', type: 'text' },
        { label: 'Booking Open Date', fieldName: 'Booking_Open_Date__c', type: 'date' },
        //{label: 'Booking Date', fieldName: 'Planned_Booking_Date__c', type: 'date'},
        //{label: 'Status', fieldName: 'Status_of_Booking__c', type: 'text'},
        { label: 'Train Name/Code', fieldName: 'Train_Name_Code__c', type: 'text' },
        //{label: 'Talkal', fieldName: 'Is_Talkal__c', type: 'boolean'},
        //{label: 'Ac', fieldName: 'Is_Ac__c', type: 'boolean'},
        //{label: 'Bedroll', fieldName: 'Bedroll_Required__c', type: 'boolean'}
    ];

    @wire(getAllJourneyInit) wiredTrainShedule({ err, data }) {
        if (data) {
            this.trainShe = data;
            this.isTrainSheEmpty = false;
        }
        else if (err) {
            this.trainShe = undefined;
            this.isTrainSheEmpty = true;
        }
    }

    addTrainShe() {
        //alert("Hi");
        //     this[NavigationMixin.Navigate]({
        //         type: 'standard__objectPage',
        //         attributes: {
        //             objectApiName: 'Train_Shedule__c',
        //             actionName: 'new'
        //         }
        //     });
        // }
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Train_Shedule__c',
                actionName: 'new'
            }
        });
    }

    viewAllShe() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Train_Shedule__c',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        });
    }
    showBookingDetails(event)
    {
        //this.row=event.detail.row;
        this.record = event.detail.row;
        this.bShowModal = true;
        const selectedEvent = new CustomEvent('selected', { detail: this.record.Id });
        this.dispatchEvent(selectedEvent);
    }

    closeModal() {
        this.bShowModal = false;
    }

}