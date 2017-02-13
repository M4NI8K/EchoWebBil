 
        	
      var openTimes = [ //opening time, closing time, hours until next oppening
                  [9,17,33],	//mon + ramainingtime
                  [9,17,33],	//tue
                  [9,17,33],	//wen
                  [9,17,33],	//thu
                  [9,17,33],	//fri
                  [9,13,46],//sat closed on sunday + 46h untill opening no mon 9
                  [0,0,35],//closed on sunday 1day + 9h day after  
                  [9,0,0] 	// nonexisting 4 if statment
                  ];
      
   
      
      

      
      
      function counting(){
        
                 
         	var d = new Date();
      		var dayOfWeek = d.getDay()-1;      	       	
    		var day = 	d.getDate();       		 	      	
    		var month = d.getMonth() +1;  		     	         	
    		var year = 	d.getFullYear();
        	var hours = d.getHours()  ;       		         	
        	var minutes = d.getMinutes();        		        	
        	var seconds = d.getSeconds();
        		       	
        	var message ;          	
        	var minutesCounter;
        	var hoursCounter;
        	
       	

	        if (openTimes[dayOfWeek][0] <= hours && openTimes[dayOfWeek][1] > hours){	        		        	   	
	        
	        	hoursCounter = (hours - openTimes[dayOfWeek][1])*-1;
	        	minutesCounter = (minutes - 60)*-1;	        	
	        	message = "Open. Till close";
	        		        	
	        }else if (openTimes[dayOfWeek][0] < hours && openTimes[dayOfWeek][1] < hours){	        		        	
        	
    	        hoursCounter = (hours - openTimes[dayOfWeek][2])*-1;
    	        minutesCounter = (minutes - 60)*-1;	 	       			
        		message = "Close. Till open";
	
	        }else if (openTimes[dayOfWeek][0] > hours && openTimes[dayOfWeek][1] >= hours){
	        	 	       	        			        	
				hoursCounter = (hours - openTimes[dayOfWeek][0])*-1;
				minutesCounter = (minutes - 60)*-1;	 		        		
	        	message = "Close. Till open";
	        } else {
	        	hoursCounter = 0;
				minutesCounter = 0;	 		        		
	        	message = "";
	        }
	        
	        
	        
	    	
		    	if (hoursCounter<10){hoursCounter = "0" + day;}; 
		    	if (minutesCounter<10){minutesCounter = "0" + day;}; 
		    	
		    document.getElementById("open").innerHTML = message +  hoursCounter +":" + minutesCounter;	
		
		    	
				if (day<10){day = "0" + day;}; 
				if (month<10){month = "0" + month;};        
	        	if (hours<10){hours = "0" + hours;};
	        	if (minutes<10){minutes = "0" + minutes;};
	        	if (seconds<10){seconds = "0" + seconds;}; 
	        	
	        document.getElementById("watch").innerHTML = 
	        	day + "/" + 
	        	month + "/" +
	        	year + " " +
	        	hours +":" + 
	        	minutes + ":" +
	        	seconds + " ";
	        	        
	        
	        setTimeout("counting()", 1000);
        
        }
       
