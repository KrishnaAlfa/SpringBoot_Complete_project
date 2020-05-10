
/*function validateForm(){	
	 var validator = $("#relationForm").validate({
			rules:{
				   relativeTitle: "required",
					relativeFname: "required",
					relativeMname: "required",
					relativeLname:"required",
					
				},
		   messages:{
			       relativeTitle: "relative title required",
			       relativeFname: "relativeFname required",
			       relativeMname: "relativeMname required",
			       relativeLname: "relativeLname required",
					
			 }
	});
	  return validator;
}*/
	 


/*function resetForm(){
	var validator = validateForm();  
	validator.resetForm();
	
	$('#relationForm')[0].reset();
		$("#saveButton").show();
		$("#editButton").hide();
}*/

function addLtcPropose() {
	
	var counts =$("#counterLtcPropose").val();
	
	$('#addRow1').append('<tr id="trow'+counts+'"<tr>'+ 
					'<td><input name="ltcpropose['+counts+'].name" id="name'+counts+'" type="text" required="required"></td>'+
					'<td><input name="ltcpropose['+counts+'].age" id="age'+counts+'" onkeypress="return isNumber(event)" type="text" required="required"></td>'+
					'<td><input name="ltcpropose['+counts+'].relationship" id="relationship'+counts+'" type="text" required="required"></td>'+
					'<td><i class="fa fa-remove" style="float: right;" title="Delete" onclick="deleteDiv(trow'+counts+')"></i></td>'+				'</tr>');
	$("#counterLtcPropose").val(++counts);
	
}

function addMoreParticularmembers() {
	
	var counts =$("#counterLtcParticularMember").val();
	
	$('#addRow2').append('<tr id="trow'+counts+'"<tr>'+ 
					'<td><input name="particularMembers['+counts+'].name" id="name'+counts+'" type="text" required="required"></td>'+
					'<td><input name="particularMembers['+counts+'].age" id="age'+counts+'" onkeypress="return isNumber(event)" type="text" required="required"></td>'+
					'<td><input name="particularMembers['+counts+'].relationship" id="relationship'+counts+'" type="text" required="required"></td>'+
					'<td><i class="fa fa-remove" style="float: right;" title="Delete" onclick="deleteDiv(trow'+counts+')"></i></td>'+'</tr>');
	$("#counterLtcParticularMember").val(++counts);
	
}
function addMorefile() {
	
	var counts =$("#counterFile").val();
	
	$('#addRow6').append('<tr id="trow'+counts+'"<tr>'+ 
					'<td><input name="upload['+counts+'].files" id="name'+counts+'" type="file" required="required"></td>'+
					'<td><i class="fa fa-remove" style="float: right;" title="Delete" onclick="deleteDiv(trow'+counts+')"></i></td>'+'</tr>');
	$("#counterFile").val(++counts);
	
}

function detailsOfJourney() {
	
	var counts =$("#counterDetailsOfJourney").val();
	
	$('#addRow3').append('<tr id="trow'+counts+'"<tr>'+ 
			'<td><input name="detailsOfJourney['+counts+'].departureDate" id="departureDate'+counts+'" type="text" required="required" placeholder="Date"></td>'+
			'<td><input name="detailsOfJourney['+counts+'].departurePlace" id="departurePlace'+counts+'" type="text" required="required" placeholder="From"></td>'+
			'<td><input name="detailsOfJourney['+counts+'].arrivalPlace" id="arrivalPlace'+counts+'" type="text" required="required" placeholder="To"></td>'+
			
			'<td><input name="detailsOfJourney['+counts+'].arrivalDate" id="arrivalDate'+counts+'" type="text" required="required" placeholder="Date"></td>'+
			'<td><input name="detailsOfJourney['+counts+'].distance" id="distance'+counts+'" onkeypress="return isNumber(event)" type="text" required="required"  placeholder="To"  ></td>'+
			'<td><input name="detailsOfJourney['+counts+'].modeOfTravel"  id="modeOfTravel'+counts+'" type="text" required="required" placeholder="Acne in Kms"></td>'+
			
			'<td><input name="detailsOfJourney['+counts+'].noOfFare" id="noOfFare'+counts+'" type="text"  onkeypress="return isNumber(event)" required="required" placeholder="No Of Fairs "></td>'+
			'<td><input name="detailsOfJourney['+counts+'].farePaid" id="farePaid'+counts+'"  onkeypress="return isNumber(event)" type="text" required="required" placeholder="Fare Paid" maxlength="9"></td>'+
			'<td><input name="detailsOfJourney['+counts+'].remarks" id="remarks'+counts+'" type="text" required="required" placeholder="Remrks"></td>'+
			'<td><i class="fa fa-remove" style="float: right;" title="Delete" onclick="deleteDiv(trow'+counts+')"></i></td>'+'</tr>');
	
	  var departureDateId="departureDate"+counts;
	   var arrivalDateId="arrivalDate"+counts;
		
		$("#"+departureDateId).datepicker();
		$("#"+arrivalDateId).datepicker();
	
    $("#counterDetailsOfJourney").val(++counts);
    
 
	
}

