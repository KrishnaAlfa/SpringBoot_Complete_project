	function getVal(value){
		if(value == ""){
			$(".circleid").hide();
			$(".vipName").hide();
			$(".individualName").hide();
			$(".cirleid").removeClass("circleidDiv");
			$(".trustName").hide();
			$(".ministryStateName").hide();
		}else if(value == "1"){
			$(".circleid").show(500);
			$(".vipName").hide();
			$(".individualName").hide();
			$(".cirleid").removeClass("circleidDiv");
			$(".trustName").hide();
			$(".ministryStateName").hide();
		}else if(value == "2"){
			$(".circleid").show(500);
			$(".vipName").hide();
			$(".individualName").hide();
			$(".cirleid").addClass("circleidDiv");
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
					$("input[name$='protectionFor']").click(function() {
				        var test = $(this).val();
				        if(test == '2'){
				         $("div.monument").hide();
				         $("div.site").show();
				        }else if(test == '1'){
				         $("div.site").hide();
				         $("div.monument").show();
				        }
				    }); 					
					
					$("#buttonForm1").click(function() {
						if (validator3.form()) {
							$("#form1").submit(function(e) {
								e.preventDefault();
								var url = "add";
								$.ajax({
									type : "post",
									url : url,
									data : new FormData(this),
									processData : false,
									contentType : false,
									cache : false,
									success : function(data) {
										var id = JSON.parse(data.id);
										$("#proposalProId").val(id);
										window.location.href = "protectionMonumentList";
									},beforeSend: function () {
										$("#commonLodder").show();
							        },
							        complete: function () {
							        	$("#commonLodder").hide();
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
				});