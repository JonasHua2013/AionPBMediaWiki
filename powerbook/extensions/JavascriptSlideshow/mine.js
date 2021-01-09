$('div#newsslider').removeClass('hiddennews');






$('.restrictionTip').tooltipster({
	side: 'bottom',
	contentAsHTML: true,
});
$.tooltipster.group('restrictionTip');


$('.enchantingTip').tooltipster({
	side: 'right',
	contentAsHTML: true
});

$('.dictooltip').tooltipster({
	side: 'right',
	contentAsHTML: true,
	'maxWidth': 300 
});





$('.tooltipzy').tooltipster({
	side: 'right',
    content: 'Loading...',
	animationDuration: 10,
	contentAsHTML: true,
	theme: ['aiontooltip'],
    // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
    functionBefore: function(instance, helper) {
        
        var $origin = $(helper.origin);
		
		
		var $origin = $(helper.origin),
            toolid = $origin.attr('tooltipid');
			toollang = $origin.attr('tooltiplang');
			toolcount = $origin.attr('tooltipcount');
			classic = $origin.attr('classic');
		
        
        // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
        if ($origin.data('loaded') !== true) {

            $.get("https://aionpowerbook.com/powerbook/extensions/AionExtensions/tooltip.php?lang=" + toollang + "&id=" + toolid + "&count=" + toolcount + "&classic=" + classic, function(data) {

                // call the 'content' method to update the content of our tooltip with the returned data.
                // note: this content update will trigger an update animation (see the updateAnimation option)
                instance.content(data);

                // to remember that the data has been loaded
                $origin.data('loaded', true);
            });
        }
    }
});


$('.crafttooltipzy').tooltipster({
	side: 'right',
    content: 'Loading...',
	contentAsHTML: true,
	theme: ['aiontooltip'],
    // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
    functionBefore: function(instance, helper) {
        
        var $origin = $(helper.origin);
		
		
		var $origin = $(helper.origin),
            toolid = $origin.attr('crafttooltipID');
			toollang = $origin.attr('crafttooltiplang');
			classic = $origin.attr('classic');
		
        
        // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
        if ($origin.data('loaded') !== true) {

            $.get("https://aionpowerbook.com/powerbook/extensions/AionExtensions/crafttooltip.php?lang=" + toollang + "&id=" + toolid + "&classic=" + classic, function(data) {

                // call the 'content' method to update the content of our tooltip with the returned data.
                // note: this content update will trigger an update animation (see the updateAnimation option)
                instance.content(data);

                // to remember that the data has been loaded
                $origin.data('loaded', true);
            });
        }
    }
});


$('.skilltipzy').tooltipster({
	side: 'right',
    content: 'Loading...',
	animationDuration: 10,
	contentAsHTML: true,
	theme: ['aiontooltip'],
    // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
    functionBefore: function(instance, helper) {
        
        var $origin = $(helper.origin);
		
		
		var $origin = $(helper.origin),
            skillid = $origin.attr('skillid');
			toollang = $origin.attr('skilltiplang');
			classic = $origin.attr('classic');
		
        
        // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
        if ($origin.data('loaded') !== true) {

            $.get("https://aionpowerbook.com/powerbook/extensions/AionExtensions/skilltooltip.php?lang=" + toollang + "&id=" + skillid + "&classic=" + classic, function(data) {

                // call the 'content' method to update the content of our tooltip with the returned data.
                // note: this content update will trigger an update animation (see the updateAnimation option)
                instance.content(data);

                // to remember that the data has been loaded
                $origin.data('loaded', true);
            });
        }
    }
});


















$('.dataTable').DataTable( {
 'columnDefs': [ { targets: 'no-sorting', orderable: false } ],
 'order': [[ 0, 'desc' ]],
 'language': {'searchPlaceholder': "Global search..."}
} );



$('.ajaxTable').each(function() {
var source = $(this).attr("ajaxurl");
var DataTable = $(this).DataTable( {
 "order": [[ 0, 'asc' ]],	
 "fnDrawCallback": function(){
	 

	 
	 
	 
$('.skilltipzy').tooltipster({
	side: 'right',
    content: 'Loading...',
	animationDuration: 10,
	contentAsHTML: true,
	theme: ['aiontooltip'],
    // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
    functionBefore: function(instance, helper) {
        
        var $origin = $(helper.origin);
		
		
		var $origin = $(helper.origin),
            skillid = $origin.attr('skillid');
			toollang = $origin.attr('skilltiplang');
			classic = $origin.attr('classic');
		
        
        // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
        if ($origin.data('loaded') !== true) {

            $.get("https://aionpowerbook.com/powerbook/extensions/AionExtensions/skilltooltip.php?lang=" + toollang + "&id=" + skillid + "&classic=" + classic, function(data) {

                // call the 'content' method to update the content of our tooltip with the returned data.
                // note: this content update will trigger an update animation (see the updateAnimation option)
                instance.content(data);

                // to remember that the data has been loaded
                $origin.data('loaded', true);
            });
        }
    }
});	 
	 
	 
$('.tooltipzy').tooltipster({
	side: 'right',
    content: 'Loading...',
	animationDuration: 10,
	contentAsHTML: true,
	theme: ['aiontooltip'],
    // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
    functionBefore: function(instance, helper) {
        
        var $origin = $(helper.origin);
		
		
		var $origin = $(helper.origin),
            toolid = $origin.attr('tooltipid');
			toollang = $origin.attr('tooltiplang');
			toolcount = $origin.attr('tooltipcount');
			classic = $origin.attr('classic');
		
        
        // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
        if ($origin.data('loaded') !== true) {

            $.get("https://aionpowerbook.com/powerbook/extensions/AionExtensions/tooltip.php?lang=" + toollang + "&id=" + toolid + "&count=" + toolcount + "&classic=" + classic, function(data) {

                // call the 'content' method to update the content of our tooltip with the returned data.
                // note: this content update will trigger an update animation (see the updateAnimation option)
                instance.content(data);

                // to remember that the data has been loaded
                $origin.data('loaded', true);
            });
        }
    }
});	 
	 
$('.crafttooltipzy').tooltipster({
	side: 'bottom',
    content: 'Loading...',
	animationDuration: 10,
	contentAsHTML: true,
	theme: ['aiontooltip'],
    // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
    functionBefore: function(instance, helper) {
        
        var $origin = $(helper.origin);
		
		
		var $origin = $(helper.origin),
            toolid = $origin.attr('crafttooltipID');
			toollang = $origin.attr('crafttooltiplang');
			classic = $origin.attr('classic');
		
        
        // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
        if ($origin.data('loaded') !== true) {

            $.get("https://aionpowerbook.com/powerbook/extensions/AionExtensions/crafttooltip.php?lang=" + toollang + "&id=" + toolid + "&classic=" + classic, function(data) {

                // call the 'content' method to update the content of our tooltip with the returned data.
                // note: this content update will trigger an update animation (see the updateAnimation option)
                instance.content(data);

                // to remember that the data has been loaded
                $origin.data('loaded', true);
            });
        }
    }
});
	 
 },
 'ajax': source
});
});





