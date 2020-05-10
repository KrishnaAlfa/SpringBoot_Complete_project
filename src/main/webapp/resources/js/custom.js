
//<!--Forms validations AND file uploading-->
$(function() {
	$('#id-disable-check').on('click', function() {
		var inp = $('#form-input-readonly').get(0);
		if(inp.hasAttribute('disabled')) {
			inp.setAttribute('readonly' , 'true');
			inp.removeAttribute('disabled');
			inp.value="This text field is readonly!";
		}
		else {
			inp.setAttribute('disabled' , 'disabled');
			inp.removeAttribute('readonly');
			inp.value="This text field is disabled!";
		}
	});


	$(".chzn-select").chosen(); 
	
	$('[data-rel=tooltip]').tooltip({container:'body'});
	$('[data-rel=popover]').popover({container:'body'});
	
	$('textarea[class*=autosize]').autosize({append: "\n"});
	$('textarea[class*=limited]').each(function() {
		var limit = parseInt($(this).attr('data-maxlength')) || 100;
		$(this).inputlimiter({
			"limit": limit,
			remText: '%n character%s remaining...',
			limitText: 'max allowed : %n.'
		});
	});
	
	$.mask.definitions['~']='[+-]';
	$('.input-mask-date').mask('99/99/9999');
	$('.input-mask-eyescript').mask('~9.99 ~9.99 999');
	
	$( "#input-size-slider" ).css('width','200px').slider({
		value:1,
		range: "min",
		min: 1,
		max: 6,
		step: 1,
		slide: function( event, ui ) {
			var sizing = ['', 'input-mini', 'input-small', 'input-medium', 'input-large', 'input-xlarge', 'input-xxlarge'];
			var val = parseInt(ui.value);
			$('#form-field-4').attr('class', sizing[val]).val('.'+sizing[val]);
		}
	});

	$( "#input-span-slider" ).slider({
		value:1,
		range: "min",
		min: 1,
		max: 11,
		step: 1,
		slide: function( event, ui ) {
			var val = parseInt(ui.value);
			$('#form-field-5').attr('class', 'span'+val).val('.span'+val).next().attr('class', 'span'+(12-val)).val('.span'+(12-val));
		}
	});
	
	
	$( "#slider-range" ).css('height','200px').slider({
		orientation: "vertical",
		range: true,
		min: 0,
		max: 100,
		values: [ 17, 67 ],
		slide: function( event, ui ) {
			var val = ui.values[$(ui.handle).index()-1]+"";

			if(! ui.handle.firstChild ) {
				$(ui.handle).append("<div class='tooltip right in' style='display:none;left:15px;top:-8px;'><div class='tooltip-arrow'></div><div class='tooltip-inner'></div></div>");
			}
			$(ui.handle.firstChild).show().children().eq(1).text(val);
		}
	}).find('a').on('blur', function(){
		$(this.firstChild).hide();
	});
	
	$( "#slider-range-max" ).slider({
		range: "max",
		min: 1,
		max: 10,
		value: 2
	});
	
	$( "#eq > span" ).css({width:'90%', 'float':'left', margin:'15px'}).each(function() {
		// read initial values from markup and remove that
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			animate: true
			
		});
	});

	
	$('#id-input-file-1 , #id-input-file-2').ace_file_input({
		no_file:'No File ...',
		btn_choose:'Choose',
		btn_change:'Change',
		droppable:false,
		onchange:null,
		thumbnail:false //| true | large
		//whitelist:'gif|png|jpg|jpeg'
		//blacklist:'exe|php'
		//onchange:''
		//
	});
	
	$('#id-input-file-3').ace_file_input({
		style:'well',
		btn_choose:'Drop Image here or click to choose',
		btn_change:null,
		no_icon:'icon-cloud-upload',
		droppable:true,
		thumbnail:'small'
		//,icon_remove:null//set null, to hide remove/reset button
		/**,before_change:function(files, dropped) {
			//Check an example below
			//or examples/file-upload.html
			return true;
		}*/
		/**,before_remove : function() {
			return true;
		}*/
		,
		preview_error : function(filename, error_code) {
			//name of the file that failed
			//error_code values
			//1 = 'FILE_LOAD_FAILED',
			//2 = 'IMAGE_LOAD_FAILED',
			//3 = 'THUMBNAIL_FAILED'
			//alert(error_code);
		}

	}).on('change', function(){
		//console.log($(this).data('ace_input_files'));
		//console.log($(this).data('ace_input_method'));
	});
	

	//dynamically change allowed formats by changing before_change callback function
	$('#id-file-format').removeAttr('checked').on('change', function() {
		var before_change
		var btn_choose
		var no_icon
		if(this.checked) {
			btn_choose = "Drop images here or click to choose";
			no_icon = "icon-picture";
			before_change = function(files, dropped) {
				var allowed_files = [];
				for(var i = 0 ; i < files.length; i++) {
					var file = files[i];
					if(typeof file === "string") {
						//IE8 and browsers that don't support File Object
						if(! (/\.(jpe?g|png|gif|bmp)$/i).test(file) ) return false;
					}
					else {
						var type = $.trim(file.type);
						if( ( type.length > 0 && ! (/^image\/(jpe?g|png|gif|bmp)$/i).test(type) )
								|| ( type.length == 0 && ! (/\.(jpe?g|png|gif|bmp)$/i).test(file.name) )//for android's default browser which gives an empty string for file.type
							) continue;//not an image so don't keep this file
					}
					
					allowed_files.push(file);
				}
				if(allowed_files.length == 0) return false;

				return allowed_files;
			}
		}
		else {
			btn_choose = "Drop files here or click to choose";
			no_icon = "icon-cloud-upload";
			before_change = function(files, dropped) {
				return files;
			}
		}
		var file_input = $('#id-input-file-3');
		file_input.ace_file_input('update_settings', {'before_change':before_change, 'btn_choose': btn_choose, 'no_icon':no_icon})
		file_input.ace_file_input('reset_input');
	});




	$('#spinner1').ace_spinner({value:0,min:0,max:200,step:10, btn_up_class:'btn-info' , btn_down_class:'btn-info'})
	.on('change', function(){
		//alert(this.value)
	});
	$('#spinner2').ace_spinner({value:0,min:0,max:10000,step:100, icon_up:'icon-caret-up', icon_down:'icon-caret-down'});
	$('#spinner3').ace_spinner({value:0,min:-100,max:100,step:10, icon_up:'icon-plus', icon_down:'icon-minus', btn_up_class:'btn-success' , btn_down_class:'btn-danger'});


	if($('.date-picker').length){
		$('.date-picker').datepicker().next().on(ace.click_event, function(){
			$(this).prev().focus();
		});
	}
	if($('#id-date-range-picker-1').length){
		$('#id-date-range-picker-1').daterangepicker().prev().on(ace.click_event, function(){
			$(this).next().focus();
		});
	}
	
	if($('#timepicker1').length){
		$('#timepicker1').timepicker({
			minuteStep: 1,
			showSeconds: true,
			showMeridian: false
		});
	}
	
	if($('#colorpicker1').length){
		$('#colorpicker1').colorpicker();
	}
	if($('#simple-colorpicker-1').length){
		$('#simple-colorpicker-1').ace_colorpicker();
	}
	
	if($('.knob').length){
		$(".knob").knob();
	}
	
	if($('#form-field-tags').length){
		//we could just set the data-provide="tag" of the element inside HTML, but IE8 fails!
		var tag_input = $('#form-field-tags');
		if(! ( /msie\s*(8|7|6)/.test(navigator.userAgent.toLowerCase())) ) 
			tag_input.tag({placeholder:tag_input.attr('placeholder')});
		else {
			//display a textarea for old IE, because it doesn't support this plugin or another one I tried!
			tag_input.after('<textarea id="'+tag_input.attr('id')+'" name="'+tag_input.attr('name')+'" rows="3">'+tag_input.val()+'</textarea>').remove();
			//$('#form-field-tags').autosize({append: "\n"});
		}
	}


	/////////
	if($('#modal-form input[type=file]').length){
		$('#modal-form input[type=file]').ace_file_input({
			style:'well',
			btn_choose:'Drop files here or click to choose',
			btn_change:null,
			no_icon:'icon-cloud-upload',
			droppable:true,
			thumbnail:'large'
		});
	}
	
	//chosen plugin inside a modal will have a zero width because the select element is originally hidden
	//and its width cannot be determined.
	//so we set the width after modal is show
	if($('#modal-form').length){
		$('#modal-form').on('show', function () {
			$(this).find('.chzn-container').each(function(){
				$(this).find('a:first-child').css('width' , '200px');
				$(this).find('.chzn-drop').css('width' , '210px');
				$(this).find('.chzn-search input').css('width' , '200px');
			});
		});
	}
	/**
	//or you can activate the chosen plugin after modal is shown
	//this way select element has a width now and chosen works as expected
	$('#modal-form').on('shown', function () {
		$(this).find('.modal-chosen').chosen();
	})
	*/

});
		

