
var counter = 1;
var del = 0;
var del1 = 0;
function formSubmit(){
var item = $("#item").val();
var unitid = $("#unitMasterID").val();
if (item == ""){
	alert("Item Mandatory field");
   }else if(unitid == ""){
	  alert("Unit Mandatory field");
   }else{
	var url = "saveWorkEstimateItemsRevised";
	$.ajax({
		type : "POST",
		url : url,
		data : $("#itemsInfoIdRevised").serialize(),
		cache : false,
		success : function(data) {
			addItemReset();
			$("#successdiv").show();
			$("#successdiv").hide(2500);
			getItemList(data.workId);
			//TODO for item id
		},
		error : function(request,error) {
			alert(error);
		}
	});
  }
}

function deleteSelected(){
	var chkArray = [];
	$(".chk:checked").each(function() {
		chkArray.push($(this).val());
	});
	var selected;
	selected = chkArray.join(',');
	
	if (selected.length < 1) {
		alert("Please select at least one checkbox");
		return false;
	}
	else{
		        var trueCheck = confirm("Please Confirm to delete the selected Items !");
		        if (trueCheck == true) {
		        	$("#listTable").empty();
		        	deleteData(selected);
		            return true;
		        }
	}
}


function deleteData(id){
	
	var url = "deleteItemsRevised";
	$.ajax({
		type : "GET",
		url : url,
		data : {
			id:id
		},
		cache : false,
		success : function(data) {
			getItemList(data.workId);
		},
		error : function(request,error) {
			alert(error);
		}
	});
}

function updateStatus(status){
	var chkArray = [];
	$(".chk:checked").each(function() {
		chkArray.push($(this).val());
	});
	var selected;
	selected = chkArray.join(',');
	
	if (selected.length < 1) {
		alert("Please select at least one checkbox");
		return false;
	}
	else{
		        var trueCheck = confirm("Please Confirm to change status !");
		        if (trueCheck == true) {
		        	updateItemStatus(selected,status);
		            return true;
		        }
	}
}

function updateItemStatus(id,status){
	var url = "updateItemStatus";
	$.ajax({
		type : "GET",
		url : url,
		data : {
			id:id,
			status:status
		},
		cache : false,
		success : function(data) {
			getItemList(data.workId);
		},
		error : function(request,error) {
			alert(error);
		}
	});
}
$(document).ready(function() {
	$('.nav-tabs li').removeClass('disabledTab');
	$(".basicinfoLink").click();
	var svhide = $("#svhide").val();
	 if(!$("#notOccuredInLast5years").is(":checked")){
		$("#reasonForReworkDiv").show();
	}
	if(svhide != ""){
		$("#basicInfoBtn").show();
		$(".condition").show();
	}else{
		$("#basicInfoBtn").show();
		$(".condition").show();
	}
	
	 var incpectionTrue = $("#incpectionTrue").val();
	 $("#incpectionTrue").val("");	 
	 //var reportTrue = $("#reportTrue").val();
	 //$("#reportTrue").val("");	 
	 
	$(".closeTag").click(function() {
		$("#successdiv").hide("slow");
	});
    $("#successdiv").hide("slow");
    $("#hide-div-btn").hide('slow');
	getAllUnitMaster();
	getItemList($('#globalWorkId').val());	
	$("#basicInfoBtn").click(function() {
		
		/* if (validator.form()) {
			 alert("jjyyykkk");
			 if(!$("#notOccuredInLast5years").is(":checked")){
				 if($("#reasonForAgainSubmission").val()==" "){
					 alert("Please enter Reason For Re-Work ");
					 return false;
				 }
			 }*/
			 
			$("#basicInfoRevision").submit(function(e) {
				
			e.preventDefault();
			var url = "saveRevisionWorkEstimate";
			$.ajax({
					type : "POST",
					url : url,
					data : new FormData(this),
					processData : false,
					contentType : false,
					cache : false,
					success : function(data) {
					if(data != null){
					    $("#successdiv").show();
					    $("#successdiv").hide(2500);
					    $("#basicInfoIDforUp").val(data);
					    window.location.href = data.url;
					}
					},beforeSend: function () {
						$("#commonLodder").show();
			        },
			        complete: function () {
			          /*  waitingDialog.hide();*/
			        	$("#commonLodder").hide();
			        },
					error : function(request,error) {
						$("#commonLodder").hide();
						alert("Something went wrong");
					}
					});
				});
			
	});
	
	var validator = $("#basicInfo").validate({
		rules : {
			text : "required",
			file : "required",
			Select : "required",
		},
		messages : {
			text : "Field not be empty",
			file : "Please Select File",
			Select : "Please Select",
		}
	});
	
	$("#rateAnalysisBtn").click(function() {
		if (!rcpCreated()) {
			alert("Please Save ACP Details First.");
			return false;
		} else {
		 if (validator3.form()) {
			var url = "saveWorkEstimateRateAnalysisRevised";
			$.ajax({
					type : "POST",
					url : url,
					data : $("#rateAnalysisData").serialize(),
					cache : false,
					success : function(data) {
						if(data != null){
							$("#LabourOrRate").val("");
							$("#titleRate").val("");
							$("#successdiv").show();
							$("#successdiv").hide(2500);
							getLabourRateAnalysisList($('#globalWorkId').val());
						}
					},beforeSend: function () {
						$("#commonLodder").show();
			        },
			        complete: function () {
			        	$("#commonLodder").hide();
			        },
					error : function(request,error) {
						$("#commonLodder").hide();
						alert("Something went wrong");
					}
					});
			}
	}
	});
	
	$("#dataAnalysisBtn").click(function() {
		 if (validator4.form()) {
			var url = "saveWorkEstimateDataAnalysis";
			$.ajax({
					type : "POST",
					url : url,
					data :$("#dataAnalysisData").serialize(),
					cache : false,
					success : function(data) {
						if(data != null){
							$("#successdiv").show();
							$("#successdiv").hide(2500);
						}
					},beforeSend: function () {
						$("#commonLodder").show();
			        },
			        complete: function () {
			        	$("#commonLodder").hide();
			        },
					error : function(request,error) {
						$("#commonLodder").hide();
						alert("Something went wrong");
					}
					});
			}
	});
	
	$("#inspectionBtn").click(function() {
		 if (validator5.form()) {
							var url = "saveWorkEstimateInspectionData";
							$
									.ajax({
										type : "POST",
										url : url,
										data : $('form[name=employeeForm]').serialize(),
										success : function(
												data) {
											if(data != null){
												$("#successdiv").show();
												$("#successdiv").hide(2500);
											}
										},beforeSend: function () {
											$("#commonLodder").show();
								        },
								        complete: function () {
								        	$("#commonLodder").hide();
								        },
										error : function(
												request,
												error) {
											$("#commonLodder").hide();
											alert(JSON
													.stringify(request));
										}
									});
			}
	});
	
	var validator2 = $("#measurementData").validate({
		rules : {
			text : "required",
			file : "required",
			Select : "required",
		},
		messages : {
			text : "Field not be empty",
			file : "Please Select File",
			Select : "Please Select",
		}
	});
	
	var validator3 = $("#rateAnalysisData").validate({
		rules : {
			text : "required",
			file : "required",
			Select : "required",
		},
		messages : {
			text : "Field not be empty",
			file : "Please Select File",
			Select : "Please Select",
		}
	});
	
	var validator4 = $("#dataAnalysisData").validate({
		rules : {
			text : "required",
			file : "required",
			Select : "required",
			textarea : "required",
		},
		messages : {
			text : "Field not be empty",
			file : "Please Select File",
			Select : "Please Select",
			textarea : "Field not be empty",
		}
	});
	
	var validator5 = $("#inspectionData").validate({
		rules : {
			text : "required",
			file : "required",
			Select : "required",
			textarea : "required",
		},
		messages : {
			text : "Field not be empty",
			file : "Please Select File",
			Select : "Please Select",
			textarea : "Field not be empty",
		}
	});
	
	
	$("#addMore").click(
	function() {
		var count= parseFloat($("#counter").val());
		count++;
		$('#addRow')
				.append('<tr>'+
						'<td style="border: none !important; text-align: right;">&nbsp;<sup	class="red-c">*</sup></td>'+
						'<td style="border:none!important;"><input name="uploadImages['+count+'].imageName" id="imageName'+count+'" required="required" placeholder="Image Name" type="text"></td>'+
						'<td style="border:none!important;"><input onchange="validateImageFile(this,'+count+')" name="uploadImages['+count+'].image" id="image'+count+'" required="required" placeholder="" type="file"></td>'+
						'<td style="border:none!important;text-align: right;"><i class="fa fa-minus-circle removebutton" style="font-size: 35px !important;margin: 0px 7px 7px 16px;"></i></td>'+
				'</tr>');
		commonCounter  = count;
		$("#counter").val(++count);
	});
	
	$("#addMore1").click(
		function() {
			var count= parseFloat($("#counter1").val());
			count++;
			$('#addRow1')
				.append('<tr>'+
						'<td style="border: none !important; text-align: right;">&nbsp;<sup	class="red-c">*</sup></td>'+
						'<td style="border:none!important;"><input name="uploadDrawings['+count+'].drawingName" id="drawingName'+count+'" required="required" placeholder="Drawing Name" type="text"></td>'+
						'<td style="border:none!important;"><input onchange="validateDrawingFile(this,'+count+')" name="uploadDrawings['+count+'].image" id="imaged'+count+'" required="required" placeholder="" type="file"></td>'+
						'<td style="border:none!important;text-align: right;"><i class="fa fa-minus-circle removebutton" style="font-size: 35px !important;margin: 0px 7px 7px 16px;"></i></td>'+
					'</tr>');
			commonCounter  = count;
			$("#counter1").val(++count);
		});
	
	 $("#reportHseetBtn").click(function() {
		 var editor5= CKEDITOR.instances['editor5'].getData();
		 var reportTrue = $("#reportUpload").val();
			 if(editor5 == "" && reportTrue==""){
				 alert("Draft Report OR Upload Report Mandatory.");
				 return false;
			}else{				
				 $("#reportHseetBtn").submit(function(e) {
						e.preventDefault();
						var url = "saveReportSheetRevised";
						$.ajax({
									type : "POST",
									url : url,
									data : new FormData(this),
									processData : false,
									contentType : false,
									cache : false,
									success : function(data) {
										if(data != null){
											$("#successdiv").show();
											$("#successdiv").hide(2500);
											//$(".abstractLink").click();
										}
									},beforeSend: function () {
										$("#commonLodder").show();
							        },
							        complete: function () {
							        	$("#commonLodder").hide();
							        },
									error : function(request,error) {
										$("#commonLodder").hide();
										alert("Something went wrong");
									}
								});
					});
			}
		});
//	 var validatorRe = $("#reportHseet").validate({
//			rules : {
//				text : "required",
//				file : "required",
//				Select : "required",
//				textarea : "required",
//			},
//			messages : {
//				text : "Field not be empty",
//				file : "Please Select File",
//				Select : "Please Select",
//				textarea : "Field not be empty",
//			}
//		});
	 
	 $("#files").change(function(){
			if (!hasExtensionReference(['.pdf'],"files")) {
				$(this).val('');
 			alert("Not The Valid File Type, Only .pdf Supported.");
 			return;
			}
		});
	 
	 $("#reportUpload").change(function(){
		 if (!hasExtensionReference(['.pdf'],"reportUpload")) {
			 $(this).val('');
			 alert("Not The Valid File Type, Only .pdf Supported.");
			 return;
		 }
	 });
	
	 $("#plotMeasurementBtn").click(function() {
		 var editor5= CKEDITOR.instances['editor6'].getData();
			 if(editor5 == ""){
				 alert("Plot Measurement Mandatory.");
				 return false;
			}else{				
				 $("#plotMeasurementForm").submit(function(e) {
						e.preventDefault();
						var url = "savePlotMeasurementRevised";
						$.ajax({
									type : "POST",
									url : url,
									data : new FormData(this),
									processData : false,
									contentType : false,
									cache : false,
									success : function(data) {
										if(data != null){
											$("#successdiv").show();
											$("#successdiv").hide(2500);
											//$(".abstractLink").click();
										}
									},beforeSend: function () {
										$("#commonLodder").show();
							        },
							        complete: function () {
							        	$("#commonLodder").hide();
							        },
									error : function(request,error) {
										$("#commonLodder").hide();
										alert("Something went wrong");
									}
								});
					});
			}
		});
});

