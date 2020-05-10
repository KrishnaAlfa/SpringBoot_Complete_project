	function getVal(value){
		if(value == ""){
			$(".circleid").hide();
			$(".vipName").hide();
			$(".individualName").hide();
			//$(".cirleid").removeClass("circleidDiv");
			$(".trustName").hide();
			$(".ministryStateName").hide();
		}else if(value == "1"){
			$(".circleid").show(500);
			$(".vipName").hide();
			$(".individualName").hide();
			//$(".cirleid").removeClass("circleidDiv");
			$(".trustName").hide();
			$(".ministryStateName").hide();
		}else if(value == "2"){
			$(".circleid").show(500);
			$(".vipName").hide();
			$(".individualName").hide();
			//$(".cirleid").addClass("circleidDiv");
			$(".trustName").hide();
			$(".ministryStateName").hide();
		}else if(value == "3"){
			$(".circleid").hide();
			$(".vipName").show(500);
			$(".individualName").hide();
			$(".trustName").hide();
			$(".ministryStateName").hide();
		}else if(value == "4"){
			$(".circleid").hide();
			$(".vipName").hide();
			$(".individualName").show(500);
			$(".trustName").hide();
			$(".ministryStateName").hide();
		}else if(value == "5"){
			$(".circleid").hide();
			$(".vipName").hide();
			$(".individualName").hide();
			$(".ministryStateName").show();
		}else if(value == "6"){
			$(".circleid").hide();
			$(".vipName").hide();
			$(".individualName").hide();
			$(".trustName").show();
			$(".ministryStateName").hide();
		}
	}
		$(document).ready(
				function() {
					
					$("#buttonForm1").click(function() {
						if (validator3.form()) {
							$("#form2").submit(function(e) {
								e.preventDefault();
								var url = "updateEncroachmentMonument";
								$.ajax({
									type : "post",
									url : url,
									data : new FormData(this),
									processData : false,
									contentType : false,
									cache : false,
									success : function(data) {
										var id = JSON.parse(data.id);
										$("#encroachmentId").val(id);
										window.location.href = "encroachmentsEditForm?id="+id;
									},
									error : function(request, error) {
										alert(JSON.stringify(request));
									}
								});
							});
						}
					});
					
					var validator3 = $("#form1").validate({
						rules : {
							text : "required",
							Select :"required",
						},
						messages : {
							text : "Field not be empty",
							Select : "Please Select",
						}
					});
					
					var id = $("#textId").val();
					if(id != ""){
						getVal(id);
					};
					getVal(id);
					$(".b2").click(function(){
						$("#dataSubmitStatus").val(false);
					});
					$(".b3").click(function(){
						$("#dataSubmitStatus").val(true);
					});
					$("#buttonForm2,#buttonForm3").click(function() {
						if (validator4.form()) {
							$("#form1").submit(function(e) {
								e.preventDefault();
								var url = "updateEncroachmentMonument";
								$.ajax({
									type : "post",
									url : url,
									data : new FormData(this),
									processData : false,
									contentType : false,
									cache : false,
									success : function(data) {
										var id = JSON.parse(data.id);
										if(data != null){
										  $("#proId").val(id);
										  //window.location.href = "editForm?id="+id;
										   window.location.href = "encroachmentsList";
										  $(".objection-remark").clcik();
										}
									},beforeSend: function () {
										$("#commonLodder").show();
							        },
							        complete: function () {
							        	$("#commonLodder").hide();
							        },
									error : function(request, error) {
										//alert(JSON.stringify(request));
									}
								});
							});
						}
					});

					var validator4 = $("#form1").validate({
						rules : {
							text : "required",
							Select :"required",
						},
						messages : {
							text : "Field not be empty",
							Select : "Please Select",
						}
					});
				});
		//AUTO COMP
		 function getAutoValue(id){
			 if(id == ""){
				$("#monumentId").val("");
			 }
			 $("#setId").autocomplete({
		         source: function (request, response) {
		             $.ajax({
		                 type: 'GET',
		                 url: "getMonument",
		                 data: {
		                	 itemName : request.term,
		                     subId : $("#subcircleids").val()
		                 },
		                 success: function (data) {
		                     var items = [];
		                     data.forEach(function (value, index) {
		                         /*console.log(value + " " + index);*/
		                         if(value.rate == null){
		                        	 value.rate = 0           //if null rate then default value set 
		                         }
		                         items.push({
		                             label: value.name,
		                             value: value.id,
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
		             $("#setId").val(ui.item.label);
		             $("#munumentsId").val(ui.item.value);
		             return false;
		         }
		       });
			 }