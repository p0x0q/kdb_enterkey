$(document).ready(function(){
	// jQuery('#freeWord').keypress( function ( e ) {
	// 	if ( e.which == 13 ) {
	// 		jQuery("#openingCourseListForm table:first-of-type td input:first-child").click();
	// 	}
	// });
	// jQuery('#txtSyllabus').keypress( function ( e ) {
	// 	if ( e.which == 13 ) {
	// 		jQuery("#btnSearch").click();
	// 	}
	// });
	jQuery('#freeWord').keypress( function ( e ) {
		if ( e.which == 13 ) {
			jQuery("#openingCourseListForm table td input[type=button]:nth-child(2)").click();
		}
	});

});