function hasExtensionReference(exts, id) {
	var fileName = document.getElementById(id).value;
	return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$'))
			.test(fileName);
}

$(document).on('click', 'i.removebutton', function () {
    $(this).closest('tr').remove();
    return false;
});

function validateImageFile(file,index) {
	if (!hasExtensionReference(['.png','.jpg','.jpeg','.PNG'],file.id)) {
		 $(this).val('');
		 $('#image'+index).val('');
		 alert("Not The Valid File Type, Only .png,.jpg,.jpeg Supported.");
		 return;
	 }else{
		var FileSize = '';
		FileSize = file.files[0].size; // in MB
		if (FileSize > 5245329) {
		alert('File upload maximum 5 MB');
		$('#image'+index).val('');
		} 
	 }
 }

 function validateDrawingFile(file,index) {
	 if (!hasExtensionReference(['.png','.jpg','.jpeg','.PNG'],file.id)) {
		 $(this).val('');
		 $('#imaged'+index).val('');
		 alert("Not The Valid File Type, Only .png,.jpg,.jpeg Supported.");
		 return;
	 }else{
		var FileSize = '';
		FileSize = file.files[0].size; // in MB
		if (FileSize > 5245329) {
		alert('File upload maximum 5 MB');
		$('#imaged'+index).val('');
		} 
	 }
 }
 function validateImageFileChk(file) {
	 if (!hasExtensionReference(['.png','.jpg','.jpeg','.PNG'],file.id)) {
		 $(this).val('');
		 $("#"+file.id).val('');
		 alert("Not The Valid File Type, Only .png,.jpg,.jpeg Supported.");
		 return;
	 }else{
	 var FileSize = '';
    	FileSize = file.files[0].size; // in MB
    	if (FileSize > 5245329) {
    	alert('File upload maximum 5 MB');
    	$("#"+file.id).val('');
    	} 
	 }
 }
 
 function validateDrawingFileChk(file) {
	 if (!hasExtensionReference(['.png','.jpg','.jpeg','.PNG'],file.id)) {
		 $(this).val('');
		 $("#"+file.id).val('');
		 alert("Not The Valid File Type, Only .png,.jpg,.jpeg Supported.");
		 return;
	 }else{
	 var FileSize = '';
    	FileSize = file.files[0].size; // in MB
    	if (FileSize > 5245329) {
    	alert('File upload maximum 5 MB');
    	 $("#"+file.id).val('');
    	} 
	 }
 }
 
 function validateCover(file) {
	 if (!hasExtensionReference(['.png','.jpg','.jpeg','.PNG'],"coverImage")) {
		 $(this).val('');
		 $("#coverImage").val('');
		 alert("Not The Valid File Type, Only .png,.jpg,.jpeg Supported.");
		 return;
	 }else{
	 var FileSize = '';
	FileSize = file.files[0].size; // in MB
	if (FileSize > 5245329) {
		alert('File upload maximum 5 MB');
		$('#coverImage').val('');
		return;
	} 
	 }
 }
 
 function editItemMaster(id){
		$.ajax({
		    type: "GET",
		    contentType: "application/json",
		    url: "fetchitemListRevised?id="+id,
		    data: {},
		    dataType: 'json',
		    cache: false,
		    success: function (data) {
				if (data != null) {
					for(var i=0; i<data.length; i++){
						
						$("#item").val(data[i].itemName);
						/* var unitvalue='';
						 $("#unitMasterID option").each(function() {
						  if($(this).text() == unitName) {
						    $(this).attr('selected', 'selected');  
						    unitvalue = this.value;
						  }else{
							$(this).removeAttr('selected'); 
						  }                        
						});*/
						 $("#unitMasterID").val(data[i].unitId);
						 $("#itemId").val(data[i].id);
						 $("#itembtn").val('Update');
						 $("#itembtn").attr("onclick","updateItemMaster("+ data[i].id+")");
					}
					
					
				};
		    }
	        
		});
 }
 
 function updateItemMaster(id){
	 var item = $("#item").val();
	 var unitid = $("#unitMasterID").val();
	 if (item == ""){
	 	alert("Item Mandatory field");
	    }else if(unitid == ""){
	 	  alert("Unit Mandatory field");
	    }else{
	 	var url = "updateWorkEstimateItemsRevised";
	 	$.ajax({
	 		type : "POST",
	 		url : url,
	 		data : $("#itemsInfoIdRevised").serialize(),
	 		cache : false,
	 		success : function(data) {
	 			addItemReset();
	 			$("#successdiv").show();
	 			$("#successdiv").hide(2500);
	 			getItemList(data.workId);
	 			//TODO for item id
	 		},
	 		error : function(request,error) {
	 			$("#commonLodder").hide();
	 			alert(error);
	 		}
	 	});
	   }
	 }
 
 function addItemReset() {
	 $("#item").val("");
	 $("#unitMasterID").val("");
	 
	 $("#itembtn").val('Add');
	 $("#itembtn").attr("onclick","itemFormSubmit()");
 }
 function getItemList(id) {
		$.ajax({
		    type: "GET",
		    contentType: "application/json",
		    url: "itemListRevised?workId="+id,
		    data: {},
		    dataType: 'json',
		    cache: false,
		    success: function (data) {
				if (data != null) {
					$('#listTable tbody').empty();
					var count = 1;
					for(var i=0; i<data.length; i++){
						var row = "";
						//row += "<tr ondblclick='editItemMaster(\""+data[i].id+"\",\""+data[i].itemName+"\",\""+data[i].unitMaster.unit_desc+"\")'>";
						row += "<tr ondblclick='editItemMaster(\""+data[i].id+"\")'>";
						row += '<td>' + count++ + '</td>';
						row += '<td><input class="chk" type="checkbox" value="'+ data[i].id+ '" name=""></td>';
						row += '<td>' + data[i].itemName + '</td>';
						row += '<td>' + data[i].unitMaster.unit_desc + '</td>';
						row +='<td><a href="#measurement" onclick="redirectMeasurementFromItem()" class="myMeasurementLink" aria-controls="measurement" role="tab" data-toggle="tab" aria-expanded="true">Add Measurement</a><br> <a href="#data" class="myDataAnalysis" aria-controls="data"  onclick="redirectAnalysisFromItem()"  role="tab" data-toggle="tab" aria-expanded="true">Add Analysis</a></td>'
						row += '</tr>';
						$('#listTable').append($(row));
					};
				}
		    },beforeSend: function () {
				$("#commonLodder").show();
	        },
	        complete: function () {
	        	$("#commonLodder").hide();
	        },error: function (e) {
	        	$("#commonLodder").hide();
		        var json = "<h4>Ajax Response</h4><pre>"
		            + e.responseText + "</pre>";
		        $('#feedback').html(json);
		        $("#btn-search").prop("disabled", false);
		        if(e.responseText == "NOT FOUND"){
		        	$('#listTable tbody').empty();
		        }
		    }
		});
 }
 
 function getRateAnalysisList(id) {
		
		$.ajax({
		    type: "GET",
		    contentType: "application/json",
		    url: "itemListRevised?workId="+id,
		    data: {},
		    dataType: 'json',
		    cache: false,
		    success: function (data) {
				if (data != null) {
					$('#rateListTable tbody').empty();
					var count = 1;
					for(var i=0; i<data.length; i++){
						var row = "";
						row += '<tr>';
						row += '<td>' + count++ + '</td>';
						row += '<td><input type="checkbox" value="" name=""></td>';
						row += '<td>' + data[i].title + '</td>';
						row +='<td><a href="#" class="add-mesurementlink">Add Measurement</a> <a href="#" class="add-analysislink">Add Analysis</a></td>'
						row += '</tr>';
						$('#rateListTable').append($(row));
					};
				}
		    },beforeSend: function () {
				$("#commonLodder").show();
	        },
	        complete: function () {
	        	$("#commonLodder").hide();
	        },error: function (e) {
	        	$("#commonLodder").hide();
		        var json = "<h4>Ajax Response</h4><pre>"
		            + e.responseText + "</pre>";
		        $('#feedback').html(json);
		        $("#btn-search").prop("disabled", false);
		        if(e.responseText == "NOT FOUND"){
		        	$('#rateListTable tbody').empty();
		        }
		    }
		});
}
 
 function getAllUnitMaster() {
		$.ajax({
		    type: "GET",
		    contentType: "application/json",
		    url: "getAllUnitMaster",
		    data: {},
		    dataType: 'json',
		    cache: false,
		    success: function (data) {
				if (data != null) {
					$('#unitMasterID').empty();
					$('#unitMasterID1').empty();
					$('#unitMasterID').append($('<option value="" selected="selected">--Select--</option>'));
					$('#unitMasterID1').append($('<option value="" selected="selected">--Select--</option>'));
					
					$.map(data, function( val, i ) {
						$('#unitMasterID').append($('<option>', { 
					        value: i,
					        text : val 
						}));
						
						$('#unitMasterID1').append($('<option>', { 
					        value: i,
					        text : val 
					}));
						unitKey.push(i);
						unitName.push(val);
					});
					
				}else{
				  divRow +='<div></div>';
				}
		    },error: function (e) {
		    	$("#commonLodder").hide();
		    }
		});
	}
 
