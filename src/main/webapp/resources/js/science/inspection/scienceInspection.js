/**
 * @author Vineet Singh
 * 
 */
function getContextPath() {
	return window.location.pathname.substring(0, window.location.pathname
			.indexOf("/", 2));
}

function dashboard() {
	window.location.href = getContextPath() + "/science/inspection/main";
}

function toggleOtherField(index) {
	if (index == 3) {
		$(".otherDiv").show();
	} else {
		$(".otherDiv").hide();
	}
}

function submitForm(index) {
	var validator = $("#inspectionForm").validate({
		ignore : '',
		rules : {
			recommendedBy : "required",
			circleid : "required",
			subcircleid : "required",
			monumentid : "required",
			purpose : "required"
		}
	});

	if ($('#recommendedBy').val() == 3) {
		if ($('#recommendedByOther').val() == '') {
			alert("Please Specify Other Type");
			return;
		}
	}

	if (validator.form()) {
		$("#saveAsDraft").val(index);
		$
				.ajax({
					url : getContextPath() + "/science/inspection/new",
					type : "post",
					data : infoJson(),
					contentType : "application/json",
					success : function(data) {
						window.location = getContextPath()
								+ "/science/inspection/main";
						alert("page successfully saved");
					},
					beforeSend : function() {
						// Code to display spinner
						$('#loader').show();
					},
					complete : function() {
						// Code to hide spinner.
						$('#loader').hide();
					},
					error : function(jqXHR, textStatus, errorThrown) {
						console.log("failure");
						$('#loader').hide();
					}
				});
	}
}

function search() {
	$.ajax({
		url : getContextPath() + "/science/inspection/main",
		type : "post",
		data : searchJson(),
		contentType : "application/json",
		success : function(data) {
			setListPage(data);
		},
		beforeSend : function() {
			// Code to display spinner
			$('#loader').show();
		},
		complete : function() {
			// Code to hide spinner.
			$('#loader').hide();
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log("failure");
			$('#loader').hide();
		}
	});
}

function searchJson() {
	return JSON.stringify({
		"regionid" : $('#regionid').val(),
		"circleid" : $('#circleid').val(),
		"subcircleid" : $('#subcircleid').val(),
		"monumentid" : $('#monumentid').val()
	});
}

function infoJson() {
	return JSON.stringify({
		"recommendedBy" : $('#recommendedBy').val(),
		"circleid" : $('#circleid').val(),
		"subcircleid" : $('#subcircleid').val(),
		"recommendedByOther" : $('#recommendedByOther').val(),
		"monumentid" : $('#monumentid').val(),
		"purpose" : $('#purpose').val(),
		"relatedDocPath" : $('#relatedDocPath').val(),
		"saveAsDraft" : $('#saveAsDraft').val()
	});
}

function populateInspections(can_edit, can_delete) {
	$.ajax({
		url : getContextPath() + "/science/inspection/list",
		type : "get",
		success : function(data) {
			setListPage(data);
		},
		beforeSend : function() {
			// Code to display spinner
			$('#loader').show();
		},
		complete : function() {
			// Code to hide spinner.
			$('#loader').hide();
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log("failure");
			$('#loader').hide();
		}
	});
}

function addOption(selectId, data) {
	$('#' + selectId).empty();
	var option = '<option value="">All</option>';
	$.each(data, function(index, value) {
		option = option + '<option value="' + value[0] + '">' + value[1]
				+ '</option>';
	});
	$('#' + selectId).append(option);
}

function resetFilter() {
	regionId.selectedIndex = 0;
	circleid.selectedIndex = 0;
	subcircleid.selectedIndex = 0;
	monumentid.selectedIndex = 0;
	$("#projectName").val(null);
	statusId.selectedIndex = 0;
	rcpId.selectedIndex = 0;
	financialYearId.selectedIndex = 0;
	planId.selectedIndex = 0;
}

