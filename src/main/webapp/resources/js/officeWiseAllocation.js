var header = $("meta[name='_csrf_header']").attr("content");
var token = $("meta[name='_csrf']").attr("content");

function countRemainAmount(){
	var counter = $("#counter").val();
	var amount = $("#remainAmount").val();
	console.log(amount);
	
	for(var i = 1; i<counter ;i++ ){
		var totalVotedAmountList =(+$('#totalVotedAmountList'+i).val() || 0);
		var  totalChargedAmountList = (+$('#totalChargedAmountList'+i).val() || 0);
		var objId= $('#objectHead'+i).val();
		var objAmount = (+$("#"+objId).val()|| 0);
		
		calculateAmountObjectHeadWise(objId);
	}
}
function calculateAmountObjectHeadWise(objId){
	var counter = $("#counter").val();
	var amount= (+$("#"+objId).val()|| 0);
	//var remainInOffice = $("#remainInOffice").val();
	var remainInOffice =(+$("#office"+objId).val()|| 0);
	for(var i = 1; i<counter ;i++ ){
		var totalVotedAmountList =(+$('#totalVotedAmountList'+i).val() || 0);
		var  totalChargedAmountList = (+$('#totalChargedAmountList'+i).val() || 0);
		//alert($('#objectHead'+i).val() +"-"+ objId );
		if( $('#objectHead'+i).val()== objId){
			amount= amount - (totalVotedAmountList + totalChargedAmountList);
			$("#remainAmount"+i).text(amount - remainInOffice );	
			$("#remainAmountOHWA").val(amount - remainInOffice );
			$("#remainAmountOfficeAllocation"+i).val(amount - remainInOffice );
		}
	}
}
function submitOfficeWiseAllocation(fromId,type){	

	if (type == 'draft') {
		$("#submitType").val("draft");
	} else if (type == 'submitted') {
		$("#submitType").val("submitted");
	}	
	
	var count= $("#counter").val();
	for(var i=1;i<count; i++){
		console.log($("#remainAmount"+i).text());
		if($("#remainAmount"+i).text()<0){
			$("#printMessage").html("");
			$("#printMessage").append('<div class="alert alert-danger alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Please Enter Proper Amount.</strong></div>');
			document.body.scrollTop = 0;
			return ;
		}
	}

	$("#" + fromId).submit();
}

function updateOfficeWiseAllocation(fromId,type){	
	if (type == 'draft') {
		$("#submitType").val("draft");
	} else if (type == 'submitted') {
		$("#submitType").val("submitted");
	}		var pageContextPath = $("#pageContextPath").val();
	var count= $("#counter").val();
	for(var i=1;i<count; i++){
		console.log($("#remainAmount"+i).text());
		if($("#remainAmount"+i).text()<0){
			$("#printMessage").html("");
			$("#printMessage").append('<div class="alert alert-danger alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Please Enter Proper Amount.</strong></div>');
			document.body.scrollTop = 0;
			return ;
		}
	}
	$("#" + fromId).prop("action",pageContextPath+"/budget/updateOfficeWiseAllocationMap");
	$("#" + fromId).submit();
}

function getSubMajorHead(majorId) {
	var pageContextPath = $("#pageContextPath").val();
	$.ajax({
		type : 'GET',
		url : pageContextPath+"/budget/getSubMajorHeadByMajorId-"+majorId,
		success : function(data) {
			var option = "";
			$('#manageSubMajorHead').empty();
			option = option+"<option value='0' selected='selected'>--Select--</option>";
			for (var i = 0; i < data.length; i++) {
				option = option + "<option value='"+data[i][0] + "'>" + data[i][1] + " - " + data[i][2] + "</option>";
			}
			$('#manageSubMajorHead').append(option);
		},
		error : function() {
			alert("error while getting sub major head");
		}
	});
}

function getMinorHead(subMajorId) {
	var pageContextPath = $("#pageContextPath").val();
	$.ajax({
		type : 'GET',
		url : pageContextPath+"/budget/getMinorHeadBySubMajorId-"+subMajorId,
		success : function(data) {
			var option = "";
			$('#manageMinorHead').empty();
			option = option+"<option value='0' selected='selected'>--Select--</option>";
			for (var i = 0; i < data.length; i++) {
				option = option + "<option value='"+data[i][0] + "'>" + data[i][1] + " - " + data[i][2] + "</option>";
			}
			$('#manageMinorHead').append(option);
		},
		error : function() {
			alert("error while getting minor head");
		}
	});
}

function getSubHead(minorHeadId) {
	var pageContextPath = $("#pageContextPath").val();
	$.ajax({
		type : 'GET',
		url : pageContextPath+"/budget/getSubHeadByMinorHeadId-"+minorHeadId,
		success : function(data) {
			var option = "";
			$('#subHead').empty();
			option = option+"<option value='0' selected='selected'>--Select--</option>";
			for (var i = 0; i < data.length; i++) {
				option = option + "<option value='"+data[i][0] + "'>" + data[i][1] + " - " + data[i][2] + "</option>";
			}
			$('#subHead').append(option);
		},
		error : function() {
			alert("error while getting sub head");
		}
	});
}

