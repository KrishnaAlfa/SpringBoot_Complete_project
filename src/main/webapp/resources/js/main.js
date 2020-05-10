
$(document).ready(function() {
	$("#datepicker1").datepicker();
	$("#datepicker2").datepicker();
	$("#datepicker3").datepicker();
	$("#datepicker4").datepicker();
	$("#datepicker5").datepicker();
	$("#datepicker6").datepicker();
	$("#datepicker7").datepicker();
	$("#datepicker8").datepicker();
	$("#datepicker9").datepicker();
	$("#datepicker10").datepicker();
	$("#datepicker12").datepicker();
	$("#datepicker13").datepicker();
	$("#datepicker17").datepicker();
	$("#datepicker18").datepicker();
	$("#datepicker67").datepicker();
	$("#datepicker68").datepicker();
	$("#progressDate").datepicker();
	$("#tenderDate").datepicker();
	$("#datepickerRCPT").datepicker();

	$(document).ready(function() {
		$("#datepicker121").datepicker({
			minDate : 0,
			format : 'dd-MM-yyyy',
			onSelect : function(selected) {
				$("#datepicker122").datepicker("option", "minDate", selected)
			}
		});
		$("#datepicker122").datepicker({
			minDate : 0,
			format : 'dd-MM-yyyy',
			onSelect : function(selected) {
				$("#datepicker121").datepicker("option", "maxDate", selected)
			}
		});
	});
});

$(document).ready(function() {

	$(".sidebar ul li a i.zmdi-plus").click(function() {
		$(this).toggleClass("zmdi-minus");

	});
	$(".menu-toggle").click(function() {
		$(".right-section").toggleClass("intro");
		$(".left-sidebar").toggleClass("intro");
	});

});








$(function() {

	$("#addRows")
			.click(
					function() {
						$("#maintable tr:nth-child(2)")
								.after(
										"<tr> <td> </td><td> </td><td> </td><td> </td><td> </td><td> </td> </tr>")
					});
	$("#addRows1")
			.click(
					function() {
						$("#maintable1 tr:nth-child(2)")
								.after(
										"<tr> <td> </td><td> </td><td> </td><td> </td><td> </td> </tr>")
					});
	$("#addRows3")
			.click(
					function() {
						$("#maintable3 tr:nth-child(2)")
								.after(
										"<tr> <td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td> </tr>")
					});
})

var customScrolls = [];

custom2 = new scrollbot(".custom-scroll-2", 6).setStyle({
	"background" : "rgb(255, 152, 0)",
	"z-index" : "2",

}, {
	"background" : "rgb(128, 128, 128)"
});
var psuedo = document.createElement("div");
psuedo.style.cssText = "height:100%;width:2px;left:4px;background:#808080;position:absolute;z-index:1";
custom2.scrollBarHolder.appendChild(psuedo);

var onscrollfollower = document.createElement("div");
onscrollfollower.style.width = "100%";
onscrollfollower.style.height = "100%";
onscrollfollower.style.backgroundColor = "#222222";
onscrollfollower.style.position = "absolute";
onscrollfollower.style.bottom = "100%";
onscrollfollower.style.right = 0;

var psuedo = document.createElement("div");
psuedo.style.cssText = "height:100%;width:2px;left:4px;background:#808080;position:absolute;z-index:1";

function toggleIcon(e) {
	$(e.target).prev('.panel-heading').find(".more-less").toggleClass(
			'glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);