function moreAccomodation() {
	
	var counts =$("#counterAccomodation").val();
	
	$('#addRow4').append('<tr id="trow'+counts+'"<tr>'+ 
			'<td><input name="journeyAccomodation['+counts+'].placeFrom" id="placeFrom'+counts+'" type="text" required="required" placeholder="From"></td>'+
			'<td><input name="journeyAccomodation['+counts+'].placeTo" id="placeTo'+counts+'" type="text" required="required" placeholder="To"></td>'+
			'<td><input name="journeyAccomodation['+counts+'].mode" id="mode'+counts+'" type="text" required="required" placeholder="Mode of Conveyance"></td>'+
			
			'<td><input name="journeyAccomodation['+counts+'].classEntitled" id="classEntitled'+counts+'" type="text" required="required"  placeholder="Class to which entitled"></td>'+
			
			'<td><input name="journeyAccomodation['+counts+'].classbywhichactuallytravelled" id="classbywhichactuallytravelled'+counts+'" type="text" required="required"   placeholder="Class to which Travelled" ></td>'+
			'<td><input name="journeyAccomodation['+counts+'].noOfFares" id="noOfFares'+counts+'" type="text" onkeypress="return isNumber(event)" required="required" placeholder="No Of Fairs"></td>'+
			'<td><input name="journeyAccomodation['+counts+'].fairPaid" id="fairPaid'+counts+'" type="text" onkeypress="return isNumber(event)" required="required"  placeholder="Fair Paid" maxlength="9"></td>'+
			'<td><i class="fa fa-remove" style="float: right;" title="Delete" onclick="deleteDiv(trow'+counts+')"></i></td>'+'</tr>');
    $("#counterAccomodation").val(++counts);
	
}


function moreRoad() {
	
	var counts =$("#counterroad").val();
	
	$('#addMore5').append('<tr id="trow'+counts+'"<tr>'+ 
			'<td><input name="journeyroad['+counts+'].nameFrom" id="nameFrom'+counts+'" type="text" required="required" placeholder="From"></td>'+
			'<td><input name="journeyroad['+counts+'].nameTo" id="nameTo'+counts+'" type="text" required="required"  placeholder="To"></td>'+
			'<td><input name="journeyroad['+counts+'].railFare" id="railFare'+counts+'" type="text"  onkeypress="return isNumber(event)" required="required"  placeholder="Rail Fare" maxlength="9"></td>'+
			'<td><i class="fa fa-remove" style="float: right;" title="Delete" onclick="deleteDiv(trow'+counts+')"></i></td>'+'</tr>');
    $("#counterroad").val(++counts);
	
}



function deleteDiv(divId)
{
	$(divId).remove();
}

function saveApplicationLeave() {
	
	
    $.ajax({
        url: "/eASI/hrms/claim/add1",
        type: "post",
        data: relationJsonOnAdd(),
        contentType: "application/json",
        success: function (data) {
        	O
            console.log("success");
            $("input[type=text]").val("");            
	   		
	   		populateLeaveExtensionLtcTable();
        },
        error: function(xhr, status, error) {
        	}
    });
 }

function saveDetailOfJourney() {
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/add1",
        type: "post",
        data: relationJsonOnAddForLtcDetailOfJourney(),
        contentType: "application/json",
        success: function (data) {
        	
            console.log("success");
          
            $("input[type=text]").val("");     
	   		$("#saveButton").show(); 
			$("#editButton").hide();
	   		populateLtcDetailsOfJourneyTable();
        },
        error: function(xhr, status, error) {
        	}
    });
 }

