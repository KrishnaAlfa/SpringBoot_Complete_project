var vendorUrl = "/eASI/easi/vendor/"
var quotationUrl = "/eASI/easi/quotation/"
var finalQuotationVendorId = null;

function addVendor() {
	
	var vName=$("#vendorName").val();
	var state=$("#states").val();
	var city=$('#cities').val();
	var district=$('#districts').val();
	
	if(vName=='')
		{
		alert("Please select Vendor Name!");
		return false;
		}
	if(state=='')
	{
		alert("Please select State!");
		return false;
	}
	if(city=='')
	{
		alert("Please select City!");
		return false;
	}
	if(district=='')
	{
		alert("Please select District!");
		return false;
	}

	
	$.ajax({
		url : vendorUrl,
		type : "post",
		data : vendorInfoJson(),
		contentType : "application/json",
		success : function(data) {
			console.log("success");
			alert("page successfully saved");
			window.location = vendorUrl + "main";
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log("failure");
		}
	});

}

function vendorInfoJson() {
	var addressLines = $('#address').val().split('\n');
	return JSON.stringify({
		"name" : $('#vendorName').val(),
		"ownerName" : $('#ownerName').val(),
		"emailId" : $('#vendorEmailId').val(),
		"mobileNumber" : $('#vendorMobile').val(),
		"address" : {
			"ADDRESS_LINE_1" : addressLines.length > 0 ? addressLines[0] : "",
			"ADDRESS_LINE_2" : addressLines.length > 1 ? addressLines[1] : "",
			"CITY_ID" : $('#cities').val(),
			"STATE_ID" : $('#states').val(),
			"DISTRICT_ID" : $('#districts').val(),
			"PIN_CODE" : $('#pincode').val()
		}
	});
}

function populateVendors() {
	$
			.ajax({
				url : vendorUrl + "/vendors",
				type : "get",
				success : function(data) {
					var vendors = data.payload;
					$('#vendorTable td').remove();
					$(function() {
						$
								.each(
										vendors,
										function(index) {
											var vendor = vendors[index]
											var id = vendor.id;
											var $tr = $('<tr>')
													.append(
															$('<td>')
																	.text(
																			vendor.name),
															$('<td>')
																	.text(
																			vendor.address['CITY_NAME']),
															$('<td>')
																	.text(
																			vendor.address['STATE_NAME']),
															$('<td>')
																	.html(
																			"<a href='/eASI/easi/vendor/view-" + id + "' class='tooltip-top' data-tooltip='View' ><i class='fa fa-eye'></i></a><a href=javascript:void class='tooltip-top' data-tooltip='Delete' onclick=deleteVendor('"
																					+ id
																					+ "')><i class='fa fa-trashk'></i></a>"))
													.appendTo('#vendorTable');

										});
					});
				},
				error : function(jqXHR, textStatus, errorThrown) {
					console.log("failure");
				}
			});
}

function deleteVendor(vendorId) {
	if (confirm("Are you sure want to delete this Page?")) {
		$.ajax({
			url : vendorUrl + vendorId,
			type : "delete",
			contentType : "application/json",
			success : function(data) {
				console.log("success");
				alert("Page Deleted Successfully");
				populateVendors();
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("failure");
			}
		});
	}
}

function viewVendor() {
	
	
	
	

}

function listVendor() {
	window.location = vendorUrl + "main";
}

function populateVendorsDropDown(id) {
	$.ajax({
		url : vendorUrl + "vendors",
		type : "get",
		success : function(data) {
			var vendors = data.payload;
			var options = $("#" + id);
			options.children().remove();
			var isFirst = true;
			$.each(vendors, function(index) {
				var vendor = vendors[index]
				options
						.append($("<option />").val(vendor.id)
								.text(vendor.name));
				if (isFirst) {
					$("#vendor").val(vendor.id);
					isFirst = false;
				}
			});
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log("failure");
		}
	});
}

function sendQuotationInfo(indentReferenceNumber) {
	
	var vendDrop=$("#vendors1").val();
	
	if(vendDrop)
		{
		$.ajax({
			url : quotationUrl + "send/" + indentReferenceNumber,
			type : "post",
			data : quotationInfoJson(indentReferenceNumber),
			contentType : "application/json",
			success : function(data) {
				var vendors = data.payload;
				var options = $("#vendors2");
				options.children().remove();
				options.append($("<option />").text('Select Vendor'));
				$.each(vendors, function(index) {
					var vendor = vendors[index]
					options
							.append($("<option />").val(vendor.id)
									.text(vendor.name));
				});
				alert("Quotation send Successfully ");
				
				
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("failure");
			}
		});
		}
	else
		{
		alert("Please select vendors!")
		}
	
}

function quotationInfoJson(indentReferenceNumber) {

	var vendors = [];
	$("#vendors1").val().forEach(function(vendor) {
		vendors.push(vendor)
	});

	return JSON.stringify(vendors);
}

function updateVendorInFile() {
	var vendor = $("#vendors2").val();
	$("#vendor").val(vendor);
}

