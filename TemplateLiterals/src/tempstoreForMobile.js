////for mobile view interactive////


var groupCount =0;
var targetID = "8e1fd766-ffeb-46ca-8b6e-8ca6a12f097b";

$("#Question-"+targetID+"__cboDataList > tbody > tr").each(function(){
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
}
if($(this).prop("checked") === false && $(this).closest("tr").attr("category") ==="yes"){
$("#Question-"+targetID+"__cboDataList").find("tr[group='"+$(this).closest("tr").attr("group")+"'][category='no']").css("display","none");
}
});

})
