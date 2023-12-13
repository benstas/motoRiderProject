trigger EventSpeakerTrigger on EventSpeakers__c (before insert, before update ) {
    

	
    //Step 1 -  Start
	Set<Id> speakerIdsSet = new Set<Id>();
    Set<Id> eventIdsSet = new Set<Id>();
    
    for( EventSpeakers__c es : Trigger.New ){
         speakerIdsSet.add(es.Speaker__c);
         eventIdsSet.add(es.Event__c);
    }
   
    Map<Id, DateTime> requestedEvents = new Map<Id, DateTime>();
    
    List<Event__c> relatedEventList = [Select Id, Start_DateTime__c From Event__c 
                                       Where Id IN : eventIdsSet];
    
    for(Event__c evt : relatedEventList ){
        requestedEvents.put(evt.Id, evt.Start_DateTime__c);
    }
    // Step 2 End
    
    
    // Step 3 - Start
    List<EventSpeakers__c> relatedEventSpeakerList = [ SELECT Id, Event__c, Speaker__c,
                                               Event__r.Start_DateTime__c
                                               From EventSpeakers__c
                                               WHERE Speaker__c IN : speakerIdsSet];
    
    // Step 3 - End 
    
    // Step 4 - Start
    for( EventSpeakers__c es : Trigger.New ){ // - Salesforce Geek
        
        DateTime bookingTime = requestedEvents.get(es.Event__c); 
        
        for(EventSpeakers__c es1 : relatedEventSpeakerList) {
           
            if(es1.Speaker__c == es.Speaker__c && es1.Event__r.Start_DateTime__c == bookingTime ){
                es.Speaker__c.addError('The speaker is already booked at that time');
                es.addError('The speaker is already booked at that time');
            }
        }
        
    }
    // Step 4 - End
    
}