function saveMembers() {	
	
  
    $.ajax({
        url: "/eASI/hrms/transferclaim/add",
        type: "post",
        data: membersJsonOnAdd(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            
	   		$("#saveButton").show();
			$("#editButton").hide();
            populateMembersTable();
        },
        error: function(xhr, status, error) {
        	  
        	}
    });
 
}

function membersJsonOnAdd() {
	var json = JSON.stringify({
        "membername": $('#membername').val(),
        "memberage": $('#memberage').val(),
        "emprelation": $('#emprelation').val(),
        
    });
	
	return json;
}


function populateMembersTable() {
	
	
    $.ajax({
        url: "/eASI/hrms/transferclaim/getAllTransferParticularsMembers",
        type: "get",
        success: function(data){
            var membersList = data.payload;
            $('#pageMembersTable td').remove();
            console.log(membersList);
            $(function() {
        	    $.each(membersList, function (index) {
        		var members = membersList[index]
        		console.log(members);
                var $tr = $('<tr>').append(
                	$('<td>').text(""),
                    $('<td>').text(members.membername),
                    $('<td>').text(members.memberage),
                    
                    $('<td>').text(members.emprelation)
                    
                ).appendTo('#pageMembersTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}



function saveDetails() {	
	
  
    $.ajax({
        url: "/eASI/hrms/transferclaim/add1",
        type: "post",
        data: detailsJsonOnAdd(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            
	   		$("#saveButton").show();
			$("#editButton").hide();
            populateDetailsTable();
        },
        error: function(xhr, status, error) {
        	  
        	}
    });
 
}

function detailsJsonOnAdd() {
	var json = JSON.stringify({
		 "departure": $('#departure').val(),
		 "arrival": $('#arrival').val(),
		 "modeoftravel": $('#modeoftravel').val(),
        "nooffare": $('#nooffare').val(),
        "farespaid": $('#farespaid').val(),
        "distance": $('#distance').val(),
        
    });
	
	return json;
}


function populateDetailsTable() {
	
	
    $.ajax({
        url: "/eASI/hrms/transferclaim/getAllTransferDetailsOfJourney",
        type: "get",
        success: function(data){
            var detailsList = data.payload;
            $('#pageDetailsTable td').remove();
            console.log(detailsList);
            $(function() {
        	    $.each(detailsList, function (index) {
        		var details = detailsList[index]
        		console.log(details);
                var $tr = $('<tr>').append(
                    $('<td>').text(details.departure),
                    $('<td>').text(details.arrival),
                    
                    $('<td>').text(details.modeoftravel),
                    $('<td>').text(details.nooffare),
                    $('<td>').text(details.farespaid),
                    $('<td>').text(details.distance)
                    
             ).appendTo('#pageDetailsTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}


function saveCharges() {	
	
  
    $.ajax({
        url: "/eASI/hrms/transferclaim/add2",
        type: "post",
        data: chargesJsonOnAdd(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            
	   		$("#saveButton").show();
			$("#editButton").hide();
            populateChargesTable();
        },
        error: function(xhr, status, error) {
        	  
        	}
    });
 
}

function chargesJsonOnAdd() {
	var json = JSON.stringify({
       
        "mode": $('#mode').val(),
        "stationfrom": $('#stationfrom').val(),
        "stationto": $('#stationto').val(),
        "raters": $('#raters').val(),
        "amtrs": $('#amtrs').val(),
        "billattachement": $('#billattachement').val(),
        "remarks": $('#remarks').val(),
        
    });
	
	return json;
}


function populateChargesTable() {
	
	
    $.ajax({
        url: "/eASI/hrms/transferclaim/getAllTransferTransportationCharges",
        type: "get",
        success: function(data){
            var chargesList = data.payload;
            $('#pageChargesTable td').remove();
            console.log(chargesList);
            $(function() {
        	    $.each(chargesList, function (index) {
        		var charges = chargesList[index]
        		console.log(charges);
                var $tr = $('<tr>').append(
                    $('<td>').text(charges.mode),
                    $('<td>').text(charges.stationfrom),
                    $('<td>').text(charges.stationto),
                    $('<td>').text(charges.raters),
                    $('<td>').text(charges.amtrs),
                    $('<td>').text(charges.billattachement),
                    $('<td>').text(charges.remarks)
                    
                   ).appendTo('#pageChargesTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}

function saveAccomodation() {	
	
  
    $.ajax({
        url: "/eASI/hrms/transferclaim/add3",
        type: "post",
        data: accomodationJsonOnAdd(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            
	   		$("#saveButton").show();
			$("#editButton").hide();
			populateAccomodationTable();
        },
        error: function(xhr, status, error) {
        	  
        	}
    });
 
}

function accomodationJsonOnAdd() {
	var json = JSON.stringify({
		"placefrom": $('#placefrom').val(),
		"placeto": $('#placeto').val(),
        "convencemode": $('#convencemode').val(),
        "classentitled": $('#classentitled').val(),
        "classtravel": $('#classtravel').val(),
        
    });
	
	return json;
}


function populateAccomodationTable() {
	
	
    $.ajax({
        url: "/eASI/hrms/transferclaim/getAllTransferParticularsJourneyAccomodation",
        type: "get",
        success: function(data){
            var accomodationList = data.payload;
            $('#pageAccomodationTable td').remove();
            console.log(accomodationList);
            $(function() {
        	    $.each(accomodationList, function (index) {
        		var accomodation = accomodationList[index]
        		console.log(accomodation);
                var $tr = $('<tr>').append(
                    $('<td>').text(accomodation.placefrom),
                    $('<td>').text(accomodation.placeto),
                    $('<td>').text(accomodation.convencemode),
                    $('<td>').text(accomodation.classentitled),
                    $('<td>').text(accomodation.classtravel)
                   
                 ).appendTo('#pageAccomodationTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}


function saveJourney() {	
	
  
    $.ajax({
        url: "/eASI/hrms/transferclaim/add4",
        type: "post",
        data: journeyJsonOnAdd(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            
	   		$("#saveButton").show();
			$("#editButton").hide();
            populateJourneyTable();
        },
        error: function(xhr, status, error) {
        	  
        	}
    });
 
}

function journeyJsonOnAdd() {
	
	var json = JSON.stringify({
		
        "from": $('#from').val(),
        
        "to": $('#to').val(),
        "farepaid": $('#farepaid').val(),
        
    });
	
	return json;
}

function populateJourneyTable() {
	
	
    $.ajax({
        url: "/eASI/hrms/transferclaim/getAllTransferDetailsJourneyByRoad",
        type: "get",
        success: function(data){
            var journeyList = data.payload;
            $('#pageJourneyTable td').remove();
            console.log(journeyList);
            $(function() {
        	    $.each(journeyList, function (index) {
        		var journey = journeyList[index]
        		console.log(journey);
                var $tr = $('<tr>').append(
                    $('<td>').text(journey.from),
                    $('<td>').text(journey.to),
                    $('<td>').text(journey.farepaid)
                 ).appendTo('#pageJourneyTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}


