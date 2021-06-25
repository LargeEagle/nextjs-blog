////for mobile view interactive////



var targetID = "44cb17c2-12b6-4f00-88b9-2105c4481537";
var BMID = "82d25547-78d5-4094-9c4b-012fcfaf1bf3"
// AddGroup(targetID);
// AddGroup(BMID);


// function AddGroup(id){

$("#Question-"+targetID+"__cboDataList > tbody > tr").each(function(){
var groupCount =0;
if ($(this).find("Label:contains('[C]')").length > 0){
groupCount ++
$(this).attr("group",groupCount);
$(this).attr("category","yes");
}
if ($(this).find("Label:contains('[C]')").length < 1){
$(this).attr("group",groupCount);
$(this).attr("category","no");
$(this).css("display","none");
}

$(this).find("input:checkbox").on( "click", function() {
if($(this).prop("checked") === true && $(this).closest("tr").attr("category") ==="yes"){
$("#Question-"+targetID+"__cboDataList").find("tr[group='"+$(this).closest("tr").attr("group")+"'][category='no']").css("display","revert");
$("#Question-"+targetID+"__cboDataList > tbody >tr[category='yes']").find("input:not(:checked)").closest("tr[category='yes']").css("display","none");
}
if($(this).prop("checked") === false && $(this).closest("tr").attr("category") ==="yes"){
 UnCheckCheckbox($("#Question-"+targetID+"__cboDataList").find("tr[group='"+$(this).closest("tr").attr("group")+"'][category='no']").find("input:checkbox"))
$("#Question-"+targetID+"__cboDataList").find("tr[group='"+$(this).closest("tr").attr("group")+"'][category='no']").find("input:text").val("");
$("#Question-"+targetID+"__cboDataList").find("tr[group='"+$(this).closest("tr").attr("group")+"'][category='no']").css("display","none");
$("#Question-"+targetID+"__cboDataList > tbody >tr[category='yes']").find("input:not(:checked)").closest("tr[category='yes']").css("display","revert");

}
});

})



// for bm //


$("#Question-"+BMID+"__cboDataList > tbody > tr").each(function(){
var groupCount =0;
if ($(this).find("Label:contains('[C]')").length > 0){
groupCount ++
$(this).attr("group",groupCount);
$(this).attr("category","yes");
}
if ($(this).find("Label:contains('[C]')").length < 1){
$(this).attr("group",groupCount);
$(this).attr("category","no");
}
})


$("#hideStart").closest("tr").addClass("business-interest");
$("#hideEnd").closest("table").parent().parent().addClass("business-interest");
$("#hideStart").closest("tr").nextUntil($("#hideEnd").closest("table").parent().parent()).addClass("business-interest");



if($("#showController").parent().next("input:radio").prop("checked") === true){
$(".business-interest").css("display","revert");
}else{
$(".business-interest").css("display","none");
$(".business-interest").find("input:checkbox").prop("checked",false);
$(".business-interest").find("input:text").val("");
// $(".business-interest").find("input[category='no']").prop("disabled",true);
// $(".business-interest").find("input[category='yes']").prop("disabled",false);
}


$("#hideController").parent().next("input:radio").click(function() {
if($(this).prop("checked") === true){$(".business-interest").css("display","none");
$(".business-interest").find("input:checkbox").prop("checked",false);
$(".business-interest").find("input:text").val("");
// $(".business-interest").find("input[category='no']").prop("disabled",true);
// $(".business-interest").find("input[category='yes']").prop("disabled",false);
}
});

$("#showController").parent().next("input:radio").click(function() {
if($(this).prop("checked") === true){$(".business-interest").css("display","revert");}
});

//CheckCheckbox($("#Question-44cb17c2-12b6-4f00-88b9-2105c4481537__cboDataList__ctl1639__Checkbox"))

function UnCheckCheckbox(checkbox){
checkbox.attr("data-cacheval","true")
checkbox.prev("label").removeClass("ui-checkbox-on");
checkbox.prev("label").addClass("ui-checkbox-off");
checkbox.prop("checked",false);
}


function CheckCheckbox(checkbox){
checkbox.attr("data-cacheval","false")
checkbox.prev("label").removeClass("ui-checkbox-off");
checkbox.prev("label").addClass("ui-checkbox-on");
checkbox.prop("checked",true);

}