//<!-- for tabels-->

//<!--tree structure-->

	$(function(){
		if($('#tree1').length){
			$('#tree1').ace_tree({
				dataSource: treeDataSource ,
				multiSelect:true,
				loadingHTML:'<div class="tree-loading"><i class="icon-refresh icon-spin blue"></i></div>',
				'open-icon' : 'icon-minus',
				'close-icon' : 'icon-plus',
				'selectable' : true,
				'selected-icon' : 'icon-ok',
				'unselected-icon' : 'icon-remove'
			});
		}
		if($('#tree2').length){
			$('#tree2').ace_tree({
				dataSource: treeDataSource2 ,
				loadingHTML:'<div class="tree-loading"><i class="icon-refresh icon-spin blue"></i></div>',
				'open-icon' : 'icon-folder-open',
				'close-icon' : 'icon-folder-close',
				'selectable' : false,
				'selected-icon' : null,
				'unselected-icon' : null
			});
		}
		/**
		$('#tree1').on('loaded', function (evt, data) {
		});
		
		$('#tree1').on('opened', function (evt, data) {
		});
		
		$('#tree1').on('closed', function (evt, data) {
		});
		
		$('#tree1').on('selected', function (evt, data) {
		});
		*/
});


//<!-- for drag .widget-container-span > .widget-box  div-->

