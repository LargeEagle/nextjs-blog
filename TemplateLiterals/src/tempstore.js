//let's go
var tagetID = "Question-8e1fd766-ffeb-46ca-8b6e-8ca6a12f097b__cboDataList"
var targetQuestion= [];
var neoQuestionID = "NeoQuestion-"


$("#" + tagetID).find("label").each(function( index ) {
// if($(this).text().is(':contains("[C]")')){
if($(this).is(':contains("[C]")')){
targetQuestion.push({checkboxID:$(this).prev("input").attr("id"),questionLabel:$(this).text(),textbox:"no",textboxID:"no",category:"yes",group:0,id:index})
 }else{
if($(this).parent('span').next('input').length > 0){
targetQuestion.push({checkboxID:$(this).prev("input").attr("id"),questionLabel:$(this).text(),textbox:"yes",textboxID:$(this).parent('span').next('input').attr("id"),category:"no",group:0,id:index})
}else{
targetQuestion.push({checkboxID:$(this).prev("input").attr("id"),questionLabel:$(this).text(),textbox:"no",textboxID:"no",category:"no",group:0,id:index})

}
}


//targetQuestion.push({questionID:$(this).prev("input").attr("id"),questionLabel:$(this).text()})
});

targetQuestion.sort(function(a, b) {
  var checkboxIDA = a.checkboxID.toUpperCase(); // ignore upper and lowercase
  var checkboxIDAB = b.checkboxID.toUpperCase(); // ignore upper and lowercase
  if (checkboxIDA < checkboxIDAB) {
    return -1;
  }
  if (checkboxIDA > checkboxIDAB) {
    return 1;
  }

  // names must be equal
  return 0;
});

var groupID=0;
targetQuestion.map(item=>{
if(item.category === "yes"){
groupID++
item.group = groupID
}else{item.group = groupID}

})










/////////////////////////
//let's start rendering//
/////////////////////////

// console.log(targetQuestion)
var outputHTML = "";
var totalGroup = Math.max.apply(
  targetQuestion,
  targetQuestion.map(function (o) {
    return o.group;
  })
);

var startCount = 0;
(function () {
  var i;
  for (i = 0; i <= totalGroup; i++) {
    var outputSubQuestion = "";
    const currentGroupCategory = targetQuestion.filter(
      (item) => item.group === i && item.category === "yes"
    );
    const currentGourpSubQuestion = targetQuestion.filter(
      (item) => item.group === i && item.category === "no"
    );

    currentGourpSubQuestion.map((item) => {
      outputSubQuestion += `
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="${
        neoQuestionID + "Checkbox-" + item.id
      }" related-to="${item.checkboxID}" category="${item.category}" group="${
        item.group
      }"><label class="form-check-label" for="${
        neoQuestionID + "Checkbox-" + item.id
      }">${item.questionLabel}</label>
      ${
        item.textbox === "yes"
          ? `<input type="text" id="${
              neoQuestionID + "Textbox-" + item.id
            }" related-to="${item.textboxID}" />`
          : ``
      }
      </div> 
      `;
    });

    currentGroupCategory.map((item) => {
      outputHTML += `
<div class="accordion" id="NOBaccordionPanels">
 <div class="accordion-item">
   <h2 class="accordion-header" id="panels-${item.group}" >
   <div>
   <input class="categoryCheckbox" type="checkbox" id="${
     neoQuestionID + "Checkbox-" + item.id
   }" related-to="${item.checkboxID}" category="${item.category}" group="${
        item.group
      }">
</div>
     <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${
       item.group
     }" aria-expanded="true" aria-controls="panelsStayOpen-collapse-${
        item.group
      }" related-to="${item.checkboxID}">
       ${item.questionLabel} 
       ${
         item.textbox === "yes"
           ? `<input type="text" id="${
               neoQuestionID + "Textbox-" + item.id
             }" related-to="${item.textboxID}"/>`
           : ``
       }
     </button>
   </h2>
   <div id="panelsStayOpen-collapse-${
     item.group
   }" class="accordion-collapse collapse show" aria-labelledby="panels-${
        item.group
      }">
     <div class="accordion-body">${outputSubQuestion}</div></div>
   </div>
 </div>`;
    });
  }
})();

//console.log(startCount)

outputHTML =
  '<div class="useBootstrapForBreadGorStyle🤪">' + outputHTML + "<div>";



outputHTML = '<div class="useBootstrapForBreadGorStyle🤪">'+ outputHTML+'<div>'

$("#"+tagetID).before(outputHTML)




////////////////////////
//interactive
///////////////////////
$("#" + tagetID).prev("div.useBootstrapForBreadGorStyle🤪").find("input:checkbox").click(function() {
if($(this).prop("checked") === true){
$("#"+$(this).attr("related-to")).prop('checked', true);
}
if($(this).prop("checked") ===false){
$("#"+$(this).attr("related-to")).prop('checked', false);
}
SaveNOB() 
});

$("#" + tagetID).prev("div.useBootstrapForBreadGorStyle🤪").find("input:text").on( "keyup change", function() {
$("#"+$(this).attr("related-to")).val($(this).val())
SaveNOB() 
});



////////////////////
//for page reload//
//////////////////
$("#"+tagetID).find("input:checkbox").each(function( index ) {
if($(this).prop("checked") === true){
$('input[related-to="'+$(this).attr("id")+'"]').prop('checked', true);
}
});


$("#"+tagetID).find("input:text").each(function( index ) {
if($(this).val() !==""){
$('input[related-to="'+$(this).attr("id")+'"]').val($(this).val());
}
});



//////////////////////////
//save selected NOB option
//////////////////////////

function SaveNOB() {
var selectedOptionHTML = "";

$(".useBootstrapForBreadGorStyle🤪")
  .find("input:checkbox")
  .each(function (index) {
    if (this.checked === true) {
      if (this.getAttribute("category") === "yes") {
        selectedOptionHTML +=
          '<div style="background-color: #e7f1ff;color: #0c63e4;padding: 5px 0px 5px 0px;">' +
          $(this).parent().next("button").text() +
          "</div>";
      }

      if (this.getAttribute("category") === "no") {
        selectedOptionHTML += "<div>" + $(this).next("label").text();

       if($(this).next().next("input:text").length > 0){

        selectedOptionHTML += " : " + $(this).next().next("input:text").val() ;
        }
        selectedOptionHTML += "</div>"
      }

    }


  });

// $(".useBootstrapForBreadGorStyle🤪").append("<div>" + selectedOptionHTML + "</div>");



 localStorage.setItem('NOB', JSON.stringify({"id":tagetID,"html":selectedOptionHTML}));

console.log("done")

}
