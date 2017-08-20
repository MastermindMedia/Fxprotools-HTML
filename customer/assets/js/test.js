// All Test demo functions

// Marketing Contact View - Purchase Details
$(document).on('click', '.view-purchase-details', function(e){
	$('#table-purchases').fadeOut('normal', function(){
		$('#view-purchase-details').fadeIn();
	});
	e.preventDefault();
});

$(document).on('click', '#close-purchase-details', function(e){
	$('#view-purchase-details').fadeOut('normal', function(){
		$('#table-purchases').fadeIn();
	});
	e.preventDefault();
});