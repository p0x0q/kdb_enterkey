
$(document).ready(function(){
	jQuery('#txtSyllabus').keypress( function ( e ) {
		if ( e.which == 13 ) {
			jQuery("#btnSearch").click();
		}
	});
});