$('.skilljsonTable').each(function() {
	
	
	var source = $(this).attr("ajaxurl");
	var maxsource = $(this).attr("ajaxmaxsourceurl");

	var DataTable = $(this).DataTable( {
		 "fnDrawCallback": function(){
$('.skilltipzy').tooltipster({
	side: 'right',
    content: 'Loading...',
	animationDuration: 10,
	contentAsHTML: true,
	theme: ['aiontooltip'],
    // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
    functionBefore: function(instance, helper) {
        
        var $origin = $(helper.origin);
		
		
		var $origin = $(helper.origin),
            skillid = $origin.attr('skillid');
			toollang = $origin.attr('skilltiplang');
			classic = $origin.attr('classic');
		
        
        // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
        if ($origin.data('loaded') !== true) {

            $.get("https://aionpowerbook.com/powerbook/extensions/AionExtensions/skilltooltip.php?lang=" + toollang + "&id=" + skillid + "&classic=" + classic, function(data) {

                // call the 'content' method to update the content of our tooltip with the returned data.
                // note: this content update will trigger an update animation (see the updateAnimation option)
                instance.content(data);

                // to remember that the data has been loaded
                $origin.data('loaded', true);
            });
        }
    }
});

	 

	 
 },
		"order": [[ 0, 'asc' ]],	
		'ajax': source
	});
	
	
	
	
	$('#SkillBox').on('change', function () {
	if(this.checked) {
					
					DataTable.ajax.url( maxsource ).load();
	}else {
					
					DataTable.ajax.url( source ).load();
	}
} );	
	
});



$('.itemColjsonTable').each(function() {
	
	
	var source = $(this).attr("ajaxurl");
	var maxsource = $(this).attr("ajaxeu");

	var DataTable = $(this).DataTable( {
		 "fnDrawCallback": function(){


			$('.tooltipzy').tooltipster({
				side: 'right',
				content: 'Loading...',
				animationDuration: 10,
				contentAsHTML: true,
				theme: ['aiontooltip'],
				// 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
				functionBefore: function(instance, helper) {
					
					var $origin = $(helper.origin);
					
					
					var $origin = $(helper.origin),
						toolid = $origin.attr('tooltipid');
						toollang = $origin.attr('tooltiplang');
						toolcount = $origin.attr('tooltipcount');
						classic = $origin.attr('classic');
		
        
        // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
        if ($origin.data('loaded') !== true) {

            $.get("https://aionpowerbook.com/powerbook/extensions/AionExtensions/tooltip.php?lang=" + toollang + "&id=" + toolid + "&count=" + toolcount + "&classic=" + classic, function(data) {
			
							// call the 'content' method to update the content of our tooltip with the returned data.
							// note: this content update will trigger an update animation (see the updateAnimation option)
							instance.content(data);
			
							// to remember that the data has been loaded
							$origin.data('loaded', true);
						});
					}
				}
			});	 

	 

	 
 },
 		"columnDefs": [{ "orderable": false, "targets": [0] }],
		"scrollY":        "600px",
		"scrollCollapse": true,
        "paging":         false,	
		'ajax': source
	});
	
	
	
	
	$('#SkillBox').on('change', function () {
	if(this.checked) {
					
					DataTable.ajax.url( maxsource ).load();
	}else {
					
					DataTable.ajax.url( source ).load();
	}
} );	
	
});
	





$('.searchdataTable').DataTable( {
 'columnDefs': [ { targets: 'no-sorting', orderable: false } ],
 'order': [],
 'language': {'searchPlaceholder': "Global search..."}
} );


$('#responsiveexample').DataTable( {
        responsive: true,
        columnDefs: [
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: 2, targets: -2 }
        ]
    } );

	
