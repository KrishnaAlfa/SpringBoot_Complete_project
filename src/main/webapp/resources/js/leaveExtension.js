
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


            /* $("#reset")
			.click(
					function() {
						alert("============")
						$("#gender")[0].selectedIndex = 0;
						$("#title")[0].selectedIndex = 0;
						$("#maritialStatus")[0].selectedIndex = 0;
						$("#region")[0].selectedIndex = 0;
						$("#category")[0].selectedIndex = 0;
						$("#physical")[0].selectedIndex = 0;
					

					});*/

 function resetButton()
 {
  $("#grounLeave").val("");
  $("#houseRent").val("");
  $("#datepicker1").val("");
  $("#datepicker2").val("");
  $("#datepicker5").val("");
  $("#addressDurinLeavePeriod").val("");
  $("#contactDetailsDuringLeavePeriod").val("");
  $("#checkId").prop("checked", false);
  
  $('#tableId tbody').empty();
 }
 
 function resetEditLeave()
 {

  $("#grounLeave").val("");
  $("#houseRent").val("");
  $("#datepicker10").val("");
  $("#datepicker20").val("");
  $("#datepicker5").val("");
  $("#addressDurinLeavePeriod").val("");
  $("#contactDetailsDuringLeavePeriod").val("");
 
  
  
 }
 
 

function addMore() {
	var counts =$("#counter1").val();
	var srCount=parseInt(counts)+1;
	var leaveMaster = $("#leaveMasterData").val();
	var result = leaveMaster.substring(1, leaveMaster.length-1);
	var leaveMasterData=result.split(",");
	var option = "";
	for(var i=0;i<leaveMasterData.length;i++)
	{
		option = option	+ "<option value='"+leaveMasterData[i].trim()+"'>"+leaveMasterData[i]+"</option>"
	}
	$('#addRow1').append('<tr id="trow'+counts+'"<tr>'+ 
					'<td>'+srCount+'</td>'+
					'<td><div class="calendar"><input name="sin['+counts+'].fromDate" id="datepicker2'+counts+'" class="datepicker" onchange="setDateValidation(\'datepicker-2'+counts+'\')" required="required" placeholder="From Date" type="text"> <i class="fa fa-calendar" aria-hidden="true"></i></div></td>'+
					'<td><div class="select-one"><select name="sin['+counts+'].fromDay" id ="fromDateLeaveType'+counts+'"" required="required" ><option value="">-Select-</option><option value="Full Day">Full Day</option><option value="1st half">1st half </option><option value="2nd half">2nd half </option></select></div></td>'+
					'<td><div class="calendar"><input name="sin['+counts+'].toDate" id="datepicker3'+counts+'" class="datepicker" required="required" placeholder="To Date" type="text"><i class="fa fa-calendar" aria-hidden="true"></i></div></td>'+
					'<td><div class="select-one"><select name="sin['+counts+'].toDay" id ="toDateLeaveType'+counts+'"" required="required"><option value="">-Select-</option><option value="Full Day">Full Day</option><option value="1st half">1st half </option><option value="2nd half">2nd half </option></select></div></td>'+
					'<td><div class="select-one"><select name="sin['+counts+'].leaveType" id ="leaveType'+counts+'"" required="required" onchange="myFunctionLeave1(trow'+counts+','+counts+')"> <option value="">-Select-</option>  '+option+'</select>  </div></td>'+
					'<td><i class="fa fa-remove" style="float: right;" title="Delete" onclick="deleteDiv(trow'+counts+')"></i></td>'+
				'</tr>');
	$( "#datepicker2"+counts).datepicker();
	$( "#datepicker3"+counts).datepicker();
	
	$("#counter1").val(++counts);
}


function deleteDiv(divId)
{
	$(divId).remove();
	$('#addRow1 tr').each(function(index) {
			$(this).find('td').each(function(i) {
				if (i == 0) {
					$(this).text(index);
				}
				$("#counter1").val(parseInt(index));
			})
		});
}

