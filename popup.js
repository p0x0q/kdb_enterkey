	jQuery(document).ready(function(){
		chrome.storage.local.get(["runnerloop_base"], function (value) {
		jQuery("#textbox_1").val(value.runnerloop_base);
		});
	});
    jQuery('#save_button').click(function(){
		chrome.storage.local.set({'runnerloop_base': jQuery("#textbox_1").val()}, function () {});
        document.write("Option saved.");
    });