function saveDetailOfAccomodation() {
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/addAccom",
        type: "post",
        data: relationJsonOnAddForLtcAccomodation(),
        contentType: "application/json",
        success: function (data) {
        	
            console.log("success");
            $("input[type=text]").val("");     
            
	   		$("#saveButton1").show(); 
			$("#editButton1").hide();
	   		populateLtcAccomodation();
        },
        error: function(xhr, status, error) {
        	}
    });
 }

function saveDetailOfRoad() {
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/addRoad",
        type: "post",
        data: relationJsonOnAddForLtcRoad(),
        contentType: "application/json",
        success: function (data) {
        	
            console.log("success");
            $("input[type=text]").val("");     
            
	   		$("#saveButton2").show(); 
			$("#editButton2").hide();
	   		populateLtcRoad();
        },
        error: function(xhr, status, error) {
        	}
    });
 }

function saveBill() {
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/addBill",
        type: "post",
        data: relationJsonOnAddForLtcBill(),
        contentType: "application/json",
        success: function (data) {
        	$("input[type=text]").val("");     
            console.log("success");
          
	   		populateLtcRoad();
        },
        error: function(xhr, status, error) {
        	}
    });
 }



function editLtcPermission() {	
	
    $.ajax({
        url: "/eASI/hrms/claim/edit",
        type: "put",
        data: relationJsonOnEdit(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            
	   		$("#saveButton").show();
			$("#editButton").hide();
			populateLeaveExtensionLtcTable();
			
			
			$( "#srNo" ).prop( "disabled", true );
			$( "#name" ).prop( "disabled", false );
			$( "#age" ).prop( "disabled", false );
			$( "#relationship" ).prop( "disabled", false );
        },
        error: function(xhr, status, error) {
        	}
    });

}

function editLtcDetailsOfJourney() {	
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/edit",
        type: "put",
        data: relationJsonOnAddForLtcDetailOfJourney(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            
	   		$("#saveButton").show();
			$("#editButton").hide();
			populateLtcDetailsOfJourneyTable();
			
		/*
			$( "#departureDate" ).prop( "disabled", false );
			$( "#name" ).prop( "disabled", false );
			$( "#age" ).prop( "disabled", false );
			$( "#relationship" ).prop( "disabled", false );*/
        },
        error: function(xhr, status, error) {
        	}
    });

}



function editAccomodation() {
	
	$.ajax({
        url: "/eASI/hrms/leaveLtc/editAccomodation",
        type: "put",
        data: accomodationLtcJsonOnEdit(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            
	   		$("#saveButton1").show();
			$("#editButton1").hide();
			populateLtcAccomodation();
			
        },
        error: function(xhr, status, error) {
        	}
    });
	
}

function editRoad() {
	
	$.ajax({
        url: "/eASI/hrms/leaveLtc/editRoad",
        type: "put",
        data: roadLtcJsonOnEdit(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            
	   		$("#saveButton2").show();
			$("#editButton2").hide();
			populateLtcRoad();
			
        },
        error: function(xhr, status, error) {
        	}
    });
	
}

	
function relationJsonOnAdd() {
	
	var json = JSON.stringify({
		 "name": $('#name').val(),
	     "age": $('#age').val(),
	     "relationship": $('#relationship').val()
	     
    });
	
	return json;
}

function relationJsonOnAddForLtcDetailOfJourney() {
	
	var json = JSON.stringify({
		 "departureDate": $('#datepicker3').datepicker('getDate'),
	     "departurePlace": $('#departurePlace').val(),
	     "arrivalPlace": $('#arrivalPlace').val(),
	     "arrivalDate": $('#datepicker4').datepicker('getDate'),
	     
	     "distance": $('#distance').val(),
	     "modeOfTravel": $('#modeOfTravel').val(),
	     "noOfFare": $('#noOfFare').val(),
	     "farePaid": $('#farePaid').val(),
	     "remarks": $('#remarks').val()
	
    });
	
	
	
	return json;
}

function relationJsonOnAddForLtcAccomodation() {
	
	var json = JSON.stringify({
		 "placeFrom": $('#placeFrom').val(),
	     "placeTo": $('#placeTo').val(),
	     
	     "mode": $('#mode').val(),
	     
	     "classEntitled": $('#classEntitled').val(),
	     "classbywhichactuallytravelled": $('#classbywhichactuallytravelled').val(),
	     "noOfFares": $('#noOfFares').val(),
	     "fairPaid": $('#fairPaid').val()
	
    });
	
	
	return json;
}

