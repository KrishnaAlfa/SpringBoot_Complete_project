
function addMoreForRequestCancel() {
	
	
var counts =$("#counterRequestCancel").val();
	
	$('#addRow2').append('<tr id="trow'+counts+'"<tr>'+ 
			'<td><div class="calendar"><input name="sin['+counts+'].fromDate" id="datepicker2'+counts+'" class="datepicker" required="required" placeholder="" type="text"> <i class="fa fa-calendar" aria-hidden="true"></i></div></td>'+
					
					'<td><div class="select-one"><select name="sin['+counts+'].fromDay" id ="fromDay'+counts+'""><option value="">-Select-</option><option value="Full Day">Full Day</option><option value="1st half">1st half </option><option value="2nd half">2nd half </option></select></div></td>'+
					
					'<td><div class="calendar"><input name="sin['+counts+'].toDate" id="datepicker3'+counts+'" class="datepicker" required="required" placeholder="" type="text"><i class="fa fa-calendar" aria-hidden="true"></i></div></td>'+
					'<td><div class="select-one"><select name="sin['+counts+'].toDay" id ="toDay'+counts+'""><option value="">-Select-</option><option value="Full Day">Full Day</option><option value="1st half">1st half </option><option value="2nd half">2nd half </option></select></div></td>'+
					'<td><div class="select-one"><select name="sin['+counts+'].leaveType" id ="leaveType'+counts+'""><option value="">-Select-</option><option value="EL">EL</option><option value="CL">CL</option><option value="HPL">HPL</option><option value="Leave Note Due">Leave Note Due</option><option value="Commited leave/Medical Leave">Commited leave/Medical Leave</option><option value="Study Leave">Study Leave</option><option value="Maternity Leave">Maternity Leave</option><option value="Extraordinary Leave">Extraordinary Leave</option><option value="Paternity Leave">Paternity Leave</option><option value="Paternity Child Adoption leave">Paternity Child Adoption leave</option><option value="Child Adoption">Child Adoption</option><option value="Child Care Leave">Child Care Leave</option><option value="Special disability">Special disability</option><option value="Hospital Leave">Hospital Leave</option></select></div></td>'+

					'<td><i class="fa fa-remove" style="float: right;" title="Delete" onclick="deleteDiv(trow'+counts+')"></i></td>'+
				'</tr>');
	$("#counterRequestCancel").val(++counts);
	
	
	 $( "#datepicker22" ).datepicker();
	    $( "#datepicker23" ).datepicker();
	    $( "#datepicker24" ).datepicker();
		 $( "#datepicker25" ).datepicker();
		 $( "#datepicker26" ).datepicker();
		    $( "#datepicker27" ).datepicker();
		    $( "#datepicker28" ).datepicker();
			 $( "#datepicker29" ).datepicker();
			 $( "#datepicker32" ).datepicker();
			    $( "#datepicker33" ).datepicker();
			    $( "#datepicker34" ).datepicker();
				 $( "#datepicker35" ).datepicker();
				 $( "#datepicker36" ).datepicker();
				    $( "#datepicker37" ).datepicker();
				    $( "#datepicker38" ).datepicker();
					 $( "#datepicker39" ).datepicker();
	
}
function deleteDiv(divId)
{
	$(divId).remove();
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

function editKindlyLeave(erId){
	
    $.ajax({
        url: "/eASI/hrms/requestCancel/getKindlyLeaveById/" + erId,
        type: "get",
        contentType: "application/json",
        success: function(data){
        	
            console.log("success");
	   		
            var leave = data.payload;
            
            
            $('#datepicker3').val(leave.fromDate);
            $('#fromDay').val(leave.fromDay);
    		$('#datepicker4').val(leave.toDate);
            $('#toDay').val(leave.toDay);
            $('#leaveType').val(leave.leaveType);
           
            
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
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='View' onclick=editKindlyLeave('"+leave.id+"')><i class='fa fa-eye'></i></a>"), 
 $('<td>').html("<a href='#' onclick=openalert('"+leave.id+"')><i class='fa fa-trash'></i></a>")
                   ).appendTo('#applicationKindlyEnterLeaveTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}



function deleteKindlyEnterLeaveBasedOnById(erId) { 
	//leaveid=$('#leaveid').val();
	
    $.ajax({
        url: "/eASI/hrms/requestCancel/deleteKindlyEnterLeaveBasedOnId/" + erId,
        type: "delete",
        contentType: "application/json",
        success: function(data){
            console.log("success");
	   		/*$("#saveButton").show();
			$("#editButton").hide();
			$('#relationForm')[0].reset();*/
            populateKindlyEnterLeaveTable();
           },
           error: function(xhr, status, error) {
           }
    });

}

function openalertForNatureOfPeriod(id) {
	
	
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
                    $('<td>').text(leave.leaveType),
 $('<td>').html("<a href='#' class='tooltip-top' data-tooltip='View' onclick=editnatureperiodOflevae('"+leave.id+"')><i class='fa fa-eye'></i></a>"), 
 $('<td>').html("<a href='#' onclick=openalert('"+leave.id+"')><i class='fa fa-trash'></i></a>")
                   ).appendTo('#applicationLeaveNatureOfPeriodTable');
                
            });
        });
        },
        error: function(xhr, status, error) {
      	}
    });
}

function deleteNatureOfPeriodBasedOnById(erId) { 
	
	
    $.ajax({
        url: "/eASI/hrms/deleteNatureOfPeriodId/" + erId,
        type: "delete",
        contentType: "application/json",
        success: function(data){
            console.log("success");
	   		
            populateLeaveNatureOfPeriodTable(leaveid);
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
            	deleteKindlyEnterLeaveBasedOnById(id) }             
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


