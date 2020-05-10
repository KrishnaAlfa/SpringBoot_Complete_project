var commonCounter = 0;
$(document)
		.ready(
				function() {

					$("#personalTab").click(function() {
						var appids = parseInt($("#checkAppId").val());
						if (appids != 0) {
							$("#personal").show();
							$("#sitedetail").hide();
							$("#projectdetail").hide();
							$("#team").hide();
						}
					});
					$("#sitedetailTab").click(function() {
						var formid = parseInt($("#formId").val());
						if (formid != 0) {
							$("#personal").hide();
							$("#sitedetail").show();
							$("#projectdetail").hide();
							$("#team").hide();
						}
					});
					$("#projectdetailTab").click(function() {
						var prid = parseInt($("#formProjectId").val());
						if (prid != 0) {
							$("#personal").hide();
							$("#sitedetail").hide();
							$("#projectdetail").show();
							$("#team").hide();
						}
					});
					$("#teamTab").click(function() {
						if ($("#applicationTeamName").val() != "") {
							$("#personal").hide();
							$("#sitedetail").hide();
							$("#projectdetail").hide();
							$("#team").show();
						}
					});

					$("#personal").show();
					$("#sitedetail").hide();
					$("#projectdetail").hide();
					$("#team").hide();

					/*
					 * $("#personal").show(); $("#sitedetail").hide();
					 * $("#projectdetail").hide(); $("#team").hide();
					 */

					$("#buttonForm1")
							.click(
									function() {
										if (validator.form()) {
											$("#form1")
													.submit(
															function(e) {
																e
																		.preventDefault();
																var url = "registerHistoryFormPersonal";
																$
																		.ajax({
																			type : "POST",
																			url : url,
																			data : $(
																					"#form1")
																					.serialize(),
																			cache : false,
																			success : function(
																					data) {
																				var id = JSON
																						.parse(data.id);
																				$(
																						"#formId")
																						.val(
																								id);
																				$(
																						"#personal")
																						.hide();
																				$(
																						"#sitedetail")
																						.show();
																				$(
																						"#projectdetail")
																						.hide();
																				$(
																						"#team")
																						.hide();
																				$(
																						"#personalTab")
																						.removeAttr(
																								'class',
																								'active');
																				$(
																						'#sitedetailTab')
																						.prop(
																								'class',
																								'active');
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
					var validator = $("#form1").validate({
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

					/*
					 * function getDistrict(){ e.preventDefault(); }
					 */
					/*
					 * $(function(){
					 * 
					 * });
					 */

					$("#buttonForm2")
							.click(
									function() {
										if (validator2.form()) {
											$("#form2")
													.submit(
															function(e) {
																e
																		.preventDefault();
																var url = "registerHistoryFormSiteDetails";
																$
																		.ajax({
																			type : "POST",
																			url : url,
																			data : $(
																					"#form2")
																					.serialize(),
																			cache : false,
																			success : function(
																					data) {
																				var id = JSON
																						.parse(data.id);
																				var fieldArea = JSON
																						.parse(data.fieldArea);
																				$(
																						"#formProjectId")
																						.val(
																								id);
																				$(
																						"#personal")
																						.hide();
																				$(
																						"#sitedetail")
																						.hide();
																				$(
																						"#projectdetail")
																						.show();
																				$(
																						"#team")
																						.hide();
																				$(
																						"#sitedetailTab")
																						.removeAttr(
																								'class',
																								'active');
																				$(
																						'#projectdetailTab')
																						.prop(
																								'class',
																								'active');
																				if (fieldArea == 1) {
																					$(
																							".hideDetailsColumn")
																							.hide();
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
					var validator2 = $("#form2").validate({
						rules : {
							text : "required",
						},
						messages : {
							text : "Field not be empty",
						}
					});

					$("#buttonForm3")
							.click(
									function() {
										if (validator3.form()) {
											$("#form3")
													.submit(
															function(e) {
																e
																		.preventDefault();

																var url = "registerHistoryFormProjectDetails";
																$
																		.ajax({
																			type : "post",
																			url : url,
																			data : new FormData(
																					this),
																			processData : false,
																			contentType : false,
																			cache : false,

																			// data
																			// :new
																			// FormData(form),//
																			// $("#form3").serialize(),
																			success : function(
																					data) {
																				var id = JSON
																						.parse(data.id);
																				$(
																						"#formTeamId")
																						.val(
																								id);
																				$(
																						"#formTeamId2")
																						.val(
																								id);
																				$(
																						"#personal")
																						.hide();
																				$(
																						"#sitedetail")
																						.hide();
																				$(
																						"#projectdetail")
																						.hide();
																				$(
																						"#team")
																						.show();
																				$(
																						"#projectdetailTab")
																						.removeAttr(
																								'class',
																								'active');
																				$(
																						'#teamTab')
																						.prop(
																								'class',
																								'active');
																			}
																			,beforeSend: function () {
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
					var validator3 = $("#form3").validate({
						rules : {
							text : "required",
						},
						messages : {
							text : "Field not be empty",
						}
					});

					$("#buttonForm4").click(function() {
						if (validator4.form()) {
							if ($('#decCheck').is(":checked")) {
								$('#submitOrDraft').val(true);
								/* checkBioDataConditions() */
								$("#form4").submit();
							} else {
								alert("Please select checkbox")
							}
						}
					});
					$("#buttonDraft").click(function() {
						if (validator4.form()) {
							if ($('#decCheck').is(":checked")) {
								$('#submitOrDraft').val(false);
								/* checkBioDataConditions(); */
								$("#form4").submit();
							} else {
								alert("Please select checkbox")
							}
						}
					});

					var validator4 = $("#form4").validate({
						rules : {
							text : "required",
						},
						messages : {
							text : "Field not be empty",
						}
					});

					$("#addMore1")
							.click(
									function() {
										var counts = $("#counter1").val();
										$('#addRow1')
												.append(
														'<tr id="trow'
																+ counts
																+ '">'
																+ '<td><input name="sin['
																+ counts
																+ '].name" id="name'
																+ counts
																+ '" required="required" placeholder="dep name" type="text"></td>'
																+ '<td><input name="sin['
																+ counts
																+ '].intituion" id="intituion'
																+ counts
																+ '" required="required" placeholder="name" type="text"></td>'
																+ '<td><input name="sin['
																+ counts
																+ '].address" id="address'
																+ counts
																+ '" required="required" placeholder="mobile" type="text"></td>'
																+ '<td><input name="sin['
																+ counts
																+ '].phoneNo" id="phoneNo'
																+ counts
																+ '" class="numericOnly" required="required" placeholder=""  '
																+ 'type="text"><i class="fa fa-remove" style="float: right;" title="Delete" onclick="deleteDiv(trow'
																+ counts
																+ ')"></i></td>'
																+ '</tr>');
										$("#counter1").val(++counts);
									});

					$("#visaPassport").hide();
					$('input[type=radio][id=teamForeign]').change(function() {
						if (this.value == 2)
							$("#visaPassport").show();
						else if (this.value == 1)
							$("#visaPassport").hide();
					});

					var validator5 = $("#teamForm").validate({
						rules : {
							text : "required",
						},
						messages : {
							text : "Field not be empty",
						}
					});

					/*$("#addMore6")
							.click(
									function() {
										if (validator5.form()) {

											var applicationTeamRole = $(
													"#applicationTeamRole")
													.val();
											var bioDataFile = $("#bioDataFile")
													.val();
											var applicationTeamNationality = $(
													"#applicationTeamNationality")
													.val();
											var teamForeign = $(
													"input[id='teamList[0].teamForeign']:checked")
													.val();

											if (applicationTeamRole == "Director"
													&& bioDataFile == "") {
												alert("Upload bio data file");
												return false;
											} else if (applicationTeamRole == "CoDirector"
													&& bioDataFile == "") {
												alert("Upload bio data file");
												return false;
											} else if (applicationTeamRole == "Director"
													&& applicationTeamNationality != "India") {
												alert("Director should be Indian.");
												return false;
											} else if (applicationTeamRole != "Director"
													&& applicationTeamRole != "CoDirector"
													&& applicationTeamNationality != "India"
													&& bioDataFile == "") {
												alert("Bio data is mandatory as "
														+ applicationTeamRole
														+ " is not Indian");
												return false;
											} else if (teamForeign == 2
													&& applicationTeamNationality == "India") {
												alert("Foreign Collaboration should not be Indian");
												return false;
											} else {
												
												 * $("input").attr("required",
												 * false);
												 
												 document.forms["form4"].submit(); 

												$(".ab")
														.submit(
																function(e) {
																	e
																			.preventDefault();

																	var url = "teamInsertion";
																	$
																			.ajax({
																				type : "POST",
																				url : url,
																				data : new FormData(
																						this),
																				processData : false,
																				contentType : false,
																				cache : false,
																				success : function(
																						data) {
																					if (data != null) {
																						$(
																								"#addMore7")
																								.attr(
																										"disabled",
																										false);
																						$(
																								"#addMore7")
																								.show();
																						$(
																								"#addMore6")
																								.hide();
																						$(
																								"#addMore6")
																								.attr(
																										"disabled",
																										true);
																						 $("#successdiv").show("slow"); 
																						if (data != null) {
																							$(
																									'#addTeamList')
																									.empty();

																							for (var i = 0; i < data.length; i++) {
																								$(
																										'#addTeamList')
																										.append(
																												'<tr>'
																														+ '<td>'
																														+ data[i].applicationTeamDepartment
																														+ '</td>'
																														+ '<td>'
																														+ data[i].applicationTeamRole
																														+ '</td>'
																														+ '<td>'
																														+ data[i].applicationTeamName
																														+ '</td>'
																														+ '<td>'
																														+ data[i].applicationTeamMobile
																														+ '</td>'
																														+ '<td>'
																														+ data[i].applicationTeamEmail
																														+ '</td>'
																														+ '<td>'
																														+ data[i].applicationTeamNationality
																														+ '</td>'
																														+ '<td>'
																														+ data[i].applicationTeamAddress
																														+ '</td>'
																														+

																														'<td><a href="/eASI/document/admin/download-'
																														+ data[i].applicationTeamId
																														+ '-bioData2"><i class="fa fa-arrow-circle-o-down"></i></a></td>'
																														+ '<td><a href="/eASI/document/admin/download-'
																														+ data[i].applicationTeamId
																														+ '-visa2"><i class="fa fa-arrow-circle-o-down"></i></a></td>'
																														+ '<td><a href="/eASI/document/admin/download-'
																														+ data[i].applicationTeamId
																														+ '-passport2"><i class="fa fa-arrow-circle-o-down"></i></a></td>'
																														+
																														
																														 * '<td><a
																														 * href="/eASI/excavation/deleteTeam-'+data[i].applicationTeamId+'"><i
																														 * class="fa
																														 * fa-trash"></i></a></td>'+
																														 
																														'</tr>');
																							}
																							;

																						}
																						;

																					}
																				},
																				beforeSend : function() {
																					$(
																							"#commonLodder")
																							.show();
																				},
																				complete : function() {
																					waitingDialog
																							.hide();
																					$(
																							"#commonLodder")
																							.hide();
																				},
																				error : function(
																						request,
																						error) {
																					alert("Something went wrong");
																				}
																			});
																});

											}
										}
									});

					$("#addMore7")
							.click(
									function() {
										if (validator5.form()) {

											var applicationTeamRole = $(
													"#applicationTeamRole")
													.val();
											var bioDataFile = $("#bioDataFile")
													.val();
											var applicationTeamNationality = $(
													"#applicationTeamNationality")
													.val();
											var teamForeign = $(
													"input[name='teamList[0].teamForeign']:checked")
													.val();

											if (applicationTeamRole == "Director"
													&& bioDataFile == "") {
												alert("Upload bio data file");
												return false;
											} else if (applicationTeamRole == "CoDirector"
													&& bioDataFile == "") {
												alert("Upload bio data file");
												return false;
											} else if (applicationTeamRole == "Director"
													&& applicationTeamNationality != "India") {
												alert("Director should be Indian.");
												return false;
											} else if (applicationTeamRole != "Director"
													&& applicationTeamRole != "CoDirector"
													&& applicationTeamNationality != "India"
													&& bioDataFile == "") {
												alert("Bio data is mandatory as "
														+ applicationTeamRole
														+ " is not Indian");
												return false;
											} else if (teamForeign == 2
													&& applicationTeamNationality == "India") {
												alert("Foreign Collaboration should not be Indian");
												return false;
											} else {
												
												 * $("input").attr("required",
												 * false);
												 
												 document.forms["form4"].submit(); 

												$(".abb")
														.submit(
																function(e) {
																	e
																			.preventDefault();

																	var url = "teamInsertion";
																	$
																			.ajax({
																				type : "POST",
																				url : url,
																				data : new FormData(
																						this),
																				success : function(
																						data) {
																					if (data != null) {
																						$(
																								"#addMore6")
																								.show();
																						$(
																								"#addMore6")
																								.attr(
																										"disabled",
																										false);
																						$(
																								"#addMore7")
																								.attr(
																										"disabled",
																										true);
																						$(
																								"#addMore7")
																								.hide();

																						 $("#successdiv").show("slow"); 
																						if (data != null) {
																							$(
																									'#addTeamList')
																									.empty();

																							for (var i = 0; i < data.length; i++) {
																								$(
																										'#addTeamList')
																										.append(
																												'<tr>'
																														+ '<td>'
																														+ data[i].applicationTeamDepartment
																														+ '</td>'
																														+ '<td>'
																														+ data[i].applicationTeamRole
																														+ '</td>'
																														+ '<td>'
																														+ data[i].applicationTeamName
																														+ '</td>'
																														+ '<td>'
																														+ data[i].applicationTeamMobile
																														+ '</td>'
																														+ '<td>'
																														+ data[i].applicationTeamEmail
																														+ '</td>'
																														+ '<td>'
																														+ data[i].applicationTeamNationality
																														+ '</td>'
																														+ '<td>'
																														+ data[i].applicationTeamAddress
																														+ '</td>'
																														+

																														'<td><a href="/eASI/document/admin/download-'
																														+ data[i].applicationTeamId
																														+ '-bioData2"><i class="fa fa-arrow-circle-o-down"></i></a></td>'
																														+ '<td><a href="/eASI/document/admin/download-'
																														+ data[i].applicationTeamId
																														+ '-visa2"><i class="fa fa-arrow-circle-o-down"></i></a></td>'
																														+ '<td><a href="/eASI/document/admin/download-'
																														+ data[i].applicationTeamId
																														+ '-passport2"><i class="fa fa-arrow-circle-o-down"></i></a></td>'
																														+
																														
																														 * '<td><a
																														 * href="/eASI/excavation/deleteTeam-'+data[i].applicationTeamId+'"><i
																														 * class="fa
																														 * fa-trash"></i></a></td>'+
																														 
																														'</tr>');
																							}
																							;

																						}
																						;

																					}
																				},
																				beforeSend : function() {
																					$(
																							"#commonLodder")
																							.show();
																				},
																				complete : function() {
																					waitingDialog
																							.hide();
																					$(
																							"#commonLodder")
																							.hide();
																				},
																				error : function(
																						request,
																						error) {
																					alert("Something went wrong");
																				}
																			});
																});

											}
										}
									});*/

					$("#addMore6")
					.click(
							function() {
								if (validator5.form()) {

									var applicationTeamRole = $(
											"#applicationTeamRole")
											.val();
									var bioDataFile = $("#bioDataFile")
											.val();
									var applicationTeamNationality = $(
											"#applicationTeamNationality")
											.val();
									var teamForeign = $(
											"input[id='teamList[0].teamForeign']:checked")
											.val();

									if (applicationTeamRole == "Director"
											&& bioDataFile == "") {
										alert("Upload bio data file");
										return false;
									} else if (applicationTeamRole == "CoDirector"
											&& bioDataFile == "") {
										alert("Upload bio data file");
										return false;
									} else if (applicationTeamRole == "Director"
											&& applicationTeamNationality != "India") {
										alert("Director should be Indian.");
										return false;
									} else if (applicationTeamRole != "Director"
											&& applicationTeamRole != "CoDirector"
											&& applicationTeamNationality != "India"
											&& bioDataFile == "") {
										alert("Bio data is mandatory as "
												+ applicationTeamRole
												+ " is not Indian");
										return false;
									} else if (teamForeign == 2
											&& applicationTeamNationality == "India") {
										alert("Foreign Collaboration should not be Indian");
										return false;
									} else {
										/*
										 * $("input").attr("required",
										 * false);
										 */
										/* document.forms["form4"].submit(); */

										$(".ab")
												.submit(
														function(e) {
															e
																	.preventDefault();

															var url = "teamInsertion";
															$
																	.ajax({
																		type : "POST",
																		url : url,
																		data : new FormData(
																				this),
																		processData : false,
																		contentType : false,
																		cache : false,
																		success : function(
																				data) {
																			if (data != null) {
																				$("#applicationTeamName").val("");
																				$("#applicationTeamDepartment").val("");
																				$("#applicationTeamRole").val("");
																				$("#applicationTeamMobile").val("");
																				$("#applicationTeamEmail").val("");
																				$("#applicationTeamAddress").val("");
																				$("#bioDataFile").val("");
																				$("#visaPassportFile").val("");
																				$("#mouFilee").val("");
																				
																				$("#commonLodder").hide();
																				$("#addMore7").attr("disabled",false);
																				$("#addMore7").show();
																				$("#addMore6").hide();
																				$("#addMore6").attr("disabled",true);
																				/* $("#successdiv").show("slow"); */
																				if (data != null) {
																					$('#addTeamList').empty();

																					for (var i = 0; i < data.length; i++) {

																						$(
																								'#addTeamList')
																								.append(
																										'<tr>'
																												+ '<td>'
																												+ data[i].applicationTeamDepartment
																												+ '</td>'
																												+ '<td>'
																												+ data[i].applicationTeamRole
																												+ '</td>'
																												+ '<td>'
																												+ data[i].applicationTeamName
																												+ '</td>'
																												+ '<td>'
																												+ data[i].applicationTeamMobile
																												+ '</td>'
																												+ '<td>'
																												+ data[i].applicationTeamEmail
																												+ '</td>'
																												+ '<td>'
																												+ data[i].applicationTeamNationality
																												+ '</td>'
																												+ '<td>'
																												+ data[i].applicationTeamAddress
																												+ '</td>'
																												+

																												'<td><a href="/eASI/document/admin/download-'
																												+ data[i].applicationTeamId
																												+ '-bioData2"><i class="fa fa-arrow-circle-o-down"></i></a></td>'
																												+ '<td><a href="/eASI/document/admin/download-'
																												+ data[i].applicationTeamId
																												+ '-visa2" class="visa1'
																												+ data[i].applicationTeamId
																												+ '" style="display:none"><i class="fa fa-arrow-circle-o-down"></i></a></td>'
																												+ '<td><a href="/eASI/document/admin/download-'
																												+ data[i].applicationTeamId
																												+ '-passport2" class="visa1'
																												+ data[i].applicationTeamId
																												+ '" style="display:none"><i class="fa fa-arrow-circle-o-down"></i></a></td>'
																												+
																												/*'<td><a href="/eASI/excavation/deleteTeam-'+data[i].applicationTeamId+'"><i class="fa fa-trash"></i></a></td>'+*/
																												'</tr>');

																						if (data[i].visa != null) {
																							$(
																									".visa1"
																											+ data[i].applicationTeamId)
																									.show();
																						}

																					}
																					;

																				}
																				;

																			}
																		},
																		beforeSend : function() {
																			$("#commonLodder").show();
																		},
																		complete : function() {
																			waitingDialog
																					.hide();
																			$(
																					"#commonLodder")
																					.hide();
																		},
																		error : function(
																				request,
																				error) {
																			alert("Something went wrong");
																			$("#commonLodder").hide();
																		}
																	});
														});

									}
								}
							});

			$("#addMore7")
					.click(
							function() {
								if (validator5.form()) {

									var applicationTeamRole = $(
											"#applicationTeamRole")
											.val();
									var bioDataFile = $("#bioDataFile")
											.val();
									var applicationTeamNationality = $(
											"#applicationTeamNationality")
											.val();
									var teamForeign = $(
											"input[name='teamList[0].teamForeign']:checked")
											.val();

									if (applicationTeamRole == "Director"
											&& bioDataFile == "") {
										alert("Upload bio data file");
										return false;
									} else if (applicationTeamRole == "CoDirector"
											&& bioDataFile == "") {
										alert("Upload bio data file");
										return false;
									} else if (applicationTeamRole == "Director"
											&& applicationTeamNationality != "India") {
										alert("Director should be Indian.");
										return false;
									} else if (applicationTeamRole != "Director"
											&& applicationTeamRole != "CoDirector"
											&& applicationTeamNationality != "India"
											&& bioDataFile == "") {
										alert("Bio data is mandatory as "
												+ applicationTeamRole
												+ " is not Indian");
										return false;
									} else if (teamForeign == 2
											&& applicationTeamNationality == "India") {
										alert("Foreign Collaboration should not be Indian");
										return false;
									} else {
										/*$("input").attr("required", false);*/
										/*document.forms["form4"].submit();*/

										$(".abb")
												.submit(
														function(e) {
															e
																	.preventDefault();

															var url = "teamInsertion";
															$
																	.ajax({
																		type : "POST",
																		url : url,
																		data : new FormData(
																				this),
																		success : function(
																				data) {
																			if (data != null) {
																				$("#applicationTeamName").val("");
																				$("#applicationTeamDepartment").val("");
																				$("#applicationTeamRole").val("");
																				$("#applicationTeamMobile").val("");
																				$("#applicationTeamEmail").val("");
																				$("#applicationTeamAddress").val("");
																				$("#bioDataFile").val("");
																				$("#visaPassportFile").val("");
																				$("#mouFilee").val("");
																				$("#commonLodder").hide();
																				$(
																						"#addMore6")
																						.show();
																				$(
																						"#addMore6")
																						.attr(
																								"disabled",
																								false);
																				$(
																						"#addMore7")
																						.attr(
																								"disabled",
																								true);
																				$(
																						"#addMore7")
																						.hide();

																				/*$("#successdiv").show("slow");*/
																				if (data != null) {
																					$(
																							'#addTeamList')
																							.empty();

																					for (var i = 0; i < data.length; i++) {

																						$(
																								'#addTeamList')
																								.append(
																										'<tr>'
																												+ '<td>'
																												+ data[i].applicationTeamDepartment
																												+ '</td>'
																												+ '<td>'
																												+ data[i].applicationTeamRole
																												+ '</td>'
																												+ '<td>'
																												+ data[i].applicationTeamName
																												+ '</td>'
																												+ '<td>'
																												+ data[i].applicationTeamMobile
																												+ '</td>'
																												+ '<td>'
																												+ data[i].applicationTeamEmail
																												+ '</td>'
																												+ '<td>'
																												+ data[i].applicationTeamNationality
																												+ '</td>'
																												+ '<td>'
																												+ data[i].applicationTeamAddress
																												+ '</td>'
																												+ '<td><a href="/eASI/document/admin/download-'
																												+ data[i].applicationTeamId
																												+ '-bioData2"><i class="fa fa-arrow-circle-o-down"></i></a></td>'
																												+ '<td><a href="/eASI/document/admin/download-'
																												+ data[i].applicationTeamId
																												+ '-visa2" class="visa1'
																												+ data[i].applicationTeamId
																												+ '" style="display:none"><i class="fa fa-arrow-circle-o-down"></i></a></td>'
																												+ '<td><a href="/eASI/document/admin/download-'
																												+ data[i].applicationTeamId
																												+ '-passport2" class="visa1'
																												+ data[i].applicationTeamId
																												+ '"style="display:none"><i class="fa fa-arrow-circle-o-down"></i></a></td>'
																												+
																												/*'<td><a href="/eASI/excavation/deleteTeam-'+data[i].applicationTeamId+'"><i class="fa fa-trash"></i></a></td>'+*/
																												'</tr>');
																						if (data[i].visa != null) {
																							$(
																									".visa1"
																											+ data[i].applicationTeamId)
																									.show();
																						}
																					}
																					;

																				}
																				;

																			}
																		},
																		beforeSend : function() {
																			$("#commonLodder").show();
																		},
																		complete : function() {
																			$("#commonLodder").hide();
																		},
																		error : function(request,error) {
																			alert("Something went wrong");
																			$("#commonLodder").hide();
																			
																		}
																	});
														});

									}
								}
							});

		});


		function validate1(file) {
			var FileSize = '';
			FileSize = file.files[0].size; // in MB
			if (FileSize > 10490658) {
			alert('File upload only 10 MB');
			$('[name="uploadDrawing"]').val('');
			} 
		}
		
		function validate1(file) {
			var FileSize = '';
			FileSize = file.files[0].size; // in MB
			if (FileSize > 10490658) {
			alert('File upload only 10 MB');
			$('[name="proposedSurvey"]').val('');
			} 
		}
		
		function validateBioDataFile(file) {
			var FileSize = '';
			FileSize = file.files[0].size; // in MB
			if (FileSize > 10490658) {
			alert('File upload only 10 MB');
			$('[name="teamList[0].bioDataFile"]').val('');
			} 
		}
		
		function validateVisaDataFile(file) {
			var FileSize = '';
			FileSize = file.files[0].size; // in MB
			if (FileSize > 10490658) {
			alert('File upload only 10 MB');
			$('[name="teamList[0].visaFile"]').val('');
			} 
		}
		
		function validatePassportDataFile(file) {
			var FileSize = '';
			FileSize = file.files[0].size; // in MB
			if (FileSize > 10490658) {
			alert('File upload only 10 MB');
			$('[name="teamList[0].passportFile"]').val('');
			} 
		}
function deleteDiv(divId) {
	$(divId).remove();
}