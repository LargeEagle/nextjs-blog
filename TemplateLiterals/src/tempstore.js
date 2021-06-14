const targetQuestion = [
  {
    checkboxID:
      "Question-8e1fd766-ffeb-46ca-8b6e-8ca6a12f097b__cboDataList__ctl1700__Checkbox",
    questionLabel: "[C] User of Logistics Services ",
    textbox: "no",
    textboxID: "no",
    category: "yes",
    group: 1,
    id: 0,
  },
];

const tempHTML = `
<div class="accordion-body">
       <div style="display:revert"></div>${targetQuestion.map((item) => {
         var outputTextbox = "";
         if (item.category === "no" && item.group === i) {
           // <div class="form-check"> //            subOutputHTML += `
           //  <input class="form-check-input" type="checkbox" value="" id="${
           //    neoQuestionID + item.id
           //  }" related-to="${item.checkboxID}">
           //  <label class="form-check-label" for="${neoQuestionID + item.id}">
           //   ${item.questionLabel}
           //  </label>
           //    ${
           //      item.textbox === "yes"
           //        ? `<input type="texbox" related-to="${item.textboxID}"/>`
           //        : ``
           //    }

           // </div>

           // `;
           outputTextbox += `<div class="form-check"></div>
      <input class="form-check-input" type="checkbox" value="" id="${
        neoQuestionID + item.id
      }" related-to="${item.checkboxID}"><label class="form-check-label" for="${
             neoQuestionID + item.id
           }">${item.questionLabel}</label>${
             item.textbox === "yes"
               ? `<input type="texbox" related-to="${item.textboxID}"/>`
               : ``
           }`;
         }
         return outputTextbox;
       })}`;