function populateVendorQuotations(indentReferenceNumber) {
	$
			.ajax({
				url : quotationUrl + "compare/" + indentReferenceNumber,
				type : "get",
				success : function(data) {
					var quotationInfo = data.payload;
					$('#compareQuotation td').remove();
					var indentInfo = quotationInfo.indentInfo;
					var vendorQuotations = quotationInfo.vendorQuotations;

					var currentTotal = 0;
					$.each(vendorQuotations, function(index) {
						var vendorInfo = vendorQuotations[index];
						var total = vendorInfo.total;
						if (finalQuotationVendorId == null) {
							finalQuotationVendorId = vendorInfo.vendor;
							currentTotal = total;
						} else if (total < currentTotal) {
							finalQuotationVendorId = vendorInfo.vendor;
							currentTotal = total;
						}

					});

					var $tr1 = $('<tr>').append($('<th>').text('Code'),
							$('<th>').text('Product'),
							$('<th>').text('Quantity'));

					$.each(vendorQuotations, function(index) {
						var vendorInfo = vendorQuotations[index];
						$tr1.append($('<th>').attr('colspan', 3).text(
								vendorInfo.vendorName))
					});

					$tr1.appendTo('#compareQuotation');

					var $tr2 = $('<tr>').append($('<td>').text(''),
							$('<td>').text(''),
							$('<td>').text(''));

					$.each(vendorQuotations, function(index) {
						var vendorInfo = vendorQuotations[index]
						if (vendorInfo.vendor == finalQuotationVendorId) {
							$tr2
									.append($('<td class="green">').text(
											'Rs/Unit'), $('<td class="green">').text(
											'Tax(%)'), $('<td class="green">')
											.text('Total'))
						} else {
							$tr2.append($('<td>').text('Rs/Unit'), $('<td>').text('Tax(%)'), $('<td>')
									.text('Total'))
						}
					});
					$tr2.appendTo('#compareQuotation');

					var products = indentInfo.products;
					$.each(products, function(index) {
						var product = products[index]
						var $tr = $('<tr>').append(
								$('<td>').text(product.code),
								$('<td>').text(product.name),
								$('<td>').text(product.quantity));

						$.each(vendorQuotations, function(index) {
							var vendorInfo = vendorQuotations[index];
							var quotation = vendorInfo.quotations;
							var quotationInfo = quotation[product.name];
							if (vendorInfo.vendor == finalQuotationVendorId) {
								$tr.append($('<td class="green">').text(
										quotationInfo['Rs/Unit']), $('<td class="green">').text(
												quotationInfo['Tax']), $(
										'<td class="green">').text(
										quotationInfo['Total']))
							} else {
								$tr.append($('<td>').text(
										quotationInfo['Rs/Unit']), $('<td>').text(
												quotationInfo['Tax']), $('<td>')
										.text(quotationInfo['Total']))
							}
						});

						$tr.appendTo('#compareQuotation');

					});

					var $tr3 = $('<tr>').append($('<td>').text(''),
							$('<td>').text(''),
							$('<td>').text(''));
					$.each(vendorQuotations, function(index) {
						var vendorInfo = vendorQuotations[index];
						var total = vendorInfo.total;
						if (vendorInfo.vendor == finalQuotationVendorId) {
							$tr3.append($('<td class="green">').text(''), $('<td class="green">').text(''), $(
									'<td class="green">').text(total))
						} else {
							$tr3.append($('<td>').text(''), $('<td>').text(''), $('<td>').text(
									total))
						}
					});

					$tr3.appendTo('#compareQuotation');

					console.log('-' + finalQuotationVendorId + '-'
							+ currentTotal)
				},
				error : function(jqXHR, textStatus, errorThrown) {
					console.log("failure");
				}
			});
}

function finalizeQuotation(referenceNumber) {
	console.log("Finalize Quotation");
	$.ajax({
		url : quotationUrl + "finalize/" + referenceNumber + "/"
				+ finalQuotationVendorId,
		type : "put",
		contentType : "application/json",
		success : function(data) {
			alert("Quotation send Successfully ");
			window.location = "/eASI/storemanager/listindentrecurring";
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log("failure");
		}
	});
}

function populateQuotationSubmitInfo(indentReferenceNumber) {
	$.ajax({
		url : quotationUrl + "indent-quotations/" + indentReferenceNumber,
		type : "get",
		success : function(data) {
			var info = data.payload;
			console.log(info)
			$('#vendorQuotationTb td').remove();

			var $tr1 = $('<tr>').append($('<th>').text('Select'),
					$('<th>').text('Vendor Name'),
					$('<th>').text('Date Recieved on'),
					$('<th>').text('Submitted by'));
			$tr1.appendTo('#vendorQuotationTb');

			$.each(info, function(index) {
				var vendorInfo = info[index];
				var checkBox = '<input value="" type="checkbox"/>';
				var date = new Date(vendorInfo.receivedOn);
				var fileDownload = quotationUrl + "download/"
						+ vendorInfo.vendor.id + "/" + indentReferenceNumber;
				$tr2 = $('<tr>').append(
						$('<td>').append(checkBox),
						$('<td>').text(vendorInfo.vendor.name),
						$('<td>').text(date),
								/*date.getDate() + '/' + date.getMonth() + '/'
										+ date.getFullYear()),*/
						$('<td>').text(vendorInfo.submittedBy)
						);
				$tr2.appendTo('#vendorQuotationTb');
			});
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log("failure");
		}
	});
}

function populateIndentVendors(id, indentReferenceNumber) {
	$.ajax({
		url : vendorUrl + "vendors/" + indentReferenceNumber,
		type : "get",
		success : function(data) {
			var vendors = data.payload;
			var options = $("#" + id);
			options.children().remove();
			options.append($("<option value=''/>").text('Select Vendor'));
			$.each(vendors, function(index) {
				var vendor = vendors[index]
				options
						.append($("<option />").val(vendor.id)
								.text(vendor.name));
			});
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log("failure");
		}
	});
}