function setListPage(data) {
	var payload = data.payload;
	if(payload.regionList != null)
		addOption('regionid', payload.regionList);
	if(payload.circleList != null)
	addOption('circleid', payload.circleList);
	if(payload.subCircleList != null)
	addOption('subcircleid', payload.subCircleList);
	if(payload.monumentList != null)
	addOption('monumentid', payload.monumentList);

	if (payload.commonFilter.scienceInspectionFilter.hasToDisable == 2) {
		var regionid = payload.commonFilter.scienceInspectionFilter.regionid;
		if (regionid != '') {
			$("#regionid").val(regionid);
			$('.regionidDiv').attr('style', 'pointer-events: none');
		}
	} else if (payload.commonFilter.scienceInspectionFilter.hasToDisable == 3) {
		var circleid = payload.commonFilter.scienceInspectionFilter.circleid;
		var regionid = payload.commonFilter.scienceInspectionFilter.regionid;
		if (regionid != '') {
			$("#regionid").val(regionid);
			$('.regionidDiv').attr('style', 'pointer-events: none');
		}
		if (circleid != '') {
			$("#circleid").val(circleid);
			$('.circleidDiv').attr('style', 'pointer-events: none');
		}
	} else if (payload.commonFilter.scienceInspectionFilter.hasToDisable == 4) {
		var circleid = payload.commonFilter.scienceInspectionFilter.circleid;
		var regionid = payload.commonFilter.scienceInspectionFilter.regionid;
		var subcircleid = payload.commonFilter.scienceInspectionFilter.subcircleid;
		if (regionid != '') {
			$("#regionid").val(regionid);
			$('.regionidDiv').attr('style', 'pointer-events: none');
		}
		if (circleid != '') {
			$("#circleid").val(circleid);
			$('.circleidDiv').attr('style', 'pointer-events: none');
		}
		if (subcircleid != '') {
			$("#subcircleid").val(subcircleid);
			$('.subcircleidDiv').attr('style', 'pointer-events: none');
		}
	}

	var inspections = payload.commonFilter.scienceInspectionResponses;
	$('#vendolistTablerTable td').remove();
	$(function() {
		$
				.each(
						inspections,
						function(index) {
							var inspection = inspections[index]
							var id = inspection.id;
							var $tr = $('<tr>')
									.append(
											$('<td>').text(index + 1),
											$('<td>')
													.text(
															(inspection.recommendedBy == 0 ? "Circle"
																	: (inspection.recommendedBy == 1 ? "VIP"
																			: (inspection.recommendedBy == 2 ? "HQ"
																					: inspection.recommendedByOther)))),
											$('<td>').text(
													inspection.circleName),
											$('<td>').text(
													inspection.subCircleName),
											$('<td>').text(
													inspection.monumentName),
											$('<td>')
													.html(
															"<a href='view-"
																	+ id
																	+ "' class='tooltip-top' data-tooltip='View'><i class='fa fa-eye'></i></a>"
//																	+ (payload.can_edit ? (inspection.saveAsDraft == 0 ? ""
//																			: "<a href=javascript:void class='tooltip-top' data-tooltip='Edit' onclick=edit('"
//																					+ id
//																					+ "')><i class='fa fa-edit'></i></a>")
//																			: "")
																	))
									.appendTo('#listTable');
						});
	});
}

function populateCircle() {
	$
			.ajax({
				type : 'GET',
				url : getContextPath() + "/circle/getcirclebyregionid-",
				success : function(data) {
					var option = "";
					$('#circleid').empty();
					$('#subcircleid').empty();
					$('#subcircleid').append(
							"<option value=''>Select Sub Circle</option>");
					$('#monumentid').empty();
					$('#monumentid').append(
							"<option value=''>Select Monument</option>");
					option = option
							+ "<option value='' selected='selected'>Select Circle</option>";
					for (var i = 0; i < data.length; i++) {
						option = option + "<option value='" + data[i][0] + "'>"
								+ data[i][1] + "</option>";
					}
					$('#circleid').append(option);
				},
				beforeSend : function() {
					// Code to display spinner
					$('#loader').show();
				},
				complete : function() {
					// Code to hide spinner.
					$('#loader').hide();
					;
				},
				error : function() {
					alert("error while getting circles");
				}
			});
}

function getCircle(regionid) {
	$.ajax({
		type : 'GET',
		url : getContextPath() + "/circle/getcirclebyregionid-" + regionid,
		success : function(data) {
			var option = "";
			$('#circleid').empty();
			$('#subcircleid').empty();
			$('#subcircleid').append("<option value=''>All</option>");
			$('#monumentid').empty();
			$('#monumentid').append("<option value=''>All</option>");
			option = option
					+ "<option value='' selected='selected'>All</option>";
			for (var i = 0; i < data.length; i++) {
				option = option + "<option value='" + data[i][0] + "'>"
						+ data[i][1] + "</option>";
			}
			$('#circleid').append(option);
		},
		error : function() {
			alert("error while getting circles");
		}
	});
};

function getSubCircle(circleid) {
	$
			.ajax({
				type : 'GET',
				url : getContextPath() + "/subcircle/getsubcirclebycircleid-"
						+ circleid,
				success : function(data) {
					var option = "";
					$('#subcircleid').empty();
					$('#monumentid').empty();
					$('#monumentid').append(
							"<option value=''>Select Monument</option>");
					option = option
							+ "<option value='' selected='selected'>Select Sub Circle</option>";
					for (var i = 0; i < data.length; i++) {
						option = option + "<option value='" + data[i][0] + "'>"
								+ data[i][1] + "</option>";
					}
					$('#subcircleid').append(option);
				},
				beforeSend : function() {
					// Code to display spinner
					$('#loader').show();
				},
				complete : function() {
					// Code to hide spinner.
					$('#loader').hide();
					;
				},
				error : function() {
					alert("error while getting sub circles");
				}
			});
};

function getMonument(subcircleid) {
	$
			.ajax({
				type : 'GET',
				url : getContextPath() + "/monument/getmonumentbysubcircleid-"
						+ subcircleid,
				success : function(data) {
					var option = "";
					$('#monumentid').empty();
					option = option
							+ "<option value='' selected='selected'>Select Monument</option>";
					for (var i = 0; i < data.length; i++) {
						option = option + "<option value='" + data[i][0] + "'>"
								+ data[i][1] + "</option>";
					}
					$('#monumentid').append(option);
				},
				beforeSend : function() {
					// Code to display spinner
					$('#loader').show();
				},
				complete : function() {
					// Code to hide spinner.
					$('#loader').hide();
					;
				},
				error : function() {
					alert("error while getting monuments");
				}
			});
};