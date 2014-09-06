function updateDisplayStatus(target){
	if(target){
		updateSensorPropertyByType(target.options[target.selectedIndex].getAttribute('stype'));
	}
	
}


function updateSensorPropertyByType(type){
	$('.sensor_type_fields').hide();
	$('#sensor_type_' + type).show();
}


$('#sensor_type').change(function(e){
	updateDisplayStatus(this);
});

updateDisplayStatus($('#sensor_type')[0]);

function updateCBOptionalStatus(target){
	var relId = target.getAttribute('rel');
	if(target.checked){
		$('#' + relId).show();
	}else{
		$('#' + relId).hide();
	}
}


$('.cb_optional').each(function(index){
	updateCBOptionalStatus(this);
});

$('.cb_optional').click(function(){
	updateCBOptionalStatus(this);
});

//sensor_unit_symbol_select_helper
$("#sensor_unit").focus(function() {
        $("#sensor_unit_symbol_sel").css('display', '');
});

$(".sensor_unit_symbol_item").mousedown(function() {
    $("#sensor_unit_symbol").val($(this).text());
    $("#sensor_unit").val($(this).attr("title"));
});

$("#sensor_unit").blur(function () {
 	$("#sensor_unit_symbol_sel").css('display', 'none'); //释放
 });