$('.DataTableAJAXitem').each(function() {
var coulmns = $(this).attr("DefsColumn");
var source = $(this).attr("ajaxurl");
var extra = $(this).attr("dataExtra");
var Order = $(this).attr("dataOrder");

if (Order == null){
	dataOrder = 0;
}else {
	dataOrder = Order;
}



if (extra == "false"){
	filter = false;
}else {
	filter = true;
}
var DataTable = $(this).DataTable( {
 "fnDrawCallback": function(){
	 

	 
	 
	 
	 
	 
	 
$('.tooltipzy').tooltipster({
	side: 'right',
    content: 'Loading...',
	animationDuration: 10,
	contentAsHTML: true,
	theme: ['aiontooltip'],
    // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
    functionBefore: function(instance, helper) {
        
        var $origin = $(helper.origin);
		
		
		var $origin = $(helper.origin),
            toolid = $origin.attr('tooltipid');
			toollang = $origin.attr('tooltiplang');
			toolcount = $origin.attr('tooltipcount');
			classic = $origin.attr('classic');
		
        
        // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
        if ($origin.data('loaded') !== true) {

            $.get("https://aionpowerbook.com/powerbook/extensions/AionExtensions/tooltip.php?lang=" + toollang + "&id=" + toolid + "&count=" + toolcount + "&classic=" + classic, function(data) {

                // call the 'content' method to update the content of our tooltip with the returned data.
                // note: this content update will trigger an update animation (see the updateAnimation option)
                instance.content(data);

                // to remember that the data has been loaded
                $origin.data('loaded', true);
            });
        }
    }
});	 


$('.itempreviewlist').tooltipster({
	side: 'right',
	content: 'Loading...',
	animationDuration: 10,
	contentAsHTML: true,
    // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
    functionBefore: function(instance, helper) {
        
        var $origin = $(helper.origin);
		
		
		var $origin = $(helper.origin),
            mesh = $origin.attr('mesh');
			meshID = $origin.attr('meshID');
		
        
        // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
        if ($origin.data('loaded') !== true) {

            $.get("https://aionpowerbook.com/powerbook/extensions/AionExtensions/mesh.php?mesh=" + mesh + "&meshID=" + meshID, function(data) {

                // call the 'content' method to update the content of our tooltip with the returned data.
                // note: this content update will trigger an update animation (see the updateAnimation option)
                instance.content(data);

                // to remember that the data has been loaded
                $origin.data('loaded', true);
            });
        }
    }
});

$('.skilltipzy').tooltipster({
	side: 'right',
    content: 'Loading...',
	animationDuration: 10,
	contentAsHTML: true,
	theme: ['aiontooltip'],
    // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
    functionBefore: function(instance, helper) {
        
        var $origin = $(helper.origin);
		
		
		var $origin = $(helper.origin),
            skillid = $origin.attr('skillid');
			toollang = $origin.attr('skilltiplang');
			classic = $origin.attr('classic');
		
        
        // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
        if ($origin.data('loaded') !== true) {

            $.get("https://aionpowerbook.com/powerbook/extensions/AionExtensions/skilltooltip.php?lang=" + toollang + "&id=" + skillid + "&classic=" + classic, function(data) {

                // call the 'content' method to update the content of our tooltip with the returned data.
                // note: this content update will trigger an update animation (see the updateAnimation option)
                instance.content(data);

                // to remember that the data has been loaded
                $origin.data('loaded', true);
            });
        }
    }
});

	 
$('.crafttooltipzy').tooltipster({
	side: 'bottom',
    content: 'Loading...',
	animationDuration: 10,
	contentAsHTML: true,
	theme: ['aiontooltip'],
    // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
    functionBefore: function(instance, helper) {
        
        var $origin = $(helper.origin);
		
		
		var $origin = $(helper.origin),
            toolid = $origin.attr('crafttooltipID');
			toollang = $origin.attr('crafttooltiplang');
			classic = $origin.attr('classic');
		
        
        // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
        if ($origin.data('loaded') !== true) {

            $.get("https://aionpowerbook.com/powerbook/extensions/AionExtensions/crafttooltip.php?lang=" + toollang + "&id=" + toolid + "&classic=" + classic, function(data) {

                // call the 'content' method to update the content of our tooltip with the returned data.
                // note: this content update will trigger an update animation (see the updateAnimation option)
                instance.content(data);

                // to remember that the data has been loaded
                $origin.data('loaded', true);
            });
        }
    }
});
	 
 },
 'columnDefs': coulmns,
 'processing': true,
 'bFilter': filter,
 'responsive': true,
 'language': { 'processing': "<img src='https://aionpowerbook.com/powerbook/extensions/a_item_tables/2.gif'>", 'searchPlaceholder': "Global search..."},
 'serverSide': true,
 'order': [[ dataOrder, 'asc' ]],
 'ajax':{ 
 'type': 'post',
 'url' : source
 },
 'aoColumnDefs': [
		{
        'bSearchable': false,
        'bVisible': false,
        'aTargets': [6]
        },
		{
        'bSearchable': false,
        'bVisible': false,
        'aTargets': [7]
        },
        {
        'bSearchable': false,
        'bVisible': false,
        'aTargets': [8]
        },
    ]
});

$('.custom-search-input-text').on('change', function () {
					var i =$(this).attr('data-column');
					var v =$(this).val();
					DataTable.columns(i).search(v).draw();
				} );
				
$('.custom-search-input-text2').on('change', function () {
					var i =$(this).attr('data-column');
					var v =$(this).val();
					DataTable.columns(i).search(v).draw();
				} );

$('.search-input-select').on('change', function () {
					var i =$(this).attr('data-column');  
					var v =$(this).val();  
					DataTable.columns(i).search(v).draw();
				} );
				
$('#chosen-select-npc').on('change', function () {
					var meals = $(this).val();
					var selectedmeals = meals.join(", ");
					var i =$(this).attr('data-column');  
					DataTable.columns(i).search(selectedmeals).draw();
				} );
				
$('#chosen-select-slot').on('change', function () {
					var getslots = $(this).val();
					var selectedslots = getslots.join(", ");
					var i =$(this).attr('data-column');  
					DataTable.columns(i).search(selectedslots).draw();
				} );	
$('#chosen-select-stats').on('change', function () {
					var getstats = $(this).val();
					var selectedstats = getstats.join(", ");
					var i =$(this).attr('data-column');  
					DataTable.columns(i).search(selectedstats).draw();
				} );				
$('#itemcheckBox-range').on('change', function () {
	if(this.checked) {
					
					var i =$(this).attr('data-column');  
					var v = '1';
					DataTable.columns(i).search(v).draw();
	}else {
					var i =$(this).attr('data-column');  
					var v = '0';
					DataTable.columns(i).search(v).draw();
	}
				} );					
			
				

	
	
$('#clearalldt').on('click', function(){
	
	var resetorder = $(this).attr("resetorder");
	
	
	$("#chosen-select-npc").val('Monster Type...').trigger("chosen:updated"); // resets chosen values
	$("#chosen-select-slot").val('Item Type...').trigger("chosen:updated"); // resets chosen values
	$("#chosen-select-stats").val('Item Attributes...').trigger("chosen:updated"); // resets chosen values
	$('.custom-search-input-text').val('').attr("placeholder", "Min");
	$('#itemcheckBox-range').prop('checked', false);
	$(".search-input-select").prop('selectedIndex',0);
	$('.custom-search-input-text2').val('').attr("placeholder", "Max");
	DataTable.order([[ resetorder, 'asc' ]]); //reorders the table by the 1st column
	DataTable.search( '' ).columns().search( '' ).draw(); // resets search boxes
	DataTable.ajax.reload(null, false); // reloads ajax
});
				
				
});

	 
$('.DataTableAJAX').each(function() {
var coulmns = $(this).attr("DefsColumn");
var source = $(this).attr("ajaxurl");
var extra = $(this).attr("dataExtra");
var Order = $(this).attr("dataOrder");

if (Order == null){
	dataOrder = 0;
}else {
	dataOrder = Order;
}



if (extra == "false"){
	filter = false;
}else {
	filter = true;
}
var DataTable = $(this).DataTable( {
 "fnDrawCallback": function(){
	 

	 
	 
	 
	 
	 
	 
$('.tooltipzy').tooltipster({
	side: 'right',
    content: 'Loading...',
	animationDuration: 10,
	contentAsHTML: true,
	theme: ['aiontooltip'],
    // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
    functionBefore: function(instance, helper) {
        
        var $origin = $(helper.origin);
		
		
		var $origin = $(helper.origin),
            toolid = $origin.attr('tooltipid');
			toollang = $origin.attr('tooltiplang');
			toolcount = $origin.attr('tooltipcount');
			classic = $origin.attr('classic');
		
        
        // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
        if ($origin.data('loaded') !== true) {

            $.get("https://aionpowerbook.com/powerbook/extensions/AionExtensions/tooltip.php?lang=" + toollang + "&id=" + toolid + "&count=" + toolcount + "&classic=" + classic, function(data) {

                // call the 'content' method to update the content of our tooltip with the returned data.
                // note: this content update will trigger an update animation (see the updateAnimation option)
                instance.content(data);

                // to remember that the data has been loaded
                $origin.data('loaded', true);
            });
        }
    }
});	 
	 
$('.crafttooltipzy').tooltipster({
	side: 'bottom',
    content: 'Loading...',
	animationDuration: 10,
	contentAsHTML: true,
	theme: ['aiontooltip'],
    // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
    functionBefore: function(instance, helper) {
        
        var $origin = $(helper.origin);
		
		
		var $origin = $(helper.origin),
            toolid = $origin.attr('crafttooltipID');
			toollang = $origin.attr('crafttooltiplang');
			classic = $origin.attr('classic');
		
        
        // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
        if ($origin.data('loaded') !== true) {

            $.get("https://aionpowerbook.com/powerbook/extensions/AionExtensions/crafttooltip.php?lang=" + toollang + "&id=" + toolid + "&classic=" + classic, function(data) {

                // call the 'content' method to update the content of our tooltip with the returned data.
                // note: this content update will trigger an update animation (see the updateAnimation option)
                instance.content(data);

                // to remember that the data has been loaded
                $origin.data('loaded', true);
            });
        }
    }
});

$('.skilltipzy').tooltipster({
	side: 'right',
    content: 'Loading...',
	animationDuration: 10,
	contentAsHTML: true,
	theme: ['aiontooltip'],
    // 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
    functionBefore: function(instance, helper) {
        
        var $origin = $(helper.origin);
		
		
		var $origin = $(helper.origin),
            skillid = $origin.attr('skillid');
			toollang = $origin.attr('skilltiplang');
			classic = $origin.attr('classic');
		
        
        // we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
        if ($origin.data('loaded') !== true) {

            $.get("https://aionpowerbook.com/powerbook/extensions/AionExtensions/skilltooltip.php?lang=" + toollang + "&id=" + skillid + "&classic=" + classic, function(data) {

                // call the 'content' method to update the content of our tooltip with the returned data.
                // note: this content update will trigger an update animation (see the updateAnimation option)
                instance.content(data);

                // to remember that the data has been loaded
                $origin.data('loaded', true);
            });
        }
    }
});

	 
 },
 'columnDefs': coulmns,
 'processing': true,
 'bFilter': filter,
 'responsive': true,
 'language': { 'processing': "<img src='https://aionpowerbook.com/powerbook/extensions/a_item_tables/2.gif'>", 'searchPlaceholder': "Global search..."},
 'serverSide': true,
 'order': [[ dataOrder, 'asc' ]],
 'ajax':{ 
 'type': 'post',
 'url' : source
 }
});

$('.custom-search-input-text').on('change', function () {
					var i =$(this).attr('data-column');
					var v =$(this).val();
					DataTable.columns(i).search(v).draw();
				} );
				
$('.custom-search-input-text2').on('change', function () {
					var i =$(this).attr('data-column');
					var v =$(this).val();
					DataTable.columns(i).search(v).draw();
				} );

$('.search-input-select').on('change', function () {
					var i =$(this).attr('data-column');  
					var v =$(this).val();  
					DataTable.columns(i).search(v).draw();
				} );
				
$('#chosen-select-npc').on('change', function () {
					var meals = $(this).val();
					var selectedmeals = meals.join(", ");
					var i =$(this).attr('data-column');  
					DataTable.columns(i).search(selectedmeals).draw();
				} );
				
$('#chosen-select-slot').on('change', function () {
					var getslots = $(this).val();
					var selectedslots = getslots.join(", ");
					var i =$(this).attr('data-column');  
					DataTable.columns(i).search(selectedslots).draw();
				} );	
$('#chosen-select-stats').on('change', function () {
					var getstats = $(this).val();
					var selectedstats = getstats.join(", ");
					var i =$(this).attr('data-column');  
					DataTable.columns(i).search(selectedstats).draw();
				} );				
$('#itemcheckBox-range').on('change', function () {
	if(this.checked) {
					
					var i =$(this).attr('data-column');  
					var v = '1';
					DataTable.columns(i).search(v).draw();
	}else {
					var i =$(this).attr('data-column');  
					var v = '0';
					DataTable.columns(i).search(v).draw();
	}
				} );					
			
				

	
	
$('#clearalldt').on('click', function(){
	
	var resetorder = $(this).attr("resetorder");
	
	
	$("#chosen-select-npc").val('Monster Type...').trigger("chosen:updated"); // resets chosen values
	$("#chosen-select-slot").val('Item Type...').trigger("chosen:updated"); // resets chosen values
	$("#chosen-select-stats").val('Item Attributes...').trigger("chosen:updated"); // resets chosen values
	$('.custom-search-input-text').val('').attr("placeholder", "Min");
	$('#itemcheckBox-range').prop('checked', false);
	$(".search-input-select").prop('selectedIndex',0);
	$('.custom-search-input-text2').val('').attr("placeholder", "Max");
	DataTable.order([[ resetorder, 'asc' ]]); //reorders the table by the 1st column
	DataTable.search( '' ).columns().search( '' ).draw(); // resets search boxes
	DataTable.ajax.reload(null, false); // reloads ajax
});
				
				
});

