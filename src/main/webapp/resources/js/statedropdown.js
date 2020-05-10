
function getDistrict(){
	e.preventDefault();
	var selectedState = $(
			".businessstate option:selected")
			.val();

	var url = "${pageContext.request.contextPath}/transferOwnership/getDistrict/"
			+ selectedState;
	$
			.ajax({
				type : "POST",
				url : url,
				data : "name=selectedState",
				cache : false,
				success : function(data) {
					var obj = JSON
							.stringify(data.district);
					var len = data.district.length;
					$(
							"#businessdistrict")
							.html("");
					$(
							"#businessdistrict")
							.append(
									"<option value=''>---Select---</option>");
					for (var i = 0; i < len; i++) {
						var id = data.district[i]['district_id'];
						var name = data.district[i]['district_name'];
						$(
								"#businessdistrict")
								.append(
										"<option value='"
									+ id
									+ "'>"
												+ name
												+ "</option>");
					}
				},
				error : function(
						request, error) {
					alert("Request: "
							+ JSON
									.stringify(request));
				}
			});
}