function roadLtcJsonOnEdit() {
	
	var json = JSON.stringify({
		
		  "id": $('#roadId').val(),
		 "nameFrom": $('#nameFrom').val(),
	     "nameTo": $('#nameTo').val(),
	     
	     "railFare": $('#railFare').val(),
	
    });
	
	
	return json;
}



function relationJsonOnAddForLtcRoad() {
	
	var json = JSON.stringify({
		 "nameFrom": $('#nameFrom').val(),
	     "nameTo": $('#nameTo').val(),
	     "railFare": $('#railFare').val(),
	
    });
	
	
	return json;
}
function relationJsonOnAddForLtcBill() {
	
	var json = JSON.stringify({
		 "filename": $('#filename').val(),
	    
	
    });
	
	
	return json;
}



function accomodationLtcJsonOnEdit() {
	
	var json = JSON.stringify({
		"id": $('#id').val(),
		"placeFrom": $('#placeFrom').val(),
        "placeTo": $('#placeTo').val(),
        "mode": $('#mode').val(),
        "classEntitled": $('#classEntitled').val(),
        "classbywhichactuallytravelled": $('#classbywhichactuallytravelled').val(), 
        "noOfFares": $('#noOfFares').val(),
        "fairPaid": $('#fairPaid').val()
    });

	return json;
}


function relationJsonOnEdit() {
	var json = JSON.stringify({
		"id": $('#srNo').val(),
        "name": $('#name').val(),
        "age": $('#age').val(),
        "relationship": $('#relationship').val()
       
    });
	
	return json;
}



/*function relationJsonOnEdit() {
	var json = JSON.stringify({
		"erId": $('#erId').val(),
		"employeeId": $('#employeeId').val(),
		
        "relativeTitle": $('#relativeTitle').val(),
        "relativeFname": $('#relativeFname').val(),
        "relativeMname": $('#relativeMname').val(),
        "relativeLname": $("#relativeLname").val(),
        
        "relationWithRelative": $('#relationWithRelative').val(),
        "relativeMobile": $('#relativeMobile').val(),
        "relativeNationality": $('#relativeNationality').val()
    });
	
	// alert(json);
	return json;
}
*/

/*
 * Populating Relation in Table Format
 */