$('.chosen-select-npc').chosen({width: "350px"});
$('.chosen-select-slot').chosen({width: "350px"});
$('.chosen-select-stats').chosen({width: "900px"});







function formatState (state) {
  if (!state.id) {
    return state.text;
  }
  var baseUrl = "/user/pages/images/flags";
  var $state = $(
    '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
  );
  return $state;
};

$('.languageselect').msDropDown();






$('.additionalinfo').click(function(){
        $('.devdetails').toggle();
});



$('.randombonuses').click(function(){
        $('.randombonusesdetails').toggle();
});

$('.UpgradeTree').click(function(){
        $('.UpgradeTreeDetails').toggle();
});

$('.enchantskills').click(function(){
        $('.enchantskillsdetails').toggle();
    });






$('.compareEU').click(function(){  
		var source = $(this).attr("compareurl");
        $('.loadcompareEU').load(source);
		$('.fullloadcompareEU').toggle();
		$('.wrap_itemnavi').toggle();
		$('.wrap_itemnavinew').toggle();
     });





$('#various3').magnificPopup({
	type : 'iframe',
	mainClass: 'aionviever'
});

$('#various4').magnificPopup({
	type : 'iframe',
	mainClass: 'aionviever'
});




$('#fancyquest').magnificPopup({
	type : 'iframe',
	mainClass: 'aionquest'
});


