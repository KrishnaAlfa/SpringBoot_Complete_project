
function saveTravelDeparture() {	
	
  
    $.ajax({
        url: "/eASI/travel/add3",
        type: "post",
        data: TravelDepartureTableJsonOnAdd(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            
	   		$("#saveButton1").show();
			//$("#editButton").hide();
			populateTravelDepartureTable();
        },
        error: function(xhr, status, error) {
        	  
        	}
    });
 
}

function TravelDepartureTableJsonOnAdd() {
	var json = JSON.stringify({
		 "departureDate": $('#departureDate').val(),
	     "departureFrom": $('#departureFrom').val(),
	     
	     "arrivalDate": $('#arrivalDate').val(),
	     
	     "arrivalFrom": $('#arrivalFrom').val(),
	     "modeOfTravel": $('#modeOfTravel').val(),
	     "fairPaid": $('#fairPaid').val(),
	     "distance": $('#distance').val(),
	     "durationOfHalt": $('#durationOfHalt').val(),
	     "purpose": $('#purpose').val(),
        
    });
	
	return json;
}


function populateTravelDepartureTable() {
	
	
    $.ajax({
        url: "/eASI/travel/getAllTravelDeparture",
        type: "get",
        success: function(data){
            var travelList = data.payload;
            $('#travelDepartureTable td').remove();
            console.log(travelList);
            $(function() {
        	    $.each(travelList, function (index) {
        		var travel = travelList[index]
        		console.log(travel);
                var $tr = $('<tr>').append(
                    $('<td>').text(travel.departureDate),
                    $('<td>').text(travel.departureFrom),
                    $('<td>').text(travel.arrivalDate),
                    $('<td>').text(travel.arrivalFrom),
                    $('<td>').text(travel.modeOfTravel),
                    $('<td>').text(travel.fairPaid),
                    $('<td>').text(travel.distance),
                    $('<td>').text(travel.durationOfHalt),
                    $('<td>').text(travel.purpose)
                    
                   ).appendTo('#travelDepartureTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}



























function saveTravelHotel() {	
	
  
    
	 var formData = new FormData();
	  var file = $('#bill').get(0).files[0];
	  var fromDate = $('#fromDate').val();
	  var fromTo = $('#fromTo').val();
	  var nameOfHotel = $('#nameOfHotel').val();
	  var dailyRate   =$('#datepicker1').val();
	  var amountPaid =$('#amountPaid').val();
	  formData.append('file', file);
	  formData.append('fromDate', fromDate);
	  formData.append('fromTo', fromTo);
	  formData.append('nameOfHotel', nameOfHotel);
	  formData.append('datepicker1', datepicker1);
	  formData.append('amountPaid', amountPaid);
	


	    /*$.ajax({
	        url: url,
	        type:"POST",
	        processData:false,
	        contentType: false,
	        data: formData,
		    	complete: function(data){
	                        alert("success");
	                }
	      });*/
	
	$.ajax({
        url: "/eASI/travel/add2",
        type: "post",
        data: formData,
        processData:false,
        contentType: false,
        success: function (data) {
            console.log("success");
            
	   		$("#saveButton2").show();
			//$("#editButton").hide();
			populateTravelHotelTable();
        },
        error: function(xhr, status, error) {
        	  
        	}
    });

}

function populateTravelHotelTable() {
	
	
    $.ajax({
        url: "/eASI/travel/getAllTravelHotel",
        type: "get",
        success: function(data){
            var hotellList = data.payload;
            $('#travelHotelTable td').remove();
            console.log(hotellList);
            $(function() {
        	    $.each(hotellList, function (index) {
        		var hotel = hotellList[index]
        		console.log(hotel);
                var $tr = $('<tr>').append(
                    $('<td>').text(hotel.fromDate),
                    $('<td>').text(hotel.fromTo),
                    $('<td>').text(hotel.nameOfHotel),
                    $('<td>').text(hotel.dailyRate),
                    $('<td>').text(hotel.amountPaid),
                    $('<td>').text(hotel.bill)
                   ).appendTo('#travelHotelTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}



function saveTravelPlace() {	
	
	  
    
	 var formData = new FormData();
	  var file = $('#bills').get(0).files[0];
	  var fromDate = $('#datepicker2').val();
	  var fromTo = $('#placeFrom').val();
	  var nameOfHotel = $('#placeTo').val();
	  var dailyRate   =$('#fairPaids').val();
	 
	  formData.append('file', file);
	  formData.append('datepicker2', datepicker2);
	  formData.append('placeFrom', placeFrom);
	  formData.append('placeTo', placeTo);
	  formData.append('fairPaids', fairPaids);
	 
	  $.ajax({
	        url: "/eASI/travel/add3" +
	        		".",
	        type: "post",
	        data: formData,
	        processData:false,
	        contentType: false,
	        success: function (data) {
	            console.log("success");
	            
		   		$("#saveButton3").show();
				//$("#editButton").hide();
		   		populateTravelPlaceTable();
	        },
	        error: function(xhr, status, error) {
	        	  
	        	}
	    });

	
	
}
function populateTravelPlaceTable() {
	
	
    $.ajax({
        url: "/eASI/travel/getAllTravelPlace",
        type: "get",
        success: function(data){
            var placeList = data.payload;
            $('#travelPlaceTable td').remove();
            console.log(placeList);
            $(function() {
        	    $.each(placeList, function (index) {
        		var place = placeList[index]
        		console.log(place);
                var $tr = $('<tr>').append(
                    $('<td>').text(place.date),
                    $('<td>').text(place.placeFrom),
                    $('<td>').text(place.placeTo),
                    $('<td>').text(place.fairPaids),
                    $('<td>').text(place.bills)  
                   ).appendTo('#travelPlaceTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}






/*function TravelHotelTableJsonOnAdd() {
	alert("json travel" + $('#bill').val())
	var json = JSON.stringify({
		 "fromDate": $('#fromDate').val(),
	     "fromTo": $('#fromTo').val(),
	     "nameOfHotel": $('#nameOfHotel').val(),
	     "dailyRate": $('#datepicker1').val(),
	     "amountPaid": $('#amountPaid').val(),
	     "bill": $('#bill').val(),
	     
        
    });
	
	alert(json);
	return json;
}


function populateTravelHotelTable() {
	
	alert("===========popolate")
	
    $.ajax({
        url: "/eASI/travel/getAllTravelHotel",
        type: "get",
        success: function(data){
            var travelList = data.payload;
            $('#travelHotelTable td').remove();
            console.log(travelList);
            $(function() {
        	    $.each(travelList, function (index) {
        		var travel = travelList[index]
        		console.log(travel);
                var $tr = $('<tr>').append(
                    $('<td>').text(travel.fromDate),
                    $('<td>').text(travel.fromTo),
                    $('<td>').text(travel.nameOfHotel),
                    $('<td>').text(travel.dailyRate),
                    $('<td>').text(travel.amountPaid),
                    $('<td>').text(travel.bill)
                   ).appendTo('#travelHotelTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	  alert(xhr.responseText);
      	}
    });
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
	
	

	function saveTravelPlace() {	
		
		alert("=====place")
	  
	    $.ajax({
	        url: "/eASI/travel/add3",
	        type: "post",
	        data: TravelPlaceTableJsonOnAdd(),
	        contentType: "application/json",
	        success: function (data) {
	            console.log("success");
	            
		   		$("#saveButton3").show();
				//$("#editButton").hide();
				populateTravelPlaceTable();
	        },
	        error: function(xhr, status, error) {
	        	  
	        	}
	    });
		
	}

	function TravelPlaceTableJsonOnAdd() {
		alert("json place")
		var json = JSON.stringify({
			
			 "date": $('#datepicker2').val(),
			 "placeFrom": $('#placeFrom').val(),
		     "placeTo": $('#placeTo').val(),
		     "fairPaids": $('#fairPaids').val(),
		     "bills": $('#bills').val(),
		     
	        
	    });
		
		alert(json);
		return json;
	}


	function populateTravelPlaceTable() {
		
		alert("===========list place")
		
	    $.ajax({
	        url: "/eASI/travel/getAllTravelPlace",
	        type: "get",
	        success: function(data){
	            var travelList = data.payload;
	            $('#travelPlaceTable td').remove();
	            console.log(travelList);
	            $(function() {
	        	    $.each(travelList, function (index) {
	        		var travel = travelList[index]
	        		console.log(travel);
	                var $tr = $('<tr>').append(
	                    $('<td>').text(travel.date),
	                    $('<td>').text(travel.placeFrom),
	                    $('<td>').text(travel.placeTo),
	                    $('<td>').text(travel.fairPaids),
	                    $('<td>').text(travel.bills)  
	                   ).appendTo('#travelPlaceTable');
	                
	            });
	        });
	        },
	        error: function(xhr, status, error) {
	      	  alert(xhr.responseText);
	      	}
	    });
}*/