function getDetailHead(subHeadId) {
	var pageContextPath = $("#pageContextPath").val();
	$.ajax({
		type : 'GET',
		url : pageContextPath+"/budget/getDetailHeadBySubHeadId-"+subHeadId,
		success : function(data) {
			var option = "";
			$('#detailedHead').empty();
			option = option+"<option value='0' selected='selected'>--Select--</option>";
			for (var i = 0; i < data.length; i++) {
				option = option + "<option value='"+data[i][0] + "'>" + data[i][1] + " - " + data[i][2] + "</option>";
			}
			$('#detailedHead').append(option);
		},
		error : function() {
			alert("error while getting detail head");
		}
	});
}

function getObjectHead(){

	var dataString = 'manageMajorHead.id='+ (+$('#manageMajorHead').val() || 0) 
					+ '&manageSubMajorHead.id=' + (+$('#manageSubMajorHead').val() || 0)
					+ '&manageMinorHead.id=' + (+$('#manageMinorHead').val() || 0)
					+ '&subHead.id=' + (+$('#subHead').val() || 0)
					+ '&detailHead.id=' + (+$('#detailedHead').val() || 0);
	
	var pageContextPath = $("#pageContextPath").val();
	
	$.ajax({
		type : 'POST',
		url : pageContextPath+"/budget/getObjectByAllHeader",
		data: dataString,
		/*beforeSend: function(xhr) {
			xhr.setRequestHeader(header, token);
			},*/
		success : function(data) {
			var option = "";
			$('#objectHead').empty();
			option = option+"<option value='0' disabled>--Select--</option>";
			 for (var key in data) {
				    if (data.hasOwnProperty(key)) {
				    	option += '<option value="' + key + '">' + data[key] + '</option>';
				    }
				}
			$('#objectHead').append(option);
		},
		error : function() {
			alert("error while getting detail head");
		}
	});
}
function add(count){
	if((+$("#additionalGrant1_"+count).val()|| 0) == 0){
		$("#additionalGrant1_"+count).removeAttr("readonly");
		$("#additionalGrant1_"+count).focus();
	}else if((+$("#additionalGrant2_"+count).val()|| 0) == 0){
		$("#additionalGrant2_"+count).removeAttr("readonly");
		$("#additionalGrant2_"+count).focus();
	}else if((+$("#additionalGrant3_"+count).val()|| 0) == 0){
		$("#additionalGrant3_"+count).removeAttr("readonly");
		$("#additionalGrant3_"+count).focus();
	}
	$('#addBtn'+count).hide();
}

function cancelOfficeWiseAllocationMapForm(){
	var pageContextPath = $("#pageContextPath").val();
	location.href = pageContextPath+"/budget/officeWiseAllocation";
}
function validRevenuePlanAmount(id,objId, amount) {
	
	var counter = $("#counter").val();
	var allocatedAmount = parseFloat(($("#revenueobjHead"+objId).val()|| 0));
	var amt= (+$("#objHeadRevenue"+objId).val()|| 0);
	var expenditureAmount = $("#expenditureAmount"+id).val();
	var sumOfExpenditureAmount = $("#sumOfExpenditureAmount"+id).val();
	
	$("#errorRevenue"+id).html("");
	var totalVotedAmountList = 0 ;
	for(var i = 1; i<counter ;i++ ){
		$("#errorRevenue"+i).html("");
		$("#errorCapital"+i).html("");
		if(i != id){
			if( $('#objectHead'+i).val()== ("objHead"+objId)){
				totalVotedAmountList = totalVotedAmountList + (+$('#totalVotedAmountList'+i).val() || 0);
			}
		}
		
	}
	
	if((amt - allocatedAmount - totalVotedAmountList) < amount) {
		$("#errorRevenue"+id).html("Amount must be same or less than "+(amt - allocatedAmount - totalVotedAmountList)+" (Rs.)");
		$("#totalVotedAmountList"+id).val("0");
	}/*else if(amount < expenditureAmount && amount != 0) {
		$("#errorRevenue"+id).html("Amount must be same or greater than "+(expenditureAmount)+" (Rs.)");
		$("#totalVotedAmountList"+id).val("0");
	}else if(amount < sumOfExpenditureAmount && amount != 0) {
		$("#errorRevenue"+id).html("Amount must be same or greater than "+(sumOfExpenditureAmount)+" (Rs.)");
		$("#totalVotedAmountList"+id).val("0");
	}*/
}
function validCapitalPlanAmount(id,objId, amount) {
	var counter = $("#counter").val();
	var allocatedAmount = parseFloat(($("#capitalbjHead"+objId).val()|| 0));
	var amt= (+$("#objHeadCapital"+objId).val()|| 0);
	$("#errorCapital"+id).html("");
	var  totalChargedAmountList = 0;
	for(var i = 1; i<counter ;i++ ){
		$("#errorCapital"+i).html("");
		$("#errorRevenue"+i).html("");
		if(i != id){
			if( $('#objectHead'+i).val()== ("objHead"+objId)){
				  totalChargedAmountList = totalChargedAmountList + (+$('#totalChargedAmountList'+i).val() || 0);
			}
		}
		
	}
	
	if((amt - allocatedAmount - totalChargedAmountList) < amount) {
		$("#errorCapital"+id).html("Amount must be same or less than "+(amt - allocatedAmount - totalChargedAmountList)+" (Rs.)");
		$("#totalChargedAmountList"+id).val("0");
	}
}