function addMoreForEdit() {
	
	var Partners = $('#NaturesTable1 tr').length;
	
	$('#naturesOfTable').val(Partners-1);
		var counts = Partners-1;
		 var dt=counts+2;
	
		$('#NaturesTable1')
		.append(
				'<tr id="Naturesid'+[counts]+'id"><td style="width: 5%" hidden>'+[counts+1]+'</td><td style="width: 20%"><input type="text"  placeholder="From Date" id="datepicker1'+dt+'"  name="sin['+counts+'].fromDate" class="datepicker" required="required"/>'
						+ '<td style="width: 20%"><select name="sin['+ counts+ '].fromDay"  id="fromDateLeaveType'+ counts+ '"><option value="Full Day">Full Day</option><option value="1st half">1st half </option><option value="2nd half">2nd half </option></select>'+ '</td>'
						
						+ '<td style="width: 20%"><input type="text"  placeholder="To Date" id="datepicker2'+dt+'"  name="sin['+counts+'].toDate" class="datepicker" required="required"/>'

						+ '<td style="width: 20%"><select name="sin['+ counts+ '].toDay"  id="toDateLeaveType'+ counts+ '"><option value="Full Day">Full Day</option><option value="1st half">1st half </option><option value="2nd half">2nd half </option></select>'+ '</td>'

                        + '<td><div class="select-one"><select name="sin['+counts+'].leaveType" id ="leaveType'+counts+'""><option value="">-Select-</option><option value="EL">EL</option><option value="CL">CL</option><option value="HPL">HPL</option><option value="Leave Note Due">Leave Note Due</option><option value="Commited leave/Medical Leave">Commited leave/Medical Leave</option><option value="Study Leave">Study Leave</option><option value="Maternity Leave">Maternity Leave</option><option value="Extraordinary Leave">Extraordinary Leave</option><option value="Paternity Leave">Paternity Leave</option><option value="Paternity Child Adoption leave">Paternity Child Adoption leave</option><option value="Child Adoption">Child Adoption</option><option value="Child Care Leave">Child Care Leave</option><option value="Special disability">Special disability</option><option value="Hospital Leave">Hospital Leave</option></select></div>'+'</td>'
                        

						+' <td><input type="button" value="Delete" class="btn btn-info" id="id'+ [ counts ] + 'id" onclick="deleteRow1(' + counts+ ')"></td>'+

		'</tr>');
		
		$( "#datepicker11" ).datepicker();
	    $( "#datepicker12" ).datepicker();
	    $( "#datepicker13" ).datepicker();
		    $( "#datepicker14" ).datepicker();
			 $( "#datepicker15" ).datepicker();
			 $( "#datepicker16" ).datepicker();
			    $( "#datepicker17" ).datepicker();
			    $( "#datepicker18" ).datepicker();
				 $( "#datepicker19" ).datepicker();
				 
				 $( "#datepicker21" ).datepicker();
				 $( "#datepicker22" ).datepicker();
				    $( "#datepicker23" ).datepicker();
				    $( "#datepicker24" ).datepicker();
					 $( "#datepicker25" ).datepicker();
					 $( "#datepicker26" ).datepicker();
					    $( "#datepicker27" ).datepicker();
					    $( "#datepicker28" ).datepicker();
						 $( "#datepicker29" ).datepicker();
						 
		
	
}

function deleteRow1(j) {
	
	var i = $('#NaturesTable1 tr').length-2;
	jQuery(function($) {
		if (j == i) {
			$('#Naturesid' + [ j ] + 'id').remove();
		} else {
			alert("Remove Record End Of Table");
		}

	});
}
	