$('#questvideo').magnificPopup({
	type : 'iframe',
});



$('.newscarousel').carousel({
	pause: "hover"
});


$('.armorcarousel').carousel({
	pause: "hover",
	interval: 20000
});

$('.mapcarousel').carousel({
	pause: "hover",
	interval: 50000
});

	
	
	

	
	
	
	
(function () {
    'use strict';

    if (jQuery.fn.wheel) { // already polyfilled
        return;
    }

    // Normalizing event properties for the 'wheel' event (like event.which etc.).
    // This is only needed for jQuery <3.0.
    if (jQuery.event.fixHooks) {
        jQuery.event.fixHooks.wheel = jQuery.event.mouseHooks;
    }

    var handler = function (orgEvent) {
        var i;
        var args = Array(arguments.length);
        var ev = jQuery.event.fix(orgEvent);

        for (i = 0; i < args.length; i++) {
            args[i] = arguments[i];
        }

        ev.deltaMode = orgEvent.deltaMode;
        ev.deltaX = orgEvent.deltaX;
        ev.deltaY = orgEvent.deltaY;
        ev.deltaZ = orgEvent.deltaZ;

        // Exchange original event for the modified one in arguments list.
        args[0] = ev;

        return jQuery.event.dispatch.apply(this, args);
    };

    // Implementing jQuery `wheel` event via native `wheel` event.
    jQuery.event.special.wheel = {
        setup: function () {
            this.addEventListener('wheel', handler);
        },

        teardown: function () {
            this.removeEventListener('wheel', handler);
        },
    };

    // Implement `$object.wheel()` and `$object.wheel(handler)`.
    jQuery.fn.wheel = function (data, fn) {
        return arguments.length > 0 ?
            this.on('wheel', null, data, fn) :
            this.trigger('wheel');
    };
})();
	

