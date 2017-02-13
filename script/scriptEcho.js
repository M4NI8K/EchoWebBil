 
        	
      var openTimes = [ //opening time, closing time, hours until next oppening                 
                  [0,0,33],		//closed on sunday 1day + 9h day after         
                  [9,17,33],	//mon + ramainingtime
                  [9,17,33],	//tue
                  [9,17,33],	//wen
                  [9,17,33],	//thu
                  [9,17,33],	//fri
                  [9,14,57],	//sat closed on sunday + 46h untill opening no mon 9
                  ];
      
   
      
      

      
      
      function counting(){
    	
                 
         	var d = new Date();
      		var dayOfWeek = d.getDay()  ;   //-1 Adjusted for openTimes array   	       	
    		var day = 	d.getDate()  ;       		 	      	   		
    		var month = d.getMonth() +1;  		     	         	
    		var year = 	d.getFullYear();
    		  		
        	var hours = d.getHours()   ;       		         	
        	var minutes = d.getMinutes();        		        	
        	var seconds = d.getSeconds();
        		       	
        	var message ;          	
        	var minutesCounter;
        	var hoursCounter;
        	  
        	var isOpen = false;

	        if (openTimes[dayOfWeek][0] <= hours && openTimes[dayOfWeek][1] > hours){	        		        	   	
	        
	        	hoursCounter = (openTimes[dayOfWeek][1] - hours -1);	        	
	        	minutesCounter = (60 - minutes);	        	
	        	message = "Otwatre. Jeszcze ";
	        	isOpen = true;
	        		        	
	        }else if (openTimes[dayOfWeek][0] < hours && openTimes[dayOfWeek][1] <= hours){	        		        	
        	
    	        hoursCounter = (openTimes[dayOfWeek][2] - hours -1);
    	        minutesCounter = (60 - minutes);	 	       			
        		message = "Nieczynne: ";
        		isOpen = false
        		
	        }else if (openTimes[dayOfWeek][0] > hours && openTimes[dayOfWeek][1] > hours){
	        	 	       	        			        	
				hoursCounter = (openTimes[dayOfWeek][0] - hours -1);
				minutesCounter = (60 - minutes);	 		        		
	        	message = "Close. Till open";
	        	isOpen = false
	        	
	        } else {
	        	hoursCounter = 0;
				minutesCounter = 0;	 		        		
	        	message = "error";
	        	isOpen = false
	        }
	        
	        
	
		    	
				if (day<10){day = "0" + day;}; 
				if (month<10){month = "0" + month;};        
	        	if (hours<10){hours = "0" + hours;};
	        	if (minutes<10){minutes = "0" + minutes;};
	        	if (seconds<10){seconds = "0" + seconds;}; 
	        	
	        document.getElementById("watch").innerHTML = 
	        	hours +":" + 
	        	minutes + ":" +
	        	seconds + " " +
	        	
	        	day + "/" + 
	        	month + "/" +
	        	year + " " ;
	        	        
	        
	        
	        document.getElementById("list" + (dayOfWeek )).style.backgroundColor = "D7BE75";
	        
	        
	    	
//	    	if (hoursCounter<10){hoursCounter = "0" + hoursCounter;}; 
	    	if (minutesCounter<10){minutesCounter = "0" + minutesCounter;}; 
	    	
	   	
		        
	        
	        if (isOpen){
	        document.getElementById("opening").className = "active item";
	        document.getElementById("open").innerHTML = hoursCounter +"godz i " + minutesCounter + "min";
	        }else{	        	        
	        document.getElementById("closing").className = "active item";
	        document.getElementById("close").innerHTML = hoursCounter +"godz i " + minutesCounter + "min";
	        }
	       
	       
	        
	        
	        setTimeout("counting()", 1000);
        
	        
	        
        }
       
