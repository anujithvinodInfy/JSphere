/* eslint-disable no-undef */
/* eslint-disable no-alert */
import { LightningElement, track,wire } from 'lwc';
import { NavigationMixin,CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
// import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import getJourneyDetails from '@salesforce/apex/TrainSheduleController.getJourneyDetails';
export default class ShowSelectedBooking extends NavigationMixin(LightningElement) {
    @track showBooking=false;
    recordId='';
    @track schedule;
    @wire(CurrentPageReference) pageRef;
    @wire(getJourneyDetails,{ recId: '$recordId'})
    wiredMethod({error,data})
    {
        if(data)
        {
            this.schedule=data;
            this.showBooking=true;
        }
        else if(error)
        {    
            this.showBooking=false;
        }
    }

    connectedCallback()
    {  
        registerListener('sendTrainShedule', this.handleSelected, this);
    }
    disconnectedCallback() {
        unregisterAllListeners(this);
    }
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
        // alert( this.schedule.Boarding_Station__c);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.schedule.data.Id,
                objectApiName: 'Train_Shedule__c',
                actionName: 'edit'
            }
        });
    }
    handleSelected(record)
    {
        this.recordId=record;
    }
}