function getMeaurement(){
	var id=$('#globalWorkId').val();
	$.ajax({
	    type: "GET",
	    contentType: "application/json",
	    url: "itemListRevised?workId="+id,
	    data: {},
	    dataType: 'json',
	    cache: false,
	    success: function (data) {
			if (data != null) {
				$('#itemListTable').empty();
				var count = 1;
				for(var i=0; i<data.length; i++){
					var row = "";
					row += '<div id="accordion" class="panel-group">'
						row += ' <div class="panel panel-default">'
							row += ' <div class="panel-heading">'
					row += '  <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne' + count + '" onclick="getMeasurmentList(' + data[i].id + ')"><strong>ITEM NO ' + count + '</strong>: ' + data[i].itemName + ' [ UNIT- ' + data[i].unitMaster.unit_desc + ']</a> </h4>'
						row += ' </div>'
						row += ' <div id="collapseOne' + count + '" class="panel-collapse collapse">'
						row += ' <div class="panel-body">'
					row += '  <div class="table-responsive table-grid margin20 table-z">'
								row += ' <table>'
							row += '  <tbody>'
									row += '   <tr>'
									row += '   <th style="width:35%">Detail of Work<sup class="red-c">*</sup></th>'
									row += '  <th style="width:10%;">No. of Work Required(A)<sup class="red-c">*</sup></th>'
									row += '  <th style="width:10%;">No. of Work in Multiple of(B)<sup class="red-c">*</sup></th>'
									row += ' <th colspan="3" style="text-align:center">Measurement<sup class="red-c">*</sup></th>'
									row += ' <th style="width:15%;" colspan="2">Qty.(A*B*C*D*E) </th>'
									row += ' </tr>'
									row += ' <tr>'
								    row += '   <th colspan="3"></th>';
									var unitMasterDetails = data[i].unitMaster.unitMasterDetails;
									if(unitMasterDetails != null){
										if(unitMasterDetails.length==1){
											row += '<th width="10%">'+unitMasterDetails[0].field_name+'(C)<sup class="red-c">*</sup></th>';
											row += '<th width="10%">&nbsp;</th>';
											row += '<th width="10%">&nbsp;</th>';
										}else if(unitMasterDetails.length==2){
											row += '<th width="10%">'+unitMasterDetails[0].field_name+'(C)<sup class="red-c">*</sup></th>';
											row += '<th width="10%">'+unitMasterDetails[1].field_name+'(D)<sup class="red-c">*</sup></th>';
											row += '<th width="10%">&nbsp;</th>';
										}else if(unitMasterDetails.length==3){
											row += '<th width="10%">'+unitMasterDetails[0].field_name+'(C)<sup class="red-c">*</sup></th>';
											row += '<th width="10%">'+unitMasterDetails[1].field_name+'(D)<sup class="red-c">*</sup></th>';
											row += '<th width="10%">'+unitMasterDetails[2].field_name+'(E)<sup class="red-c">*</sup></th>';
										}
									}				
									row += ' <th style="width:15%;" colspan="2">&nbsp;</th>'
									row += ' </tr>'
									row += ' <tr class="bg-blue-one">'
									row += ' <td><div class="input">'
									row += ' <input placeholder="Enter Detail of Work" type="text" name="detailOfWork'+data[i].id+'" id="detailOfWork'+data[i].id+'">'
									row += ' </div></td>'
									row += ' <td><div class="input">'
									row += '  <input placeholder="" name="numberOfWorkRequired" type="text" id="noOfW'+data[i].id+'"maxlength="6" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')">'
									row += ' </div></td>'
									row += '<td><div class="input">'
									row += ' <input placeholder="" name="numberOfWorkInMultiple" type="text" id="noOfWin'+data[i].id+'" maxlength="6" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')">'
									row += '</div></td>';
									if(unitMasterDetails != null){
										if(unitMasterDetails.length==1){
											row += ' <td><div class="input">'
												row += '  <input placeholder="" name="length" type="text" id="L'+data[i].id+'" maxlength="10" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')"">'
												row += ' </div></td>'
												row += ' <td colspan="2"><div class="input">&nbsp;'
//												row += ' <input placeholder="" name="breadth" type="text" id="B'+data[i].id+'" maxlength="6" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')">'
												row += '</div></td>'
//												row += '<td><div class="input">'
//												row += ' <input placeholder="" type="text" name="height" id="H'+data[i].id+'" maxlength="6" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')">'
//												row += ' </div></td>'
										}else if(unitMasterDetails.length==2){
											row += ' <td><div class="input">'
												row += '  <input placeholder="" name="length" type="text" id="L'+data[i].id+'" maxlength="10" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')"">'
												row += ' </div></td>'
												row += ' <td><div class="input">'
												row += ' <input placeholder="" name="breadth" type="text" id="B'+data[i].id+'" maxlength="10" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')">'
												row += '</div></td>'
												row += ' <td ><div class="input">&nbsp;'
//												row += ' <input placeholder="" type="text" name="height" id="H'+data[i].id+'" maxlength="6" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')">'
												row += ' </div></td>'
										}else if(unitMasterDetails.length==3){
											row += ' <td><div class="input">'
												row += '  <input placeholder="" name="length" type="text" id="L'+data[i].id+'" maxlength="10" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')"">'
												row += ' </div></td>'
												row += ' <td><div class="input">'
												row += ' <input placeholder="" name="breadth" type="text" id="B'+data[i].id+'" maxlength="10" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')">'
												row += '</div></td>'
												row += '<td><div class="input">'
												row += ' <input placeholder="" type="text" name="height" id="H'+data[i].id+'" maxlength="10" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')">'
												row += ' </div></td>'
										}
									}										
									row += ' <td><div class="input">'
                                row += '   <input type="text" name="output" id="lbh'+data[i].id+'" style="width: 65px;" disabled="disabled">'
                               row += '      </div></td><input type="hidden" value="' + data[i].id + '" name="itemId" id="itemId' + data[i].id + '">'
                                  row += '     <td class="add-btn-t1"><input type="button" value="Add" class="button1 " onclick="addRecord('+data[i].id+','+(unitMasterDetails != null ? unitMasterDetails.length : 0)+')"/></td>'
                                row += '   </tr>'
                              
                              row += '   <tr>'
                              row += '   <td colspan="8" class="select-item-button rcpnew" style="text-align:left;"><button type="button" onclick="deleteMeasurment();">Delete Selected Items</button>'
                                row += ' </td>'
                                row += '  </tr>'
                              row += '   </tbody>'
                            row += '   </table>'
                           row += ' <table>'
                          row += '   <thead>'
                            row += '   <tr>'
                               row += '   <th width="3%" rowspan="2">&nbsp;</th>'
                            	   row += '   <th width="32%" rowspan="2">Detail of work<sup class="red-c">*</sup></th>'
                                     row += '    <th width="10%" rowspan="2">No. of Work Required(A)<sup class="red-c">*</sup></th>'
                                   row += '    <th width="10%" rowspan="2">No. of Work in Multiple of(B)<sup class="red-c">*</sup></th>'
                                   row += '     <th colspan="3" class="text-center-c" align="center">Measurement<sup class="red-c">*</sup></td>'
                                   row += '      <th width="15%" rowspan="2" colspan="2">Qty.(A*B*C*D*E)</th>'
                                   row += '    </tr>'
                                 row += ' <tr>';
									if(unitMasterDetails != null){
										if(unitMasterDetails.length==1){
											row += '<th width="10%">'+unitMasterDetails[0].field_name+'(C)<sup class="red-c">*</sup></th>';
											row += '<th width="10%">&nbsp;</th>';
											row += '<th width="10%">&nbsp;</th>';
										}else if(unitMasterDetails.length==2){
											row += '<th width="10%">'+unitMasterDetails[0].field_name+'(C)<sup class="red-c">*</sup></th>';
											row += '<th width="10%">'+unitMasterDetails[1].field_name+'(D)<sup class="red-c">*</sup></th>';
											row += '<th width="10%">&nbsp;</th>';
										}else if(unitMasterDetails.length==3){
											row += '<th width="10%">'+unitMasterDetails[0].field_name+'(C)<sup class="red-c">*</sup></th>';
											row += '<th width="10%">'+unitMasterDetails[1].field_name+'(D)<sup class="red-c">*</sup></th>';
											row += '<th width="10%">'+unitMasterDetails[2].field_name+'(E)<sup class="red-c">*</sup></th>';
										}
									}	
                                   row += '     </tr>'
                                   row += '   </thead>'
                                   row += ' <tbody id="mesurmentLst'+data[i].id+'"></tbody>'
                               row += '   </table>'
                            row += '<div ></div>'
                          row += '    </div>'
                        row += '   </div>'
                      row += '  </div>'
                    row += ' </div>'
					$('#itemListTable').append($(row));
					counter = count;
					++count
				};
			}
	    },beforeSend: function () {
			$("#commonLodder").show();
        },
        complete: function () {
        	$("#commonLodder").hide();
        },error: function (e) {
        	$("#commonLodder").hide();
	        if(e.responseText == "NOT FOUND"){
	        	$('#itemListTable tbody').empty();
	        }
	    }
	});
}

	 function addRecord (count, fieldCount) {
		 var beanObj = prepareBean (count,fieldCount);
		 if(beanObj.detailOfWork == ""){
			 alert("Enter Detail Of Work");
			 return false;
		 }else if(isNaN(beanObj.numberOfWorkRequired)){
			 alert("Number Of Work Mandotary field");
			 return false;
		 }else if(isNaN(beanObj.numberOfWorkInMultiple)){
			 alert("Number Of Work In Multiple Mandotary field");
			 return false;
		 }else if(fieldCount==1){
			 if(isNaN(beanObj.length)){
				 alert("Fill Mandotary field");
				 return false;
			 }
		   }else if(fieldCount==2){
			   if(isNaN(beanObj.length)){
					 alert("Fill Mandotary field");
					 return false;
				 }else if(isNaN(beanObj.breadth)){
					 alert("Fill Mandotary field");
					 return false;
				 }
		   }else if(fieldCount==3){
			   if(isNaN(beanObj.length)){
					 alert("Fill Mandotary field");
					 return false;
				 }else if(isNaN(beanObj.breadth)){
					 alert("Fill Mandotary field");
					 return false;
				 }else if(isNaN(beanObj.height)){
					 alert("Fill Mandotary field");
					 return false;
				 }
		   }//else{
			$.ajax({
			    type: "POST",
			    contentType: "application/json",
			    url: "saveWorkEstimateMeasurementDataRevised",
			    data: JSON.stringify(beanObj),
			    dataType: 'json',
			    cache: false,
			    success: function (data) {
			      $("#successdiv").show();
			      $("#successdiv").hide(2500);
			      reset(count);
			      getMeasurmentList(data.itemId);
			    },beforeSend: function () {
					$("#commonLodder").show();
		        },
		        complete: function () {
		        	$("#commonLodder").hide();
		        },
			    error: function (e) {
			    	$("#commonLodder").hide();
			    }
			});
		// }
	 }
	 
	 function calculat(id){
		 var noOfW = parseFloat($("#noOfW"+id).val());
		 var noOfWin = parseFloat($("#noOfWin"+id).val());
		 var L = parseFloat($("#L"+id).val());
		 var B = parseFloat($("#B"+id).val());
		 var H = parseFloat($("#H"+id).val());
		 var total = 0;
		 if(isNaN(noOfW)){
			 noOfW = 1;
			 total = noOfW;
			 $("#lbh"+id).val(total.toFixed(2));
		 }else if(isNaN(noOfWin)){
			 noOfWin = 1;
			 total = noOfW * noOfWin;
			 $("#lbh"+id).val(total.toFixed(2));
		 }else if(isNaN(L)){
			 L = 1;
			 total = L * noOfWin * noOfW;
			 $("#lbh"+id).val(total.toFixed(2));
		 }else if(isNaN(B)){
			 B = 1;
			 total = B * L * noOfWin * noOfW;
			 $("#lbh"+id).val(total.toFixed(2));
		 }else if(isNaN(H)){
			 H = 1;
			 total = H *  B * L * noOfWin * noOfW;
			 $("#lbh"+id).val(total.toFixed(2));
		 }else{
			 total = noOfW * noOfWin * L * B * H; 
			 $("#lbh"+id).val(total.toFixed(2));
		 }
	 }
	 
	 function prepareBean (id, fieldCount) {
		   var bean ={};
		   bean['detailOfWork'] = $("#detailOfWork"+id).val();
		   bean['itemId'] = parseFloat($("#itemId"+id).val());
		   bean['numberOfWorkRequired'] = parseFloat($("#noOfW"+id).val());
		   bean['numberOfWorkInMultiple'] = parseFloat($("#noOfWin"+id).val());
		   if(fieldCount==1){
			   bean['length'] = parseFloat($("#L"+id).val());
		   }else if(fieldCount==2){
			   bean['length'] = parseFloat($("#L"+id).val());
			   bean['breadth'] = parseFloat($("#B"+id).val());
		   }else if(fieldCount==3){
			   bean['length'] = parseFloat($("#L"+id).val());
			   bean['breadth'] = parseFloat($("#B"+id).val());
			   bean['height'] = parseFloat($("#H"+id).val());
		   }		   
			return bean;
	}
	
	 function reset(id){
		   $("#detailOfWork"+id).val("");
		   $("#noOfW"+id).val("");
		   $("#noOfWin"+id).val("");
		   $("#L"+id).val("");
		   $("#B"+id).val("");
		   $("#H"+id).val("");
		   $("#lbh"+id).val("");
	 }
	 
	 function getMeasurmentList(id) {
			$.ajax({
			    type: "GET",
			    contentType: "application/json",
			    url: "measurmentListRevised?itemId="+id,
			    data: {},
			    dataType: 'json',
			    cache: false,
			    success: function (data) {
			    	del1 = id;
					if (data != null) {
						$('#mesurmentLst'+id).empty();
						var count = 1;
						var total = 0;
						var row2 = "";
						var checkupdate="false";
						var fieldCount=0;
						row2 += '<tr>';
						for(var i=0; i<data.length; i++){
							fieldCount=0;
							total = total + data[i].quantity;
							checkupdate=data[i].updateMeasure;
							var row1 = "";
							row1 += '<tr>';
							row1 += '<input type="hidden" name="" id="measurementId' + data[i].id + '" value="' + data[i].id + '" >';
							
							if(checkupdate==true)
							{
							row1 += '<td><input class="checkOne" type="checkbox" value="' + data[i].id + '" name=""> <a style="cursor: pointer;" onclick="showHistory(' + data[i].id + ');"><i class="fa fa-info-circle" aria-hidden="true"></i></a> </td>';
							}
						else
							{
							row1 += '<td><input class="checkOne" type="checkbox" value="' + data[i].id + '" name=""></td>';
							}
							row1 += '<td><input type="text" id="detailOfWork' + data[i].id + '" value="' + data[i].detailOfWork + '"</td>';
							row1 += '<td><input type="text" id="noOfW' + data[i].id + '" value="' + data[i].numberOfWorkRequired + '" maxlength="6" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')"/></td>';
							row1 += '<td><input type="text" id="noOfWin' + data[i].id + '" value="' + data[i].numberOfWorkInMultiple + '" maxlength="6" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')"/></td>';
							if(data[i].length != null){
								fieldCount++;
								row1 += '<td><input type="text" name="length" id="L' + data[i].id + '" value="' + data[i].length + '" maxlength="10" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')""></td>';
							}else{
								row1 += '<td>&nbsp;</td>';
							}
							if(data[i].breadth != null){
								fieldCount++;
								row1 += '<td><input type="text" name="breadth" id="B' + data[i].id + '" value="' + data[i].breadth + '" maxlength="10" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')"" ></td>';
							}else{
								row1 += '<td>&nbsp;</td>';
							}
							if(data[i].height != null){
								fieldCount++;
								row1 += '<td><input type="text" name="height" id="H' + data[i].id + '" value="' + data[i].height + '" maxlength="10" onkeypress="return isNumber(event, this)" onkeyup="calculat('+data[i].id+')"" ></td>';
							}else{
								row1 += '<td>&nbsp;</td>';
							}
							row1 += '<td><input type="text" id="lbh' + data[i].id + '" value="' + data[i].quantity + '" disabled="disabled"/></td>';
							row1 +='<td class="add-btn-t1"><input type="button" value="Update" class="add-mesurementlink" onclick="updateMeasurment(' + data[i].id + ','+fieldCount+');"></td>'
							row1 += '</tr>';
							row1 += '<tr>'
                            row1 += '</tr>'
							$('#mesurmentLst'+id+'').append($(row1));
						};
						
						row2 += '<td >Total</td>';
						row2 += '<td colspan="7"></td>';
						row2 += '<td >' + total.toFixed(2) + '</td>';
						row2 += '</tr>';
						$('#mesurmentLst'+id+'').append($(row2));
					};
			    },beforeSend: function () {
					$("#commonLodder").show();
		        },
		        complete: function () {
		        	$("#commonLodder").hide();
		        },error: function (e) {
		        	$("#commonLodder").hide();
			        if(e.responseText == "NOT FOUND"){
			        	$('#mesurmentLst"'+id+'" tbody').empty();
			        }
			    }
			});
	}
	 
	 function deleteMeasurment(){
			var chkArray = [];
			$(".checkOne:checked").each(function() {
				chkArray.push($(this).val());
			});
			var selected;
			selected = chkArray.join(',');
			
			if (selected.length < 1) {
				alert("Please select at least one checkbox");
				return false;
			}
			else{
		        var trueCheck = confirm("Please Confirm to delete the selected Items !");
		        if (trueCheck == true) {
		        	if(chkArray.length > 0){
		        	  $('#mesurmentLst'+del1).empty();
		        	}
		        	deleteDataByMeasurmentId(selected);
		            return true;
		        }
			}
	 }
	 
	 function deleteDataByMeasurmentId(id){
			var url = "deleteMeasurementRevised";
			$.ajax({
				type : "GET",
				url : url,
				data : {
					id:id
				},
				cache : false,
				success : function(data) {
					getMeasurmentList(data.itemId);
				},beforeSend: function () {
					$("#commonLodder").show();
		        },
		        complete: function () {
		        	$("#commonLodder").hide();
		        },
				error : function(request,error) {
					$("#commonLodder").hide();
					alert(error);
				}
			});
		}
	 

	 function getLabourRateAnalysisList(id) {
			
			$.ajax({
			    type: "GET",
			    contentType: "application/json",
			    url: "labourRateListRevised?workId="+id,
			    data: {},
			    dataType: 'json',
			    cache: false,
			    success: function (data) {
					if (data != null) {
						$('#labourRatListTable').empty();
						var count = 1;
						for(var i=0; i<data.length; i++){
							var row = "";
							row += '<tr>';
							row += '<td>' + count++ + '</td>';
							row += '<td><input class="lbrcheck" type="checkbox" value="' + data[i].id + '" name=""></td>';
							row += '<td><input type="text" id="rateName' + data[i].id + '" value="' + data[i].title + '" /></td>';
							row +='<td><a href="#" class="add-mesurementlink" onclick="getLabourMasterList()" return false; >Add Details</a> &nbsp;/&nbsp; <a href="#" class="add-analysislink" onclick="getLabourMasterList()"return false;>View Details</a></td>'
							row += '<td class="add-btn-t1"><input type="button" value="Update" onclick="updateRateMaster('+data[i].id+');"></td>';
							row += '</tr>';
							$('#labourRatListTable').append($(row));
						};
					}
			    },beforeSend: function () {
					$("#commonLodder").show();
		        },
		        complete: function () {
		        	$("#commonLodder").hide();
		        },error: function (e) {
		        	$("#commonLodder").hide();
			        if(e.responseText == "NOT FOUND"){
			        	$('#labourRatListTable tbody').empty();
			        }
			    }
			});
	}
	 
	 
	 function getAllDataList(){
			var id=$('#globalWorkId').val();
			$.ajax({
			    type: "GET",
			    contentType: "application/json",
			    url: "itemListRevised?workId="+id,
			    data: {},
			    dataType: 'json',
			    cache: false,
			    success: function (data) {
					if (data != null) {
						$('#dataListTable').empty();
						var count = 1;
						for(var i=0; i<data.length; i++){
							var row = "";
							row += '<div id="accordion" class="panel-group">'
								row += ' <div class="panel panel-default">'
									row += ' <div class="panel-heading">'
							row += '  <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo' + count + '" onclick="getDataAnalysisList(' + data[i].id + ')"><strong>ITEM NO ' + count + '</strong>: ' + data[i].itemName + ' [ UNIT- ' + data[i].unitMaster.unit_desc + ']</a> </h4>'
								row += ' </div>'
								row += ' <div id="collapseTwo' + count + '" class="panel-collapse collapse">'
								row += ' <div class="panel-body">'
							   row += '<div class="table-responsive table-grid margin20 table-z">'
									row += ' <table>'
									row += ' <tbody>'
									row += '<tr>'
									row += '<th colspan="9"><div class="row">'
								    row += '<div class="col-md-3 pd2"> Labour/Sub Data/Rate Analysis<sup class="red-c">*</sup>'
								    row += '<div class="input">'
								    row += '<input placeholder="" type="text" name="labourOrRateAnalysisName" id="labourOrRateAnalysisName'+data[i].id+'" onkeyup="getAutoValue('+data[i].id+')">'
								    row += '</div></div>'
								    row += '<div class="col-md-2 pd2">Purpose<sup class="red-c">*</sup><div class="input"><input placeholder="" type="text" name="purpose" id="purpose'+data[i].id+'"></div></div>'
								    row += '<div class="col-md-1 pd2">Qty.<sup class="red-c">*</sup><div class="input"><input placeholder="" type="text" name="quantity" id="quantity'+data[i].id+'"" maxlength="10" onkeypress="return isNumber(event, this)"></div> </div>'
								    row += '<div class="col-md-1 pd2">Rate<sup class="red-c">*</sup><div class="input"><input placeholder="" type="text" name="rate" id="rate'+data[i].id+'" maxlength="10" onkeypress="return isNumber(event, this)"></div></div>'
								    row += '<div class="col-md-1 pd2">Unit<sup class="red-c">*</sup><div class="select-one">'
								    row += '<select name="unit" id="unitMaster'+data[i].id+'"><option value="" selected="selected">--Select--</option></select></div></div><input type="hidden" value="' + data[i].acpWorkId + '" name="acpWorkId" id="acpWorkId' + data[i].id + '">'
								    row += '<input type="hidden" value="' + data[i].id + '" name="itemId" id="itemIds' + data[i].id + '">'
								    row += '<div class="col-md-3 pd2 add-btn-t1"><input type="button" id="dataAnlybtn'+data[i].id+'" value="Add" onclick="addRecordad('+data[i].id+')"/><input type="button" onclick="addRecordadReset('+data[i].id+')" value="Reset"/></div></div>'
                                    row += ' </th>'
                                    row += ' </tr>'
		                              row += '<tr>'
		                              row += '<td colspan="8" class="select-item-button rcpnew" style="text-align:left;"><button type="button" onclick="deleteDataAnalysis();">Delete Selected Items</button>'
		                                row += '<strong>* Please Double Click To Update The Record. </strong></td>'
		                                  row +='</tr>'
		                              row += '</tbody>'
		                            row += '</table>'
		                           row += '<table>'
		                           row += '<thead>'
		                            row += '<tr>'
	                            	row += '<th width="10%" >Sr No.</th>'
	                            	row += '<th width="10%">Select</th>'	
		                               row += '<th width="36%" ><strong>Labour/Sub Data/Rate Analysis(A)</strong><sup class="red-c">*</sup></th>'
		                                   row +='<th width="8%" ><strong>Purpose(B)</strong><sup class="red-c">*</sup></th>'
		                                   row += '<th width="8%" ><strong>Quantity(c)</strong><sup class="red-c">*</sup></th>'
		                                   row += '<th class="text-center-c"><strong>Rate(D)</strong><sup class="red-c">*</sup></td>'
		                                   row += '<th width="11%"  ><strong>Unit(E)</strong><sup class="red-c">*</sup></th>'
		                                   row += '<th width="11%" ><strong>Total</strong></th>'
		                                   row += '</tr>'
		                                   row += '</thead>'
		                                   row += ' <tbody id="itemDataList'+data[i].id+'"></tbody>'
		                               row += '   </table>'
		                            row += '<div ></div>'
		                          row += '    </div>'
		                        row += '   </div>'
		                      row += '  </div>'
		                    row += ' </div>'
							$('#dataListTable').append($(row));
							addSelect(data[i].id);
							counter = count;
							++count
						};
					}
			    },beforeSend: function () {
					$("#commonLodder").show();
		        },
		        complete: function () {
		        	$("#commonLodder").hide();
		        },error: function (e) {
		        	$("#commonLodder").hide();
			        if(e.responseText == "NOT FOUND"){
			        	$('#dataListTable tbody').empty();
			        }
			    }
			});
	}
	 
	 var unitKey = [];
	 var unitName = [];

	 function addSelect(id){
	 	$('#unitMaster'+id).empty();
	 	$('#unitMaster'+id).append($('<option value="" selected="selected">--Select--</option>'));
	 	for(var i=0; i< unitKey.length; i++){
	 		$('#unitMaster'+id).append($('<option>', { value: unitKey[i], text : unitName[i] }));
	 	}
	 } 
	 
	 function addRecordad (id) {
		 
		 var beanObj = prepareBeanData (id);
		 if(beanObj.labourOrRateAnalysisName == ""){
			 alert("Enter labour/Sub Data/Rate Analysis");
		 }else if((beanObj.purpose == "")){
			 alert("Purpose Mandotary field");
		 }else if(isNaN(beanObj.quantity)){
			 alert("Quantity Mandotary field");
		 }else if(isNaN(beanObj.rate)){
			 alert("Rate Mandotary field");
		 }else if(beanObj.rate == 0){
			 alert("Rate Can't be zero field");
		 }else if(isNaN(beanObj.unit) || beanObj.unit == ""){
			 alert("Unit Mandotary field");
		 }else{
			$.ajax({
			    type: "POST",
			    contentType: "application/json",
			    url: "saveWorkEstimateDataAnalysisRevised",
			    data: JSON.stringify(beanObj),
			    dataType: 'json',
			    cache: false,
			    success: function (data) {
			    	$("#successdiv").show();
			    	$("#successdiv").hide(2500);
			    	addRecordadReset(id);
			    	getDataAnalysisList(data.itemId);
			    },beforeSend: function () {
					$("#commonLodder").show();
		        },
		        complete: function () {
		        	$("#commonLodder").hide();
		        },
			    error: function (e) {
			    	$("#commonLodder").hide();
			    }
			});
		 }
	 }
	 
	 function getDataAnalysisList(id) {
			
			$.ajax({
			    type: "GET",
			    contentType: "application/json",
			    url: "dataItemRateListRevised?itemId="+id,
			    data: {},
			    dataType: 'json',
			    cache: false,
			    success: function (data) {
					if (data != null) {
						del = id;
						$('#itemDataList'+id).empty();
						var count = 1;
						var total = 0;
						var row2 = "";
						row2 += '<tr>';
						for(var i=0; i<data.length; i++){
							total = total + data[i].totalAmount;
							var checkEdit=data[i].updateLabour;
							
							var row = "";
							row += "<tr ondblclick='editDataAnalysisDetails(\""+data[i].id+"\",\""+data[i].rateAnalysisName+"\",\""+data[i].purpose+"\",\""+data[i].quantity+"\",\""+data[i].rate+"\",\""+data[i].unitName+"\","+id+")'>";
							row += '<td class="deleteform' + data[i].id + '">' + count++ + '</td>';
							if(checkEdit==true)
							{
								row += '<td><input class="analysischeck" type="checkbox" value="' + data[i].id + '" name=""><a style="cursor: pointer;" onclick="showLabourDataHistory(' + data[i].id + ');"><i class="fa fa-info-circle" aria-hidden="true"></i></a> </td>';
							}
						else
							{
							row += '<td><input class="analysischeck" type="checkbox" value="' + data[i].id + '" name=""></td>';
							}
							
							row += '<td>' + data[i].rateAnalysisName + '</td>';
							row += '<td>' + data[i].purpose + '</td>';
							row += '<td>' + data[i].quantity + '</td>';
							row += '<td>' + data[i].rate.toFixed(2) + '</td>';
							row += '<td>' + data[i].unitName + '</td>';
							row += '<td>' + data[i].totalAmount.toFixed(2) + '</td>';
							row += '</tr>';
							$('#itemDataList'+id+'').append($(row));
						};
						row2 += '<td >Total</td>';
						row2 += '<td colspan="6"></td>';
						row2 += '<td >' + total.toFixed(2) + '</td>';
						row2 += '</tr>';
						$('#itemDataList'+id+'').append($(row2));
					}
			    },beforeSend: function () {
					$("#commonLodder").show();
		        },
		        complete: function () {
		        	$("#commonLodder").hide();
		        },error: function (e) {
		        	$("#commonLodder").hide();
			        if(e.responseText == "NOT FOUND"){
			        	$('#itemDataList tbody').empty();
			        }
			    }
			});
	}
	 
	 function editDataAnalysisDetails(id,rateAnalysisName,purpose,quantity,rate,unitName, itemId){
		 $("#labourOrRateAnalysisName"+itemId).val(rateAnalysisName);
		 $("#rate"+itemId).val(rate);
		 var unitvalue='';
		 $("#unitMaster"+itemId+" option").each(function() {
		  if($(this).text() == unitName) {
		    $(this).attr('selected', 'selected');  
		    unitvalue = this.value;
		  }else{
			$(this).removeAttr('selected'); 
		  }                        
		});
		 $("#unitMaster"+itemId).val(unitvalue);
		 $("#purpose"+itemId).val(purpose);
		 $("#quantity"+itemId).val(quantity);
		 $("#dataAnlybtn"+itemId).val('Update');
		 $("#dataAnlybtn"+itemId).attr("onclick","updateDataAnalysisData("+itemId+","+id+")");
	 }
	 
	 function prepareBeanDataForUpdate(itemId,id) {
		   var bean ={};
		   bean['labourOrRateAnalysisName'] = $("#labourOrRateAnalysisName"+itemId).val();
		   bean['purpose'] = $("#purpose"+itemId).val();
		   bean['quantity'] = parseFloat($("#quantity"+itemId).val());
		   bean['rate'] = parseFloat($("#rate"+itemId).val());
		   bean['unit'] = parseFloat($("#unitMaster"+itemId).val());
		   bean['acpWorkId'] = $("#acpWorkId"+itemId).val();
		   bean['itemId'] = parseFloat($("#itemIds"+itemId).val());
		   bean['id'] = id;
			return bean;
	}
	 
    function updateDataAnalysisData (itemId, id) {
		 
		 var beanObj = prepareBeanDataForUpdate(itemId,id);
		 if(beanObj.labourOrRateAnalysisName == ""){
			 alert("Enter labour/Sub Data/Rate Analysis");
		 }else if((beanObj.purpose == "")){
			 alert("Purpose Mandotary field");
		 }else if(isNaN(beanObj.quantity)){
			 alert("Quantity Mandotary field");
		 }else if(isNaN(beanObj.rate)){
			 alert("Rate Mandotary field");
		 }else if(beanObj.rate == 0){
			 alert("Rate Can't be zero field");
		 }else if(isNaN(beanObj.unit) || beanObj.unit == ""){
			 alert("Unit Mandotary field");
		 }else{
			$.ajax({
			    type: "POST",
			    contentType: "application/json",
			    url: "updateWorkEstimateDataAnalysisRevised",
			    data: JSON.stringify(beanObj),
			    dataType: 'json',
			    cache: false,
			    success: function (data) {
			    	$("#successdiv").show();
			    	$("#successdiv").hide(2500);
			    	addRecordadReset(data.itemId);
			    	getDataAnalysisList(data.itemId);			    	
			    },beforeSend: function () {
					$("#commonLodder").show();
		        },
		        complete: function () {
		        	$("#commonLodder").hide();
		        },
			    error: function (e) {
			    	$("#commonLodder").hide();
			    }
			});
		 }
	 }

	 function prepareBeanData (id) {
		   var bean ={};
		   bean['labourOrRateAnalysisName'] = $("#labourOrRateAnalysisName"+id).val();
		   bean['purpose'] = $("#purpose"+id).val();
		   bean['quantity'] = parseFloat($("#quantity"+id).val());
		   bean['rate'] = parseFloat($("#rate"+id).val());
		   bean['unit'] = parseFloat($("#unitMaster"+id).val());
		   bean['acpWorkId'] = $("#acpWorkId"+id).val();
		   bean['itemId'] = parseFloat($("#itemIds"+id).val());
			return bean;
	}
	 function addRecordadReset(id){
		 $("#labourOrRateAnalysisName"+id).val("");
		 $("#purpose"+id).val("");
		 $("#quantity"+id).val("");
		 $("#rate"+id).val("");
		 $("#unitMaster"+id).val("");
		 $("#dataAnlybtn"+id).val('Add');
		$("#dataAnlybtn"+id).attr("onclick","addRecordad("+id+")");
	 }
	 
	 function prepareBeanForUpdate (id, fieldCount) {
		 var bean ={};
		   bean['id'] = parseFloat($("#measurementId"+id).val());
		   bean['detailOfWork'] = $("#detailOfWork"+id).val();
		   bean['itemId'] = parseFloat($("#itemId"+id).val());
		   bean['numberOfWorkRequired'] = parseFloat($("#noOfW"+id).val());
		   bean['numberOfWorkInMultiple'] = parseFloat($("#noOfWin"+id).val());
		   if(fieldCount==1){
			   bean['length'] = parseFloat($("#L"+id).val());
		   }else if(fieldCount==2){
			   bean['length'] = parseFloat($("#L"+id).val());
			   bean['breadth'] = parseFloat($("#B"+id).val());
		   }else if(fieldCount==3){
			   bean['length'] = parseFloat($("#L"+id).val());
			   bean['breadth'] = parseFloat($("#B"+id).val());
			   bean['height'] = parseFloat($("#H"+id).val());
		   }	
			return bean;
	}
	 
	 function updateMeasurment(id, fieldCount){
		 var beanObj = prepareBeanForUpdate(id, fieldCount);
		 if(beanObj.detailOfWork == ""){
			 alert("Enter Detail Of Work");
			 return false;
		 }else if(isNaN(beanObj.numberOfWorkRequired)){
			 alert("Number Of Work Mandotary field");
			 return false;
		 }else if(isNaN(beanObj.numberOfWorkInMultiple)){
			 alert("Number Of Work In Multiple Mandotary field");
			 return false;
		 }else if(fieldCount==1){
			 if(isNaN(beanObj.length)){
				 alert("Fill Mandotary field");
				 return false;
			 }
		   }else if(fieldCount==2){
			   if(isNaN(beanObj.length)){
					 alert("Fill Mandotary field");
					 return false;
				 }else if(isNaN(beanObj.breadth)){
					 alert("Fill Mandotary field");
					 return false;
				 }
		   }else if(fieldCount==3){
			   if(isNaN(beanObj.length)){
					 alert("Fill Mandotary field");
					 return false;
				 }else if(isNaN(beanObj.breadth)){
					 alert("Fill Mandotary field");
					 return false;
				 }else if(isNaN(beanObj.height)){
					 alert("Fill Mandotary field");
					 return false;
				 }
		   }
		 $.ajax({
			    type: "POST",
			    contentType: "application/json",
			    url: "updateMeasurementRevised",
			    data: JSON.stringify(beanObj),
			    dataType: 'json',
			    cache: false,
			    success: function (data) {
			      getMeasurmentList(data.itemId);
			    },beforeSend: function () {
					$("#commonLodder").show();
		        },
		        complete: function () {
		        	$("#commonLodder").hide();
		        },
			    error: function (e) {
			    	$("#commonLodder").hide();
			    }
			});
	 }
	 
	 function prepareRateMasterBeanForUpdate (id) {
		   var bean ={};
		   bean['id'] = parseFloat(id);
		   bean['title'] = $("#rateName"+id).val();
		   bean['acpWorkId'] = $('#globalWorkId').val();
			return bean;
	}
	 
	 function updateRateMaster(id){
		 var beanObj = prepareRateMasterBeanForUpdate(id);
		 $.ajax({
			    type: "POST",
			    contentType: "application/json",
			    url: "updateRateAnalysisMasterRevised",
			    data: JSON.stringify(beanObj),
			    dataType: 'json',
			    cache: false,
			    success: function (data) {
			    	getLabourRateAnalysisList($('#globalWorkId').val());
			    },beforeSend: function () {
					$("#commonLodder").show();
		        },
		        complete: function () {
		        	$("#commonLodder").hide();
		        },
			    error: function (e) {
			    }
			});
	 }
	 
	 function deleteSelectedSubData(){
			var chkArray = [];
			$(".lbrcheck:checked").each(function() {
				chkArray.push($(this).val());
			});
			var selected;
			selected = chkArray.join(',');
			
			if (selected.length < 1) {
				alert("Please select at least one checkbox");
				return false;
			}
			else{
				        var trueCheck = confirm("Please Confirm to delete the selected Items !");
				        if (trueCheck == true) {
				        	$('#labourRatListTable').empty();
				        	deleteSubData(selected);
				            return true;
				        }
			}
		}


		function deleteSubData(id){
			var url = "deleteRateSubDataRevised";
			$.ajax({
				type : "GET",
				url : url,
				data : {
					id:id
				},
				cache : false,
				success : function(data) {
					getLabourRateAnalysisList(data.id);
				},
				error : function(request,error) {
					alert(error);
				}
			});
		}
		
		function getRateSubData(){
			getLabourRateAnalysisList($('#globalWorkId').val());
		}
		
		 function deleteDataAnalysis(){
				var chkArray = [];
				$(".analysischeck:checked").each(function() {
					chkArray.push($(this).val());
				});
				var selected;
				selected = chkArray.join(',');
				
				if (selected.length < 1) {
					alert("Please select at least one checkbox");
					return false;
				}
				else{
					        var trueCheck = confirm("Please Confirm to delete the selected Items !");
					        if (trueCheck == true) {
					        	if(chkArray.length > 0 ){
					        		$('#itemDataList'+del).empty();
					        	}
					        	dataAnalysisDelete(selected);
					            return true;
					        }
				}
			}


			function dataAnalysisDelete(id){
				var url = "deleteDataAnalysisData";
				$.ajax({
					type : "GET",
					url : url,
					data : {
						id:id
					},
					cache : false,
					success : function(data) {
						getDataAnalysisList(data.itemId);
					},beforeSend: function () {
						$("#commonLodder").show();
			        },
			        complete: function () {
			        	$("#commonLodder").hide();
			        },
					error : function(request,error) {
						$("#commonLodder").hide();
						alert(error);
					}
				});
			}
			
			function redirectMeasurementFromItem(id){
				$("#itemNav").attr("class","");
				$("#measurementNav").attr("class","active");
				getMeaurement();
			}
			function redirectAnalysisFromItem(id){
				$("#itemNav").attr("class","");
				$("#dataAnalysisNav").attr("class","active");
				getAllDataList();
			}
		 function hideDiv(){
		 $(".hide-div-1").show('slow');
		 $("#hide-div-2").hide('slow');
		 $("#hide-div-btn").hide('slow');
	 }
	 function getLabourMasterList(){
		 $("#hide-div-btn").show('slow');
		 $("#hide-div-2").show('slow');
		 $(".hide-div-1").hide('slow');
			var id=$('#globalWorkId').val();
			$.ajax({
			    type: "GET",
			    contentType: "application/json",
			    url: "labourRateListRevised?workId="+id,
			    data: {},
			    dataType: 'json',
			    cache: false,
			    success: function (data) {
					if (data != null) {
						$('#dataListTable2').empty();
						var count = 1;
						for(var i=0; i<data.length; i++){
							var row = "";
							row += '<div id="accordion" class="panel-group">'
								row += ' <div class="panel panel-default">'
									row += ' <div class="panel-heading">'
							row += '  <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree' + count + '"><strong>ITEM NO ' + count + '</strong>: ' + data[i].title +'</a> </h4>'
								row += ' </div>'
								row += ' <div id="collapseThree' + count + '" class="panel-collapse collapse">'
								row += ' <div class="panel-body">'
							   row += '<div class="table-responsive table-grid margin20 table-z">'
									row += ' <table>'
									row += ' <tbody>'
									row += '<tr>'
									row += '<th colspan="9"><div class="row">'
								    row += '<div class="col-md-4 pd2"> Detail of Sub Data <sup class="red-c">*</sup>'
								    row += '<div class="input">'
								    row += '<input placeholder="" type="text" name="detailOfSubData;" id="detailOfSubData'+data[i].id+'">'
								    row += '</div></div>'
								    row += '<div class="col-md-2 pd2">Rate<sup class="red-c">*</sup> <div class="input">'
								    row += '<input placeholder="" type="text" name="rate" id="rate'+data[i].id+'" maxlength="10" onkeypress="return isNumber(event, this)"></div></div>'
								    row += '<div class="col-md-2 pd2">Unit<sup class="red-c">*</sup><div class="select-one">'
								    row += '<select name="unit" id="unitMaster'+data[i].id+'"><option value="" selected="selected">--Select--</option></select></div></div>'
								    row += '<input type="hidden" value="' + data[i].acpWorkId + '" name="acpWorkId" id="acpWorkId' + data[i].id + '">'
								    row += '<input type="hidden" value="' + data[i].id + '" name="labourMasterId" id="labourMasterId' + data[i].id + '">'
								    row += '<div class="col-md-3 pd2 add-btn-t1"><input id="subDatabtn' + data[i].id + '" type="button" onclick="updateMasterRateData('+data[i].id+')" value="Add"/><input type="button" onclick="resetMasterRate('+data[i].id+')" value="Reset"/></div></div>'
                                 row += ' </th>'
                                 row += ' </tr>'
		                              row += '<tr>'
		                              row += '<td colspan="8" class="select-item-button rcpnew" style="text-align:left;"><button type="button" onclick="deleteLabouNRate();">Delete Selected Items</button>'
		                                row += '<strong>* Please Double Click To Update The Record.</strong> </td>'
		                                  row +='</tr>'
		                              row += '</tbody>'
		                            row += '</table>'
		                           row += '<table>'
		                            row += '<tr>'
	                            	row += '<th width="10%" >Sr No.</th>'
	                            	row += '<th width="10%">Select</th>'	
		                               row += '<th width="36%" ><strong>Detail</strong><sup class="red-c">*</sup></th>'
		                                   row +='<th width="10%" ><strong>Rate</strong><sup class="red-c">*</sup></th>'
		                                   row += '<th width="10%" ><strong>Unit</strong><sup class="red-c">*</sup></th>'
		                                   row += '<th width="20%" ><strong>Total</strong></th>'
		                                   row += '</tr>'
		                                   row += ' <tbody id="viewDataList'+data[i].id+'"></tbody>'
		                               row += '   </table>'
		                            row += '<div ></div>'
		                          row += '    </div>'
		                        row += '   </div>'
		                      row += '  </div>'
		                    row += ' </div>'
							$('#dataListTable2').append($(row));
							addSelect(data[i].id);
							getLabourRateBySubDataId(data[i].id);
							counter = count;
							++count
						};
					}
			    },beforeSend: function () {
					$("#commonLodder").show();
		        },
		        complete: function () {
		        	$("#commonLodder").hide();
		        },error: function (e) {
		        	$("#commonLodder").hide();
			        if(e.responseText == "NOT FOUND"){
			        	$('#dataListTable2 tbody').empty();
			        }
			    }
			});
	}
	 	 
	 function getLabourRateBySubDataId(id) {
			
			$.ajax({
			    type: "GET",
			    contentType: "application/json",
			    url: "labourDetailsList?itemId="+id,
			    data: {},
			    dataType: 'json',
			    cache: false,
			    success: function (data) {
			    	$('#viewDataList'+id).empty();
					if (data != null) {
						var count = 1;
						var total = 0;
						var row2 = "";
						row2 += '<tr>';
						for(var i=0; i<data.length; i++){
							total = total + data[i].totalAmount;
							var row = "";
							row += "<tr ondblclick='editRateDetails(\""+data[i].id+"\",\""+data[i].detailOfSubData+"\",\""+data[i].rate+"\",\""+data[i].unitName+"\","+id+")'>";
							row += '<td>' + count++ + '</td>';
							row += '<td><input class="checkTwo" type="checkbox" value="' + data[i].id + '" name=""></td>';
							row += '<td>' + data[i].detailOfSubData + '</td>';
							row += '<td>' + data[i].rate + '</td>';
							row += '<td>' + data[i].unitName + '</td>';
							row += '<td>' + data[i].totalAmount + '</td>';
							row += '</tr>';
							$('#viewDataList'+id+'').append($(row));
						};
						row2 += '<td >Total</td>';
						row2 += '<td colspan="4"></td>';
						row2 += '<td >' + total.toFixed(2) + '</td>';
						row2 += '</tr>';
						$('#viewDataList'+id+'').append($(row2));
					}
			    },error: function (e) {
			        if(e.responseText == "NOT FOUND"){
			        	$('#viewDataList tbody').empty();
			        }
			    }
			});
	}
	 
	 function editRateDetails(id,detailOfSubData,rate,unitName,itemId){
		 $("#detailOfSubData"+itemId).val(detailOfSubData);
		 $("#rate"+itemId).val(rate);
		 var unitvalue='';
		 $("#unitMaster"+itemId+" option").each(function() {
		  if($(this).text() == unitName) {
		    $(this).attr('selected', 'selected');  
		    unitvalue = this.value;
		  }else{
			$(this).removeAttr('selected'); 
		  }                        
		});
		 $("#unitMaster"+itemId).val(unitvalue);
		 $("#subDatabtn"+itemId).val('Update');
		 $("#subDatabtn"+itemId).attr("onclick","updateDetailRateData("+itemId+","+id+")");
		 
	 }

	 function resetMasterRate(id) {
		  $("#detailOfSubData"+id).val("");
	    	$("#rate"+id).val("");
	    	$("#unitMaster"+id).val("");
			 $("#subDatabtn"+id).val('Add');
			 $("#subDatabtn"+id).attr("onclick","updateMasterRateData("+id+")");
	 }
	 
	 function updateMasterRateData(id){
		 var detailOfSubData = $("#detailOfSubData"+id).val();
		 var rate = $("#rate"+id).val();
		 var unitMaster = $("#unitMaster"+id).val();
		 if (detailOfSubData == ""){
		 	alert("Detail of Sub Data Mandatory field");
		    }else if(rate == ""){
		 	  alert("Rate Mandatory field");
		    }else if(unitMaster == ""){
		 	  alert("Unit Mandatory field");
		    }else{
		    	 var beanObj = prepareBeanForLabourAndRateDetail(id);
				 $.ajax({
					    type: "POST",
					    contentType: "application/json",
					    url: "saveLabourDetailsDataRevised",
					    data: JSON.stringify(beanObj),
					    dataType: 'json',
					    cache: false,
					    success: function (data) {
					    	resetMasterRate(data.labourId);
							$("#successdiv").show();
							$("#successdiv").hide(2500);
					      getLabourRateBySubDataId(data.labourId);
					    },beforeSend: function () {
							$("#commonLodder").show();
				        },
				        complete: function () {
				        	$("#commonLodder").hide();
				        },
					    error: function (e) {
					    	$("#commonLodder").hide();
					    }
					});
		    }
	 }
	 
	 function prepareBeanForLabourAndRateDetailUpdate (id, selfId) {
		   var bean ={};
		   bean['labourMasterId'] = parseFloat($("#labourMasterId"+id).val());
		   bean['detailOfSubData'] = $("#detailOfSubData"+id).val();
		   bean['rate'] = parseFloat($("#rate"+id).val());
		   bean['unit'] = parseFloat($("#unitMaster"+id).val());
		   bean['id'] = selfId;
		   return bean;
	} 
	 
	 function updateDetailRateData(id,selfId){
		 var beanObj = prepareBeanForLabourAndRateDetailUpdate(id, selfId);
		 $.ajax({
			 type: "POST",
			 contentType: "application/json",
			 url: "updateLabourDetails",
			 data: JSON.stringify(beanObj),
			 dataType: 'json',
			 cache: false,
			 success: function (data) {
				 resetMasterRate(data.labourId);
				 getLabourRateBySubDataId(data.labourId);
			 },beforeSend: function () {
				 $("#commonLodder").show();
			 },
			 complete: function () {
				 $("#commonLodder").hide();
			 },
			 error: function (e) {
				 $("#commonLodder").hide();
			 }
		 });
	 }
	 
	 function prepareBeanForLabourAndRateDetail (id) {
		   var bean ={};
		   bean['labourMasterId'] = parseFloat($("#labourMasterId"+id).val());
		   bean['detailOfSubData'] = $("#detailOfSubData"+id).val();
		   bean['rate'] = parseFloat($("#rate"+id).val());
		   bean['unit'] = parseFloat($("#unitMaster"+id).val());
		   return bean;
	} 
	 
	 function deleteLabouNRate(){
			var chkArray = [];
			$(".checkTwo:checked").each(function() {
				chkArray.push($(this).val());
			});
			var selected;
			selected = chkArray.join(',');
			
			if (selected.length < 1) {
				alert("Please select at least one checkbox");
				return false;
			}
			else{
		        var trueCheck = confirm("Please Confirm to delete the selected Items !");
		        if (trueCheck == true) {
		        	deleteLabourRate(selected);
		            return true;
		        }
			}
	 }
	 
	 function deleteLabourRate(id){
			var url = "deleteLabourDetails";
			$.ajax({
				type : "GET",
				url : url,
				data : {
					id:id
				},
				cache : false,
				success : function(data) {
					getLabourRateBySubDataId(data.itemId);
				},beforeSend: function () {
					$("#commonLodder").show();
		        },
		        complete: function () {
		        	$("#commonLodder").hide();
		        },
				error : function(request,error) {
					$("#commonLodder").hide();
					alert(error);
				}
			});
		}
		
		 function getAllAbstractList(){
			var workId=$('#globalWorkId').val();
			 $.ajax({
			    type: "GET",
			    contentType: "application/json",
			    url: "abstractListRevised",
			    data: {
			    	acpWorkId:workId,
			    },
			    dataType: 'json',
			    cache: false,
			    success: function (data) {
					if (data != null) {
						$('#absctTable').empty();
						var count = 1;
						for(var i=0; i<data.length; i++){
							var row = "";
							row += '<div id="accordion" class="panel-group">'
								row += ' <div class="panel panel-default">'
									row += ' <div class="panel-heading">'
							row += '  <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour' + count + '"><strong>ITEM NO ' + count + '</strong>: ' + data[i].title + ' [ UNIT- ' + data[i].unitName + ']</a> </h4>'
								row += ' </div>'
								row += ' <div id="collapseFour' + count + '" class="panel-collapse collapse">'
								row += ' <div class="panel-body">'
							   row += '<div class="table-responsive table-grid margin20 table-z">'
									row += ' <table>'
									row += ' <tbody>'
									row += '<tr>'
									row += '<th><div class="row">'
								    row += '<div class="col-md-4 pd2">Quantity'
								    row += '<div class="input">'
								    row += '<input placeholder="" type="text" name="quantity;" id="quantity'+data[i].totalQuantity+'" onclick="redirectAbstractToMeasurement('+data[i].id+')" value="'+data[i].totalQuantity+'">'
								    row += '</div></div>'
								    row += '<div class="col-md-2 pd2">Rate <div class="input">'
								    row += '<input placeholder="" type="text" name="rate" id="rate'+data[i].id+'" onclick="redirectAbstractToAnalysis()"  value="'+data[i].rate.toFixed(2)+'" onkeypress="return isNumber(event, this)"></div></div>'
								    row += '<div class="col-md-2 pd2">Amount <div class="input">'
									row += '<input placeholder="" type="text" name="rate" id="rate'+data[i].id+'" disabled="disabled" value="'+data[i].totalAmount.toFixed(2)+'" onkeypress="return isNumber(event, this)"></div></div>'
								    row += ' </th>'
                                    row += ' </tr>'
                                	row += '<tr>'
                            		row += '<th><div class="row">'
								    row += '<div class="col-md-6 pd2">Remarks'
								    row += '<div class="input">'
								    row += '<textarea rows="4" cols="50" placeholder="" type="text" name="remarks" id="remarks'+data[i].itemId+'">'+(data[i].remarks != null ? data[i].remarks : '')+'</textarea>'
								    row += '</div></div>'
								    row += '<div class="col-md-2 pd2">&nbsp;<div class="input"><input type="button" value="'+(data[i].remarks != null ? 'Update ': 'Add')+'" class="button1 " onclick="addRemarks('+data[i].itemId+','+data[i].id+')"/></div></div>'
								    row += ' </th>'
                            		row += ' </tr>'
                            		row += '</tbody>'
		                            row += '</table>'
		                            row += '<div ></div>'
		                          row += '    </div>'
		                        row += '   </div>'
		                      row += '  </div>'
		                    row += ' </div>'
							$('#absctTable').append($(row));
							++count
						};
					}
			    },beforeSend: function () {
					$("#commonLodder").show();
		        },
		        complete: function () {
		        	$("#commonLodder").hide();
		        },error: function (e) {
		        	$("#commonLodder").hide();
			        if(e.responseText == "NOT FOUND"){
			        	$('#absctTable tbody').empty();
			        }
			    }
			});
	}
		 function getAutoValue(id){
		 $("#labourOrRateAnalysisName"+id).autocomplete({
	         source: function (request, response) {
	        	 var data = {
		    				'id' : $("#acpWorkId"+id).val(),
		    				'name' : $("#labourOrRateAnalysisName"+id).val()
		    		}
	             $.ajax({
	                 type: 'POST',
	                 data : data,
	                 url: "rateSubData" ,
	                 success: function (data) {

	                     var items = [];
	                     data.forEach(function (value, index) {
	                         /*console.log(value + " " + index);*/
	                         if(value.rate == null){
	                        	 value.rate = 0           //if null rate then default value set 
	                         }
	                         items.push({
	                             label: value.title,
	                             value: value.title,
	                             value1: value.rate,
	                         })

	                     })
	                     response(items);
	                 },
	                 error: function (response) {
	                     console.log("error while fetching items" + response)
	                 }

	             });
	         },
	         select: function (event, ui) {
	             $("#labourOrRateAnalysisName"+id).val(ui.item.label);
	             $("#rate"+id).val(ui.item.value1);
	             return false;
	         }
	       });
		 }
		 
		 function redirectAbstractToMeasurement(id){
				$(".myMeasurementLink").click();
			}
			function redirectAbstractToAnalysis(id){
				$(".myDataAnalysis").click();
			}
			
			function isNumber(evt, element) {
		        var charCode = (evt.which) ? evt.which : event.keyCode

		        if (
		            (charCode != 45 || $(element).val().indexOf('-') != -1) &&      // “-” CHECK MINUS, AND ONLY ONE.
		            (charCode != 46 || $(element).val().indexOf('.') != -1) &&      // “.” CHECK DOT, AND ONLY ONE.
		            (charCode < 48 || charCode > 57))
		            return false;

		        return true;
		    }
			
			function rcpCreated(){
				if($("#globalWorkId").val() ==0){
					return false;
				}else{
					return true;
				}
			}

			function itemFormSubmit() {
					formSubmit();
			}		
			
			function toggleReasonForReworkDiv(){
				$("#reasonForAgainSubmission").val(null);
				 if(!$("#notOccuredInLast5years").is(":checked")){
					 $("#notOccuredInLast5years").val(false);					 
					 $("#reasonForReworkDiv").show();
				 }else{
					 $("#notOccuredInLast5years").val(true);
					 $("#reasonForReworkDiv").hide();
				 }				
			}
			
			function prepareBeanForAbstract(itemId, id) {
			   var bean ={};
			   bean['itemId'] = itemId;
			   bean['id'] = id;
			   bean['remarks'] =  $("#remarks"+itemId).val();;
			   return bean;
			}
			
			function addRemarks(itemId, id) {
				 var beanObj = prepareBeanForAbstract(itemId,id);
				 if(beanObj.remarks == ""){
					 alert("Enter Remarks");
					 return false;
				 }
				$.ajax({
				    type: "POST",
				    contentType: "application/json",
				    url: "saveAbstractSheetDataRevised",
				    data: JSON.stringify(beanObj),
				    dataType: 'json',
				    cache: false,
				    success: function (data) {
				      $("#successdiv").show();
				      $("#successdiv").hide(2500);
				      getAllAbstractList();
				    },beforeSend: function () {
						$("#commonLodder").show();
			        },
			        complete: function () {
			        	$("#commonLodder").hide();
			        },
				    error: function (e) {
				    	$("#commonLodder").hide();
				    }
				});
			 }
			

			function showLabourDataHistory(divId)
			{

				$("#myModal1").modal('show');
				$.ajax({
				    type: "GET",
				    contentType: "application/json",
				    url: "labourListRevisedHistory?id="+divId,
				    data: {},
				    dataType: 'json',
				    cache: false,
				    success: function (data) {
				    	del1 = id;
						if (data != null) {
							$('#listDataTable tbody').empty();
							
							for(var i=0; i<data.length; i++){
								fieldCount=0;
								//checkupdate=data[i].updateMeasure;
								var row1 = "";
								row1 += '<tr>';
								row1 += '<td>' + data[i].rateAnalysisName + '</td>';
								row1 += '<td>' + data[i].purpose + '</td>';
								row1 += '<td>' + data[i].quantity + '</td>';
								row1 += '<td>' + data[i].rate + '</td>';
								row1 += '<td>' + data[i].unitName + '</td>';
								row1 += '<td>' + data[i].totalAmount + '</td>';
								row1 += '<td>' + data[i].updatedDate + '</td>';
								row1 += '<td>' + data[i].name + '</td>';
								row1 += '</tr>';
								row1 += '<tr>'
	                            row1 += '</tr>'
								$('#listDataTable').append($(row1));
							};
						};
				    },beforeSend: function () {
						$("#commonLodder").show();
			        },
			        complete: function () {
			        	$("#commonLodder").hide();
			        },error: function (e) {
			        	$("#commonLodder").hide();
				        if(e.responseText == "NOT FOUND"){
				        	$('#mesurmentLst"'+id+'" tbody').empty();
				        }
				    }
				});
			}
			
			function showHistory(divId)
			{
				$("#myModal").modal('show');
				$.ajax({
				    type: "GET",
				    contentType: "application/json",
				    url: "measurmentListRevisedHistoryRevised?id="+divId,
				    data: {},
				    dataType: 'json',
				    cache: false,
				    success: function (data) {
						if (data != null) {
							$('#listTableTable tbody').empty();
						
							for(var i=0; i<data.length; i++){
								var abc = new Date(data[i].createdAt);
								var date=  abc.getDate() + '/'+(abc.getMonth() + 1)+ '/' +  abc.getFullYear();
								//$("#munit").text("Measurement ("+data[i].unitname+")");
								if(data[i].unitname=='M2')
									{
									$("#munit").text("Length(C)");
									$('#mwidth').text("Width(D)");
									$('#mheight').text('');
									}
								
								else if(data[i].unitname=='M3')
									{
									$("#munit").text("Length(C)");
									
									$('#mwidth').text("Width(D)");
									$('#mheight').text("Height(E)");
									}
								else
									{
									$("#munit").text("("+data[i].unitname+")(C)");
									$('#mwidth').text('');
									$('#mheight').text('');
									}
								
								
								fieldCount=0;
								checkupdate=data[i].updateMeasure;
								var row1 = "";
								row1 += '<tr>';
								row1 += '<td>' + data[i].detailOfWork + '</td>';
								row1 += '<td>' + data[i].numberOfWorkRequired + '</td>';
								row1 += '<td>' + data[i].numberOfWorkInMultiple + '</td>';
								row1 += '<td>' + data[i].length + '</td>';
								if(data[i].breadth!=null)
								row1 += '<td>' + data[i].breadth + '</td>';
								else
									row1 += '<td></td>';	
								if(data[i].height!=null)
									row1 += '<td>' + data[i].height + '</td>';
								else
									row1 += '<td> </td>';
								row1 += '<td>' + data[i].quantity + '</td>';
								row1 += '<td>' + data[i].updatedDate + '</td>';
								row1 += '<td>' + data[i].name + '</td>';
								row1 += '</tr>';
								row1 += '<tr>'
	                            row1 += '</tr>'
								$('#listTableTable').append($(row1));
							};
						};
				    },beforeSend: function () {
						$("#commonLodder").show();
			        },
			        complete: function () {
			        	$("#commonLodder").hide();
			        },error: function (e) {
			        	$("#commonLodder").hide();
				        if(e.responseText == "NOT FOUND"){
				        	$('#mesurmentLst"'+id+'" tbody').empty();
				        }
				    }
				});
		
			}
			
			function removeRevisedDrawingFile(id)
			{
				 var trueCheck = confirm("Are you sure to remove selected file !");
			        if (trueCheck == true) {
			        	
			        	var globalId=$('#globalWorkId').val();
						var url = "deleteDrawingFilesRevised";
						$.ajax({
							type : "GET",
							url : url,
							data : {
								id:id
							},
							cache : false,
							success : function(data) {
							if(data.id=='success')
								{
								window.location.href = "/eASI/conservation/consrcp/editWorkEstimation-"+globalId+"-false";
								}
							else
								{
								alert("ERROR!")
								}
								
							},
							error : function(request,error) {
								alert(error);
							}
						});
			        }
				
				
			}
			
			function removeRevisedImageFile(id)
			{
				 var trueCheck = confirm("Are you sure to remove selected file !");
			        if (trueCheck == true) {
			        	
			        	var globalId=$('#globalWorkId').val();
						var url = "deleteImagesFilesRevised";
						$.ajax({
							type : "GET",
							url : url,
							data : {
								id:id
							},
							cache : false,
							success : function(data) {
							if(data.id=='success')
								{
								window.location.href = "/eASI/conservation/consrcp/editWorkEstimation-"+globalId+"-false";
								}
							else
								{
								alert("ERROR!")
								}
								
							},
							error : function(request,error) {
								alert(error);
							}
						});
			        }
				
				
			}
			
			