function saveNatureOfPeriod() {
	var id=  $('#leaveid').val();
    $.ajax({
        url: "/eASI/hrms/addNatureOfPeriod/" + id,
        type: "post",
        data: relationJsonNatuOfPeriodreOnAdd(),
        contentType: "application/json",
        success: function (data) {
        	
            console.log("success");
            //$('#applicationForLtcc')[0].reset();
            
	   		/*$("#saveButton").show(); 
			$("#editButton").hide();*/
	   		populateLeaveNatureOfPeriodTable(id);
        },
        error: function(xhr, status, error) {
        	}
    });
 }


function saveKindlyEnterLeave() {
	
    $.ajax({
        url: "/eASI/hrms/requestCancel/addKindlyEnterLeave",
        type: "post",
        data: relationJsonKindlyEnterLeavenAdd(),
        contentType: "application/json",
        success: function (data) {
        	
        	
            console.log("success");
            //$('#applicationForLtcc')[0].reset();
            
	   		/*$("#saveButton").show(); 
			$("#editButton").hide();*/
	   		populateKindlyEnterLeaveTable();
        },
        error: function(xhr, status, error) {
        	
        	}
    });
 }

function relationJsonNatuOfPeriodreOnAdd() {
	
	if($('#datepicker1').datepicker('getDate')!=null && $('#datepicker1').datepicker('getDate')!=undefined){
		var fromDate=$('#datepicker1').datepicker('getDate');
		
	}
		
		
	if($('#datepicker2').datepicker('getDate')!=null)
		var toDate=$('#datepicker2').datepicker('getDate')
		
		
	var json = JSON.stringify({
		 "fromDate": $('#datepicker1').datepicker('getDate'),
	     "fromDay": $('#fromDay').val(),
	     "toDay": $('#toDay').val(),
	     "toDate": $('#datepicker2').datepicker('getDate'),
	     "leaveType": $('#leaveType').val(),
	
    });
	
	
	return json;
}

function relationJsonKindlyEnterLeavenAdd() {
	
	/*if($('#datepicker1').datepicker('getDate')!=null && $('#datepicker1').datepicker('getDate')!=undefined){
		var fromDate=$('#datepicker1').datepicker('getDate');
		
	}
		
		
	if($('#datepicker2').datepicker('getDate')!=null)
		var toDate=$('#datepicker2').datepicker('getDate')*/
		
	var json = JSON.stringify({
		 "fromDate": $('#datepicker3').datepicker('getDate'),
	     "fromDay": $('#fromDay').val(),
	     "toDay": $('#toDay').val(),
	     "toDate": $('#datepicker4').datepicker('getDate'),
	     "leaveType": $('#leaveType').val(),
	
    });
	
	return json;
}

function editnatureperiodOflevae(erId){
	
    $.ajax({
        url: "/eASI/hrms/getNatureLeaveById/" + erId,
        type: "get",
        contentType: "application/json",
        success: function(data){
        	
            console.log("success");
	   		
            var leave = data.payload;
            
            $('#datepicker1').val(leave.fromDate);
            $('#fromDay').val(leave.fromDay);
    		$('#datepicker2').val(leave.toDate);
            $('#toDay').val(leave.toDay);
            $('#leaveType').val(leave.leaveType);
           
            
           },
           error: function(xhr, status, error) {
           	  
           }
    });
}
/*
 * Populating Relation in Table Format
 */