$(function() {
	if($('.widget-container-span').length){
		$('.widget-container-span').sortable({
			connectWith: '.widget-container-span',
			items:'> .widget-box',
			opacity:0.8,
			revert:true,
			forceHelperSize:true,
			placeholder: 'widget-placeholder',
			forcePlaceholderSize:true,
			tolerance:'pointer'
		});
	}
});


//<!--alert boxes-->

$(function() {
	if($('#bootbox-regular').length){
		$("#bootbox-regular").on(ace.click_event, function() {
			bootbox.prompt("What is your name?", function(result) {
				if (result === null) {
					//Example.show("Prompt dismissed");
				} else {
					//Example.show("Hi <b>"+result+"</b>");
				}
			});
		});
	}
	
	if($('#bootbox-confirm').length){
		$("#bootbox-confirm").on(ace.click_event, function() {
			bootbox.confirm("Are you sure?", function(result) {
				if(result) {
					bootbox.alert("You are sure!");
				}
			});
		});
	}
	
	$("#bootbox-options").on(ace.click_event, function() {
		bootbox.dialog("I am a custom dialog with smaller buttons", [{
			"label" : "Success!",
			"class" : "btn-small btn-success",
			"callback": function() {
				//Example.show("great success");
			}
			}, {
			"label" : "Danger!",
			"class" : "btn-small btn-danger",
			"callback": function() {
				//Example.show("uh oh, look out!");
			}
			}, {
			"label" : "Click ME!",
			"class" : "btn-small btn-primary",
			"callback": function() {
				//Example.show("Primary button");
			}
			}, {
			"label" : "Just a button...",
			"class" : "btn-small"
			}]
		);
	});
});


//<!--Gallary-->

			$(function() {
	var colorbox_params = {
		reposition:true,
		scalePhotos:true,
		scrolling:false,
		previous:'<i class="icon-arrow-left"></i>',
		next:'<i class="icon-arrow-right"></i>',
		close:'&times;',
		current:'{current} of {total}',
		maxWidth:'100%',
		maxHeight:'100%',
		onOpen:function(){
			document.body.style.overflow = 'hidden';
		},
		onClosed:function(){
			document.body.style.overflow = 'auto';
		},
		onComplete:function(){
			$.colorbox.resize();
		}
	};

	if($('.ace-thumbnails [data-rel="colorbox"]').length){
		$('.ace-thumbnails [data-rel="colorbox"]').colorbox(colorbox_params);
	}
	if($('#cboxLoadingGraphic').length){
		$("#cboxLoadingGraphic").append("<i class='icon-spinner orange'></i>");//let's add a custom loading icon
	}
	/**$(window).on('resize.colorbox', function() {
		try {
			//this function has been changed in recent versions of colorbox, so it won't work
			$.fn.colorbox.load();//to redraw the current frame
		} catch(e){}
	});*/
})
		