function populateLeaveExtensionLtcTable() {
	
	
    $.ajax({
        url: "/eASI/hrms/claim/getAllEmployeeLtcProposed",
        type: "get",
        success: function(data){
        	
            var leaveLtcList = data.payload;
            $('#applicationLeaveLtcTable td').remove();
            console.log(leaveLtcList);
            $(function() {
        	    $.each(leaveLtcList, function (index) {
        		var leave = leaveLtcList[index]
        		var count=index+1;
        		leave.sNo=count;
        		console.log(leave);
                var $tr = $('<tr>').append(
                    $('<td>').text(leave.sNo),
                    $('<td>').text(leave.name),
                    $('<td>').text(leave.age),
                    $('<td>').text(leave.relationship),
                    
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='View' onclick=viewFormPopulate('"+leave.id+"')><i class='fa fa-eye'></i></a>"), 
 $('<td>').html("<a href='#' onclick=openalertForwhomLtc('"+leave.id+"')><i class='fa fa-trash'></i></a>")
                   ).appendTo('#applicationLeaveLtcTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}



/*$(function() {
    $.each(leaveList, function (index) {
	var leave = leaveList[index]
	var count=index+1;
	
	leave.sNo=count;
	console.log(leave);
    var $tr = $('<tr>').append(
    	$('<td>').text(leave.sNo),
        $('<td>').text(leave.name),
        $('<td>').text(leave.age),
        
        $('<td>').text(leave.relationship),
        
$('<td>').html("<a href='#' class='tooltip-top' data-tooltip='View'><i class='fa fa-eye'></i></a>"), 
$('<td>').html("<a href='#' class='tooltip-top' data-tooltip='Edit' onclick=editFormPopulate('"+leave.id+"')><i class='fa fa-pencil' aria-hidden='true'></i></a>"),
$('<td>').html("<a href='#' onclick=openalertForFamily('"+leave.id+"')><i class='fa fa-trash'></i></a>")
       ).appendTo('#pageLeaveTable');
    
});
});*/


function populateLtcDetailsOfJourneyTable() {
	
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/getAllLtcDetailsOfJourney",
        type: "get",
        success: function(data){
        	
            var leaveLtcList = data.payload;
            $('#applicationDetailsOfJourneyTable td').remove();
            console.log(leaveLtcList);
            $(function() {
        	    $.each(leaveLtcList, function (index) {
        	    
        		var leave = leaveLtcList[index]
        		
        	    	
        		console.log(leave);
                var $tr = $('<tr>').append(
                    
                    $('<td>').text(leave.departureDate),
                    $('<td>').text(leave.departurePlace),
                    $('<td>').text(leave.arrivalPlace),
                    $('<td>').text(leave.arrivalDate),
                    $('<td>').text(leave.distance),
                    $('<td>').text(leave.modeOfTravel),
                    $('<td>').text(leave.noOfFare),
                    $('<td>').text(leave.farePaid),
                    $('<td>').text(leave.remarks),
                    
                   
                    
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='View' onclick=viewFormPopulate('"+leave.id+"')><i class='fa fa-eye'></i></a>"), 
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='Edit' onclick=editLtcDetailOfJOurneyPopulate('"+leave.id+"')><i class='fa fa-pencil' aria-hidden='true'></i></a>"),
 $('<td>').html("<a href='#' onclick=openalert('"+leave.id+"')><i class='fa fa-trash'></i></a>")
                   ).appendTo('#applicationDetailsOfJourneyTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}



function populateLtcAccomodation() {
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/getAllLtcAccomodation",
        type: "get",
        success: function(data){
        	
            var leaveLtcList = data.payload;
            $('#applicationAccomodationTable td').remove();
            console.log(leaveLtcList);
            $(function() {
        	    $.each(leaveLtcList, function (index) {
        	    
        		var leave = leaveLtcList[index]
        		
        	    	
        		console.log(leave);
                var $tr = $('<tr>').append(
                 
                		
                    $('<td>').text(leave.placeFrom),
                    $('<td>').text(leave.placeTo),
                    $('<td>').text(leave.mode),
                    $('<td>').text(leave.classEntitled),
                    $('<td>').text(leave.classbywhichactuallytravelled),
                    $('<td>').text(leave.noOfFares),
                    $('<td>').text(leave.fairPaid),
                     
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='View' onclick=viewFormPopulate('"+leave.id+"')><i class='fa fa-eye'></i></a>"), 
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='Edit' onclick=editLtcAccomodation('"+leave.id+"')><i class='fa fa-pencil' aria-hidden='true'></i></a>"),
 $('<td>').html("<a href='#' onclick=openalertForAccom('"+leave.id+"')><i class='fa fa-trash'></i></a>")
                   ).appendTo('#applicationAccomodationTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}


function populateLtcRoad() {
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/getAllLtcRoad",
        type: "get",
        success: function(data){
        	
            var leaveLtcList = data.payload;
            $('#applicationRoadTable td').remove();
            console.log(leaveLtcList);
            $(function() {
        	    $.each(leaveLtcList, function (index) {
        	    
        		var leave = leaveLtcList[index]
        	    	
        		console.log(leave);
                var $tr = $('<tr>').append(
                    $('<td>').text(leave.nameFrom),
                    $('<td>').text(leave.nameTo),
                    $('<td>').text(leave.railFare),
                   
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='View' onclick=viewFormPopulate('"+leave.id+"')><i class='fa fa-eye'></i></a>"), 
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='Edit' onclick=editLtcRoad('"+leave.id+"')><i class='fa fa-pencil' aria-hidden='true'></i></a>"),
 $('<td>').html("<a href='#' onclick=openalertForRoad('"+leave.id+"')><i class='fa fa-trash'></i></a>")
                   ).appendTo('#applicationRoadTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}

function populateLtcBill() {
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/getAllLtcBill",
        type: "get",
        success: function(data){
        	
            var leaveLtcList = data.payload;
            $('#applicationBillTable td').remove();
            console.log(leaveLtcList);
            $(function() {
        	    $.each(leaveLtcList, function (index) {
        	    
        		var leave = leaveLtcList[index]
        	    	
        		console.log(leave);
                var $tr = $('<tr>').append(
                    $('<td>').text(leave.filename),
                   
                   
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='View' onclick=viewFormPopulate('"+leave.id+"')><i class='fa fa-eye'></i></a>"), 
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='Edit' onclick=editLtcRoad('"+leave.id+"')><i class='fa fa-pencil' aria-hidden='true'></i></a>"),
 $('<td>').html("<a href='#' onclick=openalertForRoad('"+leave.id+"')><i class='fa fa-trash'></i></a>")
                   ).appendTo('#applicationRoadTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}




/*function dateFormated(timeInMillis){
    var date = new Date(timeInMillis);
	var formatedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' +  date.getFullYear();	
	return formatedDate;	
 }
*/

function editFormPopulate(erId){
	
    $.ajax({
        url: "/eASI/hrms/claim/getLeaveLtcById/" + erId,
        type: "get",
        contentType: "application/json",
        success: function(data){
        	
            console.log("success");
	   		$("#saveButton").hide();
			$("#editButton").show();
           // populateLeaveExtensionLtcTable();
            var leave = data.payload;
            
            $('#srNo').val(leave.id);
            $('#name').val(leave.name);
    		$('#age').val(leave.age);
            $('#relationship').val(leave.relationship);
           
            
           },
           error: function(xhr, status, error) {
           	  
           }
    });
}

function editLtcDetailOfJOurneyPopulate(erId){
	
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/getLeaveLtcDetailsOfJourneyById/" + erId,
        type: "get",
        contentType: "application/json",
        success: function(data){
        	
            console.log("success");
	   		$("#saveButton").hide();
			$("#editButton").show();
            populateLtcDetailsOfJourneyTable();
            var leave = data.payload;
         
   	        $('#datepicker3').val(leave.departureDate);
            $('#departurePlace').val(leave.departurePlace);
    		$('#arrivalPlace').val(leave.arrivalPlace);
            $('#datepicker4').val(leave.arrivalDate);
            
            $('#distance').val(leave.distance);
            $('#modeOfTravel').val(leave.modeOfTravel);
    		$('#noOfFare').val(leave.noOfFare);
    		$('#farePaid').val(leave.farePaid); 		
       		
            $('#remarks').val(leave.remarks);
              
           },
           error: function(xhr, status, error) {
           	  
           }
    });
}

function editLtcAccomodation(erId){
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/getLeaveAccomodationById/" + erId,
        type: "get",
        contentType: "application/json",
        success: function(data){
        	
            console.log("success");
	   		$("#saveButton1").hide();
			$("#editButton1").show();
			populateLtcRoad();
            var leave = data.payload;
         
            $('#roadId').val(leave.id);
   	        $('#placeFrom').val(leave.placeFrom);
            $('#placeTo').val(leave.placeTo);
    		$('#mode').val(leave.mode);
            $('#classEntitled').val(leave.classEntitled);
            
            $('#classbywhichactuallytravelled').val(leave.classbywhichactuallytravelled);
            $('#noOfFares').val(leave.noOfFares);
    		$('#fairPaid').val(leave.fairPaid);
              
           },
           error: function(xhr, status, error) {
           	  
           }
    });
}

function editLtcRoad(erId){
	
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/getLeaveRoadById/" + erId,
        type: "get",
        contentType: "application/json",
        success: function(data){
        	
            console.log("success");
	   		$("#saveButton2").hide();
			$("#editButton2").show();
			populateLtcRoad();
            var leave = data.payload;
         
            $('#roadId').val(leave.id);
   	        $('#nameFrom').val(leave.nameFrom);
            $('#nameTo').val(leave.nameTo);
    		$('#railFare').val(leave.railFare);
          
              
           },
           error: function(xhr, status, error) {
           	  
           }
    });
}





function viewFormPopulate(erId){
	
    $.ajax({
        url: "/eASI/hrms/claim/getLeaveLtcById/" + erId,
        type: "get",
        contentType: "application/json",
        success: function(data){
        	
            console.log("success");
	   		
           // populateLeaveExtensionLtcTable();
            var leave = data.payload;
            
            $('#srNo').val(leave.id);
            $('#name').val(leave.name);
    		$('#age').val(leave.age);
            $('#relationship').val(leave.relationship);
           
            $( "#srNo" ).prop( "disabled", true );
			$( "#name" ).prop( "disabled", true );
			$( "#age" ).prop( "disabled", true );
			$( "#relationship" ).prop( "disabled", true );
            
           },
           error: function(xhr, status, error) {
           	  
           }
    });
}

function deleteLeaveLtcById(erId) { 
	    $.ajax({
	        url: "/eASI/hrms/claim/deleteLeaveLtcById/" + erId,
	        type: "delete",
	        contentType: "application/json",
	        success: function(data){
	            console.log("success");
		   		/*$("#saveButton").show();
				$("#editButton").hide();
				$('#relationForm')[0].reset();*/
	            populateLeaveExtensionLtcTable();
	           },
	           error: function(xhr, status, error) {
	           }
	    });
	
	}


function deleteLeaveLtcOfDetailsJourneyById(erId) { 
    $.ajax({
        url: "/eASI/hrms/leaveLtc/deleteLeaveLtcDetailsJourneyById/" + erId,
        type: "delete",
        contentType: "application/json",
        success: function(data){
            console.log("success");
	   		/*$("#saveButton").show();
			$("#editButton").hide();
			$('#relationForm')[0].reset();*/
            populateLtcDetailsOfJourneyTable();
           },
           error: function(xhr, status, error) {
           }
    });

}

function deleteWhomLtcProposed(erId) { 
	
    $.ajax({
        url: "/eASI/hrms/claim/deleteLeaveLtcById/" + erId,
        type: "delete",
        contentType: "application/json",
        success: function(data){
            console.log("success");
	   		/*$("#saveButton").show();
			$("#editButton").hide();
			$('#relationForm')[0].reset();*/
            populateLeaveExtensionLtcTable();
           },
           error: function(xhr, status, error) {
           }
    });

}



function deleteLeaveLtcForAccomodationById(erId) { 
    $.ajax({
        url: "/eASI/hrms/leaveLtc/deleteLeaveLtcForAccomodationById/" + erId,
        type: "delete",
        contentType: "application/json",
        success: function(data){
            console.log("success");
	   		/*$("#saveButton").show();
			$("#editButton").hide();
			$('#relationForm')[0].reset();*/
            populateLtcAccomodation();
           },
           error: function(xhr, status, error) {
           }
    });

}

function deleteLeaveLtcForRoadById(erId) { 
    $.ajax({
        url: "/eASI/hrms/leaveLtc/deleteLeaveLtcForRoadById/" + erId,
        type: "delete",
        contentType: "application/json",
        success: function(data){
            console.log("success");
	   		/*$("#saveButton").show();
			$("#editButton").hide();
			$('#relationForm')[0].reset();*/
            populateLtcRoad();
           
           },
           error: function(xhr, status, error) {
           }
    });

}



function openalert(id) {
	
	
	BootstrapDialog.confirm({
        title: 'Delete Confirm ? ',
        message: 'Are you sure to delete ?',
        closable: true, 
        draggable: true,
        type: BootstrapDialog.TYPE_PRIMARY,
        btnCancelLabel: 'No',
        btnOKLabel: 'Yes',
        btnOKClass: 'btn-danger',
        callback: function(result) {           
            if(result){ 
            	deleteLeaveLtcOfDetailsJourneyById(id) }             
        }
    });	

}
function openalertForwhomLtc(id) {
	
	
	BootstrapDialog.confirm({
        title: 'Delete Confirm ? ',
        message: 'Are you sure to delete ?',
        closable: true, 
        draggable: true,
        type: BootstrapDialog.TYPE_PRIMARY,
        btnCancelLabel: 'No',
        btnOKLabel: 'Yes',
        btnOKClass: 'btn-danger',
        callback: function(result) {           
            if(result){ 
            	deleteWhomLtcProposed(id) }             
        }
    });	

}




function openalertForAccom(id) {
	
	
	BootstrapDialog.confirm({
        title: 'Delete Confirm ? ',
        message: 'Are you sure to delete ?',
        closable: true, 
        draggable: true,
        type: BootstrapDialog.TYPE_PRIMARY,
        btnCancelLabel: 'No',
        btnOKLabel: 'Yes',
        btnOKClass: 'btn-danger',
        callback: function(result) {           
            if(result){ 
            	deleteLeaveLtcForAccomodationById(id) }             
        }
    });	

}

function openalertForRoad(id) {
	
	
	
	BootstrapDialog.confirm({
        title: 'Delete Confirm ? ',
        message: 'Are you sure to delete ?',
        closable: true, 
        draggable: true,
        type: BootstrapDialog.TYPE_PRIMARY,
        btnCancelLabel: 'No',
        btnOKLabel: 'Yes',
        btnOKClass: 'btn-danger',
        callback: function(result) {           
            if(result){ 
            	deleteLeaveLtcForRoadById(id) }             
        }
    });	

}



function populateLeaveTable() {
	
	
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/getAllLeaveLTCpermission",
        type: "get",
        success: function(data){
            var leaveList = data.payload;
                        
            $('#pageLeaveTable td').remove();
            console.log(leaveList);
            $(function() {
        	    $.each(leaveList, function (index) {
        		var leave = leaveList[index]
        		var count=index+1;
        		
        		leave.sNo=count;
        		console.log(leave);
                var $tr = $('<tr>').append(
                	$('<td>').text(leave.sNo),
                    $('<td>').text(leave.name),
                    $('<td>').text(leave.age),
                    
                    $('<td>').text(leave.relationship),
                    
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='View'><i class='fa fa-eye'></i></a>"), 
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='Edit' onclick=editFormPopulate('"+leave.id+"')><i class='fa fa-pencil' aria-hidden='true'></i></a>"),
 $('<td>').html("<a href='#' onclick=openalertForFamily('"+leave.id+"')><i class='fa fa-trash'></i></a>")
                   ).appendTo('#pageLeaveTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}



function saveLeave() {	
	
  
    $.ajax({
        url: "/eASI/hrms/leaveLtc/add",
        type: "post",
        data: leaveJsonOnAdd(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
            $("input[type=text]").val("");
            
	   		$("#saveButton4").show();
			$("#editButton4").hide();
            populateLeaveTable();
        },
        error: function(xhr, status, error) {
        	  
        	}
    });
 
}


function leaveJsonOnAdd() {
	
	var json = JSON.stringify({
        "name": $('#name').val(),
        "age": $('#age').val(),
        "relationship": $('#relationship').val(),
        
    });
	

	return json;
}

function editleave() {	
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/editParticularLTC",
        type: "put",
        data: leaveJsonOnEdit(),
        contentType: "application/json",
        success: function (data) {
            console.log("success");
           // $('#leaveForm')[0].reset();
	   		$("#saveButton4").hide();
			$("#editButton4").show();
			populateLeaveTable();
        },
        error: function(xhr, status, error) {
        	}
    });
  
}

function leaveJsonOnEdit() {
	
	var json = JSON.stringify({
		
		"id": $('#familyId').val(),
        "name": $('#name').val(),
        "age": $('#age').val(),
        "relationship": $('#relationship').val(),
        
    });
	
	return json;
}


function editFormPopulate(eduId){	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/getAllLeaveLTCpermissionById/" + eduId,
        type: "get",
        contentType: "application/json",
        success: function(data){
            console.log("success");
	   		$("#saveButton4").hide();
			$("#editButton4").show();
			populateLeaveTable();
            var leave = data.payload;
            
            $('#familyId').val(leave.id);
            $('#name').val(leave.name);
            $('#age').val(leave.age);
            $('#relationship').val(leave.relationship);
          
            
           },
           error: function(xhr, status, error) {
           }
    });
}


function openalertForFamily(id) {
	
	BootstrapDialog.confirm({
        title: 'Delete Confirm ? ',
        message: 'Are you sure to delete ?',
        closable: true, 
        draggable: true,
        type: BootstrapDialog.TYPE_PRIMARY,
        btnCancelLabel: 'No',
        btnOKLabel: 'Yes',
        btnOKClass: 'btn-danger',
        callback: function(result) {           
            if(result){ 
            	deleteLeavePermissionByEduId(id) }             
        }
    });	

}

function deleteLeavePermissionByEduId(eduId) { 
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/deleteLeavePermissionByEduId/" + eduId,
        type: "delete",
        contentType: "application/json",
        success: function(data){
            console.log("success");
	   		$("#saveButton4").show();
			$("#editButton4").hide();
			//$('#educationForm')[0].reset();
			populateLeaveTable();
           },
           error: function(xhr, status, error) {
           }
    });

}