function populateLeaveNatureOfPeriodTable(id) {
	
    $.ajax({
        url: "/eASI/hrms/getAllLeaveNatureOfPeriod/" + id,
        type: "get",
        success: function(data){
        	
            var leavenatureList = data.payload;
            
            $('#applicationLeaveNatureOfPeriodTable td').remove();
            console.log(leavenatureList);
            $(function() {
        	    $.each(leavenatureList, function (index) {
        		var leave = leavenatureList[index]
        		
        		
        		console.log(leave);
                var $tr = $('<tr>').append(
                   
                	$('<td>').text(leave.fromDate),
                    $('<td>').text(leave.fromDay),
                    $('<td>').text(leave.toDate),
                    $('<td>').text(leave.toDay),
                    $('<td>').text(leave.leaveType)
 
                   ).appendTo('#applicationLeaveNatureOfPeriodTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}
function populateKindlyEnterLeaveTable() {
	
	
    $.ajax({
        url: "/eASI/hrms/requestCancel/getAllKindlyEnterLeave",
        type: "get",
        success: function(data){
        	
            var leavenatureList = data.payload;
            
            $('#applicationKindlyEnterLeaveTable td').remove();
            console.log(leavenatureList);
            $(function() {
        	    $.each(leavenatureList, function (index) {
        		var leave = leavenatureList[index]
        		
        		
        		console.log(leave);
                var $tr = $('<tr>').append(
                   
                	$('<td>').text(leave.fromDate),
                    $('<td>').text(leave.fromDay),
                    $('<td>').text(leave.toDate),
                    $('<td>').text(leave.toDay),
                    $('<td>').text(leave.leaveType),
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='View' onclick=editnatureperiodOflevae('"+leave.id+"')><i class='fa fa-eye'></i></a>"), 
 $('<td>').html("<a href='#' onclick=openalertForKindlyEnterLeave('"+leave.id+"')><i class='fa fa-trash'></i></a>")
                   ).appendTo('#applicationKindlyEnterLeaveTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
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

function saveDetailOfJourney() {
	
    $.ajax({
        url: "/eASI/hrms/leaveLtc/add1",
        type: "post",
        data: relationJsonOnAddForLtcDetailOfJourney(),
        contentType: "application/json",
        success: function (data) {
        	
            console.log("success");
          
            
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
	   		$("#saveButton").hide();
			$("#editButton").hide();
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
            	deleteNatureOfPeriodBasedOnById(id) }             
        }
    });	

}




function requestToCancel(id) {
	
	
	$.ajax({
        url: "/eASI/hrms/goToRequestCancel/" + id,
        type: "get",
        contentType: "application/json",
        success: function(data){
            console.log("success");
	   		
           },
           error: function(xhr, status, error) {
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

function deleteNatureOfPeriodBasedOnById(erId) { 
	leaveid=$('#leaveid').val();
	
    $.ajax({
        url: "/eASI/hrms/deleteNatureOfPeriodId/" + erId,
        type: "delete",
        contentType: "application/json",
        success: function(data){
            console.log("success");
	   		/*$("#saveButton").show();
			$("#editButton").hide();
			$('#relationForm')[0].reset();*/
            populateLeaveNatureOfPeriodTable(leaveid);
           },
           error: function(xhr, status, error) {
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

// for not select 2 EL leave type 
function myFunctionLeave1(divId,count,leaveTypeInfo){
	var elFlag=$("#elFlag").val();
	var elFlagValue1=$('#leaveType').val();
	var value = document.getElementById("leaveType"+count);
	var result = value.options[value.selectedIndex].value;
	/*alert( "result ********* "+result);*/

	var countFlagEL=$("#countFlagEL").val();
	if($("#countFlagEL").val() == count && result!='EL' ){
		$("#elFlag").val("0");
		$("#countFlagEL").val("");
	}
	
	if(elFlag=='0' && result!=null && result!='' && result=='EL')
	{	
		$("#elFlag").val("1");
		$("#countFlagEL").val(count);
	}
 	else {
		if (elFlag == '1' && result != null && result != '' && result == 'EL') {
			alert("Not allow EL Leave type again please select other!");
			document.getElementById('leaveType'+count).value=leaveTypeInfo;
			if (count == 0) {
				var res = $("#countFlagEL").val();
				var output = divId.substring(0, 4).concat(res) // trow + 3 ;
				deleteDiv('tr#' + output); // trow1 "trow1"			
			}
	
			else {
				deleteDiv(divId);
			     }
		}
		
		if(result == 'EL' && leaveTypeInfo =='EL'){
			document.getElementById('leaveType'+count).value='';
			alert("Not allow EL Leave type again please select other!");
		}
	}
}