(function($) {
	
	var gameMapRatio = [0.1954, 0.3, 0.44, 0.66, 1, 1.33];
	var staticUrl = "https://aionpowerbook.com/" ;
	
	$.fn.aionMapK = function(options) {
		var opts = $.extend({}, $.fn.aionMapK.defaults, options);
		var obj = this;

		var action = {
			init : function() {
				obj.data("opts",opts);
				opts = obj.data("opts");
				obj.empty();

				action.initializeMapDisplayArea();
				action.initialiDdraghandler();
				action.initializeMapType();
				action.initializeZoomLevel();
				if (obj.data("opts").caption != null) action.initializeCaption();
				action.loadMap();
			},
			initializeMapDisplayArea : function() {
				obj.addClass("aionmap " + obj.data("opts").viewType);
				$("<h3/>")
				.attr({class: "area_name"})
				.html("<span class='" + mapSet[opts.zone].label+"' >" + mapSet[opts.zone].name + "</span>")
				.appendTo(obj);
				$("<div/>")
				.attr({class: "map_container"})
				.appendTo(obj);
				if (obj.data("opts").npcID != null) {
				$("<div/>")
				.attr({class: "expand_map_btn"})
				
				.attr({href: "https://aionpowerbook.com/powerbook/extensions/AionExtensions/bigmap.php?id=" + obj.data("opts").npcID})
				
				.appendTo(obj);
				}
				$("<div/>")
				.attr({class: "canvas_none"})
				.appendTo(obj);
			},
			initialiDdraghandler : function() {
				var mapContanerY = obj.find('.map_container').offset().top;
				var mapContanerX = obj.find('.map_container').offset().left;
				var mapContanerW = Math.round(3072 * gameMapRatio[obj.data("opts").zoomLevel]);
				var mapContanerH = Math.round(3072 * gameMapRatio[obj.data("opts").zoomLevel]);


				// create drag handler
				$("<div/>")
					.attr({class: "drag_handler"})
					.css({width:mapContanerW, height:mapContanerH})
					
					

					.on('wheel',function(event){
						var mapContanerPosY = obj.find('.map_container').offset().top;
						var mapContanerPosX = obj.find('.map_container').offset().left;
						if(obj.data('opts').mapType != "simple") {
							
							if(event.deltaY<0 && Number(obj.data('opts').zoomLevel) <5) {
								currentZoomLevel = parseInt(obj.data("opts").zoomLevel);
								rate = gameMapRatio[currentZoomLevel+1] / gameMapRatio[currentZoomLevel];

								eventX = event.pageX - mapContanerPosX;
								eventY = event.pageY - mapContanerPosY;

								marginX = parseInt(obj.find('.map_canvas').css('left'));
								marginY = parseInt(obj.find('.map_canvas').css('top'));

								afterMarginX = ((eventX - marginX) * rate - eventX) * -1;
								afterMarginY =  ((eventY - marginY) * rate - eventY) * -1;

								action.onChangeZoom(Number(obj.data('opts').zoomLevel) +1);

								$(".map_canvas", obj).css({top:afterMarginY +"px", left:afterMarginX +"px"});
								$(".drag_handler", obj).css({top:afterMarginY +"px", left:afterMarginX +"px"});
								action.getCenterPoint();
								action.onChangeZoom(Number(obj.data('opts').zoomLevel));


								return false;
							} else if(event.deltaY>0 && Number(obj.data('opts').zoomLevel) > 0) {
								currentZoomLevel = parseInt(obj.data("opts").zoomLevel);
								rate = gameMapRatio[currentZoomLevel-1] / gameMapRatio[currentZoomLevel];

								eventX = event.pageX - mapContanerPosX;
								eventY = event.pageY - mapContanerPosY;

								marginX = parseInt(obj.find('.map_canvas').css('left'));
								marginY = parseInt(obj.find('.map_canvas').css('top'));

								afterMarginX = ((eventX - marginX) * rate - eventX) * -1;
								afterMarginY =  ((eventY - marginY) * rate - eventY) * -1;


								action.onChangeZoom(Number(obj.data('opts').zoomLevel) -1);

								$(".map_canvas", obj).css({top:afterMarginY +"px", left:afterMarginX +"px"});
								$(".drag_handler", obj).css({top:afterMarginY +"px", left:afterMarginX +"px"});
								action.getCenterPoint();
								action.onChangeZoom(Number(obj.data('opts').zoomLevel));

								return false;
							}
							if(obj.attr("id") == "expand_map") return false;
						}
					})
					.appendTo($(obj.find('.map_container')));
			},
			initializeZoomLevel : function() {
				// create zoom pannel 
				$("<div/>")
				.attr({class: "zoom"})
				.appendTo(obj);
				$("<div/>")
				.attr({class: "zoom_cnt"})
				.appendTo($('.zoom', obj));

				// zoom button event 
				$("<div/>")
				.attr({class: "btn_current"})
				.appendTo($('.zoom_cnt', obj));
				$("<span/>")
				.attr({class: "btn_plus"})
				.html("+")
				.on('click',function(){
					action.onChangeZoom(Number(obj.data('opts').zoomLevel) +1);
				})
				.appendTo($('.zoom_cnt', obj));
				$("<span/>")
				.attr({class: "btn_minus"})
				.html("-")
				.on('click',function(){
					action.onChangeZoom(Number(obj.data('opts').zoomLevel) -1);
				})
				.appendTo($('.zoom_cnt', obj));
			},
			initializeMapType : function() {
				$("<div/>")
				.attr({class: "toolbar"})
				.appendTo(obj);

				$("<span/>")
				.attr({class: "satellite"})
				.html("<span>위성</span>")
				.on('click',function(){
					action.onChangeMapType('satellite');
				})
				.appendTo($('.toolbar', obj));

				$("<span/>")
				.attr({class: "radar"})
				.html("<span>레이더</span>")
				.on('click',function(){
					action.onChangeMapType('radar');
				})
				.appendTo($('.toolbar', obj));
				$("<span/>")
				.attr({class: "simple"})
				.html("<span>일반</span>")
				.on('click',function(){
					action.onChangeMapType('simple');
				})
				.appendTo($('.toolbar', obj));
			},
			initializeCaption : function() {
				c = obj.data("opts").caption;
				var caption = "<ul>";
				$.each(c, function(i){
					caption += '<li class="'+ c[i].o +'"><input type="checkbox" id="' +obj.attr('id') + '_' +c[i].o +'" ';
					if(c[i].check == '1') caption += ' checked="checked" ';
					caption += '" /><label for="'+ obj.attr('id') + '_' +c[i].o  +'">'+ c[i].label +'</label></li>';
				});
				caption += "</ul>";
				$("<div/>")
				.attr({id:obj.attr('id')+"_caption", class: "aionmap_caption"})
				.html(caption)
				.find('input:checkbox').click(function(e){
					tmp = $(this).attr("id").split("_");
					if($(this).is(':checked')) {
						$(obj.find('.' +tmp[1])).show();
					} else {
						$(obj.find('.' +tmp[1])).hide();
					}
					c2 = $('#'+ tmp[0]).data("opts").caption;
					$.each(c2, function(i){
						if(c2[i].o == tmp[1]) {
							if(c2[i].check == '1') c2[i].check = '0';
							else c2[i].check = '1';
						}
					});
				}).end()
				.insertAfter(obj);
			},
			loadMap : function() {
				action.setMapBody();
				action.setToolbar();
				action.setZoomLevel();
				action.setMarks();
			},
			setMapBody : function() {
				var mapContainer = $(obj.find('.map_container'));

				var opts = obj.data("opts");
				if($('.map_canvas',mapContainer).length >0 ) {
					$('.map_canvas',mapContainer).remove();
				}
				$("<div/>")
					.attr({class: "map_canvas"})
					.html('<div class="canvas_normal"><div class="area"></div><div class="spots"></div></div><div class="canvas_simple"><div class="spots"></div></div>')
					.appendTo(mapContainer);

				frameW = $(obj.find('.map_container')).width();
				frameH = $(obj.find('.map_container')).height();

				if(obj.attr("id") == "expand_map") frameW = frameH = 600;

				if(obj.data("opts").coords[0].x == "null") {
					if(obj.data("opts").text == "null") {
						markCoord = action.getCenterMarksCoord();
						centerX = markCoord[0];
						centerY = markCoord[1];
					}else {
						centerX = obj.data("opts").marks[0].x;
						centerY = obj.data("opts").marks[0].y;
					}
				} else {
						centerX = obj.data("opts").coords[0].x;
						centerY = obj.data("opts").coords[0].y;
				}

				if(obj.data("opts").mapType == "simple") {
					imgSrc = staticUrl + mapSet[obj.data("opts").zone].map_simple;
					imgWidth = 768;
					imgHeight = 608;
					
					coord = action.getMapCoord(obj.data("opts").mapType, obj.data("opts").zone, centerX, centerY, obj.data("opts").zoomLevel);
					coord_x = frameW /2 - coord[0] ;
					coord_y = frameH /2 - coord[1];
					
					if(coord_x < frameW-imgWidth) coord_x = frameW-imgWidth;
					if(coord_x > 0) coord_x =0;
					if(coord_y < frameH-imgHeight) coord_y = frameH-imgHeight;
					if(coord_y > 0) coord_y =0;
					
					if(imgSrc == staticUrl) {
						$(".canvas_none", obj).show();
					} else {
						$(".canvas_none", obj).hide();
						$("<img />")
						.attr({class: "mapimg", src: imgSrc})
						.css({width:imgWidth, height:imgHeight})
						.appendTo($(mapContainer.find('.canvas_simple')));
						
						$(".map_canvas", obj).css({top:coord_y +"px", left:coord_x +"px"})
						$(".drag_handler", obj).css({top:coord_y +"px", left:coord_x +"px", width:imgWidth, height:imgHeight})
						$(".map_canvas", obj).show();
						$(".canvas_simple", obj).show();
						$(".canvas_normal", obj).hide();
					}
				} else {
					if(obj.data("opts").mapType == "satellite") {
						imgSrc = staticUrl + mapSet[obj.data("opts").zone].map_satellite;
					} else if(obj.data("opts").mapType == "radar") {
						imgSrc = staticUrl + mapSet[obj.data("opts").zone].map_radar;
					}
					imgWidth = imgHeight = Math.round(3072 * gameMapRatio[obj.data("opts").zoomLevel]);

					coord = action.getMapCoord(obj.data("opts").mapType, obj.data("opts").zone, centerX, centerY, obj.data("opts").zoomLevel);
					coord_x = frameW /2 - coord[0] ;
					coord_y = frameH /2 - coord[1];
					
					if(coord_x < frameW-imgWidth) coord_x = frameW-imgWidth;
					if(coord_x > 0) coord_x =0;
					if(coord_y < frameH-imgHeight) coord_y = frameH-imgHeight;
					if(coord_y > 0) coord_y =0;
					if(imgSrc == staticUrl) {
						$(".canvas_none", obj).show();
					} else {
						
						$(".canvas_none", obj).hide();
						$("<img />")
						.attr({class: "mapimg", src: imgSrc})
						.css({width:imgWidth, height:imgHeight})
						.appendTo($(mapContainer.find('.canvas_normal')));
						$(".map_canvas", obj).css({top:coord_y +"px", left:coord_x +"px"})
						$(".drag_handler", obj).css({top:coord_y +"px", left:coord_x +"px", width:imgWidth, height:imgHeight})
						
					}
				}
			},
			setToolbar : function() {
				tab = $('.toolbar span',obj).siblings().find('span');
				$.each(tab, function(i){
					if($($(this).parent()[0]).hasClass(obj.data("opts").mapType)) $(this).addClass('on');
					 else $(this).removeClass('on');
				});
			},
			setZoomLevel : function() {
				zoom_current = $('.btn_current',obj);
				zoomBarTop = 116 - 17 * obj.data("opts").zoomLevel;
				zoom_current.css({top:zoomBarTop +'px'});
				if (obj.data("opts").mapType == 'simple')
				{
					$('.zoom',obj).hide();
				} else {
					$('.zoom',obj).show();
				}
			},
			setMarks : function() {
				var zoneLabel ="";
				var spotLabel ="";
				if (obj.data("opts").mapType != "simple")
				{
					$.each(mapSet[obj.data("opts").zone].map_text, function(i){
						// with convert coords.
						coord = action.getMapCoord(obj.data("opts").mapType, obj.data("opts").zone, mapSet[obj.data("opts").zone].map_text[i].x,mapSet[obj.data("opts").zone].map_text[i].y, obj.data("opts").zoomLevel);
						coord_x = mapSet[obj.data("opts").zone].map_text[i].x * gameMapRatio[obj.data("opts").zoomLevel]- mapSet[obj.data("opts").zone].map_text[i].width/2;
						coord_y = mapSet[obj.data("opts").zone].map_text[i].y * gameMapRatio[obj.data("opts").zoomLevel]- mapSet[obj.data("opts").zone].map_text[i].height/2;
						zoneLabel += '<img src="' +staticUrl + mapSet[obj.data("opts").zone].map_text[i].filename + '" style="position:absolute;top:' + coord_y +'px; left:' + coord_x +'px;" alt="' + mapSet[obj.data("opts").zone].map_text[i].name+'" class="label_' + mapSet[obj.data("opts").zone].map_text[i].ui_map + ' png24" />';
					})
					$('.canvas_normal .area', obj).html(zoneLabel);
				}
				if(obj.data("opts").zoomLevel < 3) $('.label_zoom', obj).hide(); //3단계부터만 display

				m = obj.data("opts").marks;
				if(obj.data("opts").text != "null") {
						coord = action.getMapCoord(obj.data("opts").mapType, obj.data("opts").zone, m[0].x,m[0].y, obj.data("opts").zoomLevel);
						spotLabel += '<span class="icon '+ m[0].o +'" style="top:' + (parseInt(coord[1])-10)+'px; left:' + (parseInt(coord[0])-9)+'px;"></span>';
						spotLabel += '<span class="map_desc" style="top:' + (parseInt(coord[1])-9)+'px; left:' + (parseInt(coord[0])-10)+'px;">' + obj.data("opts").text + '</span>';
				} else {
					$.each(m, function(i){
						coord = action.getMapCoord(obj.data("opts").mapType, obj.data("opts").zone, m[i].x,m[i].y, obj.data("opts").zoomLevel);
						spotLabel += '<span class="icon '+ m[i].o +'" style="top:' + (parseInt(coord[1])-10)+'px; left:' + (parseInt(coord[0])-9)+'px;"></span>';
					});
				}
				if(spotLabel.indexOf("icon g2") != -1){
					$("<div/>")
					.attr({class: "help_gather"})
					.html("<p><span class='o2'></span> Random Spawn</p><p><span class='o1'></span> Fixed Spawn</p>")
					.appendTo(obj);
				}
				if (obj.data("opts").mapType != "simple") {
					$('.canvas_normal .spots', obj).html(spotLabel);
				} else {
					$('.canvas_simple .spots', obj).html(spotLabel);
				}
				if(obj.data("opts").text != "null") {
					descBox = $('.map_desc', obj);
					descBoxW = descBox.width()+7;
					descBoxH = descBox.height()+11;
					descBoxPosY = parseInt(descBox.css('top'));
					descBoxPosX = parseInt(descBox.css('left'));

					if($('.mapimg', obj).width() < descBoxW + descBoxPosX)  descBoxPosX= descBoxPosX  - descBoxW-11;
					if($('.mapimg', obj).height() < descBoxH + descBoxPosY)  descBoxPosY= descBoxPosY  - descBoxH -7;
					descBox.css({top:descBoxPosY +"px", left:descBoxPosX +"px"});
				}
				
				if(obj.data("opts").caption != null) {
					c = obj.data("opts").caption;
					$.each(c, function(i){
						if(c[i].check == '0') {
							$(obj.find('.' +c[i].o)).hide();
						}
					});
				}
			},
			getCenterMarksCoord : function() {
				var minX =99999,maxX =-99999,minY =99999,maxY =-99999;

				m = obj.data("opts").marks;
				$.each(m, function(i){
					if (minX > parseInt(m[i].x)) minX = parseInt(m[i].x);
					if (maxX < parseInt(m[i].x)) maxX = parseInt(m[i].x);
					if (minY > parseInt(m[i].y)) minY = parseInt(m[i].y);
					if (maxY < parseInt(m[i].y)) maxY = parseInt(m[i].y);
				})
				marksX = (minX + maxX)/2;
				marksY = (minY + maxY)/2;
				return new Array(marksX, marksY);
			},
			onChangeZoom : function(n) {
				if( n > 5 ) return false;
				if( n < 0 ) return false;
				obj.data("opts").zoomLevel = n;
				action.loadMap();
			},
			onChangeMapType : function(type) {
				obj.data("opts").mapType = type;
				var zone = obj.data("opts").zone;
				action.loadMap();
			},
			
			getMapCoord : function(type, zone, x, y, level) {
				var ix = 0;
				var iy = 0;
				var scale = 0;
				var map_width = 3072;
				var map_height = 3072;
				var newmap_width = 0;
				var newmap_height = 0;
				data =  mapSet[zone];
				if(type=="simple") {
					ix = y - data.offset_x;
					iy = x - data.offset_y;
					scale = data.map_width / data.world_width * data.scale;
					ix = ix * scale;
					iy = iy * scale;
					if(zone=="LC1") {
						ix = data.map_width - ix;
						iy = data.map_height - iy;
					}
				} else if(type=="satellite" || type=="radar") {
					if(zone == "LC1") {
						x = data.world_height - x;
						y = data.world_width - y;
					}
					newmap_width = data.newmap_width;
					newmap_height = data.newmap_height;
					if(newmap_width==0) newmap_width = data.world_width;
					if(newmap_height==0) newmap_height = data.world_height;
					scale = map_width / newmap_width;
					ix = y - data.newmap_offset_x;
					ix = ix * scale;
					iy = x - data.newmap_offset_y;
					iy = iy * scale;
					
					ix = Math.round(ix * gameMapRatio[level]);
					iy = Math.round(iy * gameMapRatio[level]);
				}
				return new Array(ix, iy);
			},
			getWorldmapCoord : function(type, zone, x, y, level) {
				var data;
				var wx = 0;
				var wy = 0;
				var scale = 0;
				var map_width = 3072;
				var map_height = 3072;
				var newmap_width = 0;
				var newmap_height = 0;
				data =  mapSet[zone];
				if(type=="simple") {
					if(zone=="LC1") {
						x = data.map_width - x;
						y = data.map_height - y;
					}
					scale = data.map_width / data.world_width * data.scale;
					wx = x / scale;
					wy = y / scale;
					wx = wx + data.offset_x;
					wy = wy + data.offset_y;
				} else if(type=="satellite" || type=="radar") {
					
					x = x / gameMapRatio[level];
					y= y/ gameMapRatio[level];

					newmap_width = data.newmap_width;
					newmap_height = data.newmap_height;
					if(newmap_width==0) newmap_width = data.world_width;
					if(newmap_height==0) newmap_height = data.world_height;
					scale = map_width / newmap_width;
					wx = x / scale;
					wx = wx + data.newmap_offset_x;
					wy = y / scale;
					wy = wy + data.newmap_offset_y;
					if(zone == "LC1") {
						wx = data.world_height - wx;
						wy = data.world_width - wy;
					}
					
				}
				return new Array(Math.round(wy), Math.round(wx));
			},
			getCenterPoint : function() {
				o =$(obj.find('.map_container'));
				frameW = o.width();
				frameH = o.height();
				framePosX =  parseInt($(o.find('.drag_handler')).css('left'));
				framePosY = parseInt($(o.find('.drag_handler')).css('top'));
				cx = frameW /2 - framePosX;
				cy = frameH /2 - framePosY;

				var worldPoint = action.getWorldmapCoord(obj.data("opts").mapType,obj.data("opts").zone, cx, cy, obj.data("opts").zoomLevel);
				obj.data("opts").coords= Array({'x':worldPoint[0],'y':worldPoint[1]});
			}
		};
		action.init();
	};

	$.fn.aionMapK.defaults = {viewType:"gamemap1",zoomLevel:"0",zone:"LC1",mapType:"satellite",marks:"null", text:"null", coords:Array({'x':'null','y':'null'})};
	
	move_map =function (targetEl, zone, text, marks) {
			//map1', 'LF2',  'test1', '{o:m2,x:792,y:653}'); return false;
			
			targetEl = $("#" + targetEl);
			targetEl.data("opts").marks = marks;
			
			targetEl.data("opts").coords = Array({'x':'null','y':'null'});
			if(targetEl.data("opts").zone != zone) targetEl.data("opts").zoomLevle="0";
			targetEl.data("opts").text = text;

			targetEl.aionMapK({mapType:targetEl.data("opts").mapType,viewType:targetEl.data("opts").viewType,zoomLevel:targetEl.data("opts").zoomLevel, zone:zone,marks:targetEl.data("opts").marks, text:targetEl.data("opts").text});

	};
	
	move_map_no_text =function (targetEl, zone, marks) {
			//map1', 'LF2',  'test1', '{o:m2,x:792,y:653}'); return false;
			
			targetEl = $("#" + targetEl);
			targetEl.data("opts").marks = marks;
			
			targetEl.data("opts").coords = Array({'x':'null','y':'null'});
			if(targetEl.data("opts").zone != zone) targetEl.data("opts").zoomLevle="0";

			targetEl.aionMapK({mapType:targetEl.data("opts").mapType,viewType:targetEl.data("opts").viewType,zoomLevel:targetEl.data("opts").zoomLevel, zone:zone,marks:targetEl.data("opts").marks});

	};
	
	
			
}( jQuery ));





$('.object_minimap').each(function() {
var mapzone = $(this).attr("mapzone");
var npcID = $(this).attr("npcid");
var marks = $(this).attr("mapmarks");
var repmarks = marks.replace(/\|/g, '"');
var markArray = repmarks.split(';');
var index;
var finalArray = [];

for (index = 0; index < markArray.length; ++index) {
    var fin = JSON.parse(markArray[index]);
	finalArray.push(fin);
}

var fin = JSON.parse(markArray[0]);

var aionMapK = $(this).aionMapK( {
	zone: mapzone,
	mapType: 'satellite',
	viewType:'gamemap2',
	marks: finalArray,
	npcID: npcID
});
});

$('.expand_map_btn').magnificPopup({
	type : 'iframe',
	mainClass: 'aionviever'
});