//<!--table-->

	$(function($) {
		if($('#dynamic-table').length){}
		//initiate dataTables plugin
		var oTable1 = $('#dynamic-table')
		//.wrap("<div class='dataTables_borderWrap' />")   //if you are applying horizontal scrolling (sScrollX)
		.dataTable( {
			bAutoWidth: false,
			"aoColumns": [
			  { "bSortable": false },
			  null, null,null, null, null,
			  { "bSortable": false }
			],
			"aaSorting": [],
	
			//,
			//"sScrollY": "200px",
			//"bPaginate": false,
	
			//"sScrollX": "100%",
			//"sScrollXInner": "120%",
			//"bScrollCollapse": true,
			//Note: if you are applying horizontal scrolling (sScrollX) on a ".table-bordered"
			//you may want to wrap the table inside a "div.dataTables_borderWrap" element
	
			//"iDisplayLength": 50
		} );
		//oTable1.fnAdjustColumnSizing();
	
	
		//TableTools settings
		TableTools.classes.container = "btn-group btn-overlap";
		TableTools.classes.print = {
			"body": "DTTT_Print",
			"info": "tableTools-alert gritter-item-wrapper gritter-info gritter-center white",
			"message": "tableTools-print-navbar"
		}
	
		//initiate TableTools extension
		var tableTools_obj = new $.fn.dataTable.TableTools( oTable1, {
			"sSwfPath": "assets/font/copy_csv_xls_pdf.swf", //in Ace demo dist will be replaced by correct assets path
			
			"sRowSelector": "td:not(:last-child)",
			"sRowSelect": "multi",
			"fnRowSelected": function(row) {
				//check checkbox when row is selected
				try { $(row).find('input[type=checkbox]').get(0).checked = true }
				catch(e) {}
			},
			"fnRowDeselected": function(row) {
				//uncheck checkbox
				try { $(row).find('input[type=checkbox]').get(0).checked = false }
				catch(e) {}
			},
	
			"sSelectedClass": "success",
			"aButtons": [
				{
					"sExtends": "copy",
					"sToolTip": "Copy to clipboard",
					"sButtonClass": "btn btn-orange btn-bold",
					"sButtonText": "<i class='icon-copy'></i>",
					"fnComplete": function() {
						this.fnInfo( '<h3 class="no-margin-top smaller">Table copied</h3>\
							<p>Copied '+(oTable1.fnSettings().fnRecordsTotal())+' row(s) to the clipboard.</p>',
							1500
						);
					}
				},
				
				{
					"sExtends": "csv",
					"sToolTip": "Export to CSV",
					"sButtonClass": "btn btn-orange btn-bold",
					"sButtonText": "<i class='icon-excel'></i>"
				},
				
				{
					"sExtends": "pdf",
					"sToolTip": "Export to PDF",
					"sButtonClass": "btn btn-orange  btn-bold",
					"sButtonText": "<i class='icon-pdf'></i>"
				},
				
				{
					"sExtends": "print",
					"sToolTip": "Print view",
					"sButtonClass": "btn btn-orange  btn-bold",
					"sButtonText": "<i class='icon-print'></i>",
					
					"sMessage": "<div class='navbar navbar-default'><div class='navbar-header pull-left'><a class='navbar-brand' href='#'><small>Optional Navbar &amp; Text</small></a></div></div>",
					
					"sInfo": "<h3 class='no-margin-top'>Print view</h3>\
							  <p>Please use your browser's print function to\
							  print this table.\
							  <br />Press <b>escape</b> when finished.</p>",
				}
			]
		} );
		//we put a container before our table and append TableTools element to it
		$(tableTools_obj.fnContainer()).appendTo($('.tableTools-container'));
		
		//also add tooltips to table tools buttons
		//addding tooltips directly to "A" buttons results in buttons disappearing (weired! don't know why!)
		//so we add tooltips to the "DIV" child after it becomes inserted
		//flash objects inside table tools buttons are inserted with some delay (100ms) (for some reason)
		setTimeout(function() {
			$(tableTools_obj.fnContainer()).find('a.DTTT_button').each(function() {
				var div = $(this).find('> div');
				if(div.length > 0) div.tooltip({container: 'body'});
				else $(this).tooltip({container: 'body'});
			});
		}, 200);
		
		
		
		/////////////////////////////////
		//table checkboxes
		$('th input[type=checkbox], td input[type=checkbox]').prop('checked', false);
		
		//select/deselect all rows according to table header checkbox
		$('#dynamic-table > thead > tr > th input[type=checkbox]').eq(0).on('click', function(){
			var th_checked = this.checked;//checkbox inside "TH" table header
			
			$(this).closest('table').find('tbody > tr').each(function(){
				var row = this;
				if(th_checked) tableTools_obj.fnSelect(row);
				else tableTools_obj.fnDeselect(row);
			});
		});
		
		//select/deselect a row when the checkbox is checked/unchecked
		$('#dynamic-table').on('click', 'td input[type=checkbox]' , function(){
			var row = $(this).closest('tr').get(0);
			if(!this.checked) tableTools_obj.fnSelect(row);
			else tableTools_obj.fnDeselect($(this).closest('tr').get(0));
		});
		$(document).on('click', '#dynamic-table .dropdown-toggle', function(e) {
			e.stopImmediatePropagation();
			e.stopPropagation();
			e.preventDefault();
		});
		
		//And for the first simple table, which doesn't have TableTools or dataTables
		//select/deselect all rows according to table header checkbox
		var active_class = 'active';
		$('#simple-table > thead > tr > th input[type=checkbox]').eq(0).on('click', function(){
			var th_checked = this.checked;//checkbox inside "TH" table header
			
			$(this).closest('table').find('tbody > tr').each(function(){
				var row = this;
				if(th_checked) $(row).addClass(active_class).find('input[type=checkbox]').eq(0).prop('checked', true);
				else $(row).removeClass(active_class).find('input[type=checkbox]').eq(0).prop('checked', false);
			});
		});
		
		//select/deselect a row when the checkbox is checked/unchecked
		$('#simple-table').on('click', 'td input[type=checkbox]' , function(){
			var $row = $(this).closest('tr');
			if(this.checked) $row.addClass(active_class);
			else $row.removeClass(active_class);
		});
	
		/********************************/
		//add tooltip for small view action buttons in dropdown menu
		$('[data-rel="tooltip"]').tooltip({placement: tooltip_placement});
		
		//tooltip placement on right or left
		function tooltip_placement(context, source) {
			var $source = $(source);
			var $parent = $source.closest('table')
			var off1 = $parent.offset();
			var w1 = $parent.width();
	
			var off2 = $source.offset();
			//var w2 = $source.width();
			if( parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2) ) return 'right';
			return 'left';
		}
})

//autocomplete 
	$.widget( "custom.catcomplete", $.ui.autocomplete, {
		_create: function() {
			this._super();
			this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
		},
		_renderMenu: function( ul, items ) {
			var that = this,
			currentCategory = "";
			$.each( items, function( index, item ) {
				var li;
				if ( item.category != currentCategory ) {
					ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
					currentCategory = item.category;
				}
				li = that._renderItemData( ul, item );
					if ( item.category ) {
					li.attr( "aria-label", item.category + " : " + item.label );
				}
			});
		}
	});
	
	 var data = [
		{ label: "Conservation", category: "" },
		{ label: "Antiquaity", category: "" },
		{ label: "CORE MODULE", category: "" },
		{ label: "HRMS", category: "" },
		{ label: "Budget & Fund Management", category: "" },
		{ label: "Cultural Exchange Program", category: "" },
		{ label: "Accounts & Reconciliation", category: "" },
		{ label: "Document Management System", category: "" },
		{ label: "Preparing RPC", category: "Conservation" },
		{ label: "Preparing Contract Detail", category: "Conservation" },
		{ label: "Preparing Approval of Engineering Appreciation", category: "Conservation" },
		{ label: "Preparing Resource", category: "Conservation" },
		{ label: "Preparing of Bill", category: "Conservation" },
		{ label: "Preparing of Bills", category: "Account Department" },
	];
	$( "#search" ).catcomplete({
		delay: 0,
		source: data
	});
