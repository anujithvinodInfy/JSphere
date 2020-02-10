trigger CreateBilling on Opportunity (after insert, after update) {

    for(Opportunity op : Trigger.New) {
        if(op.StageName=='Closed Won')
        {
            
        }
        
    }   
}