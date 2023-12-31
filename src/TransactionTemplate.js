"use strict";

/**
 * Template for transaction.
 */
function TransactionTemplate() {
  this.template = `<div class="transaction-item-wrap" data-target={{id}}>
                           <div class="transaction-subtracting">
                                 <span><i class="fa fa-{{transactionType}}" aria-hidden="true"></i></span>
                           </div>
                           <div class="transaction-title">
                                 <p>
                                      {{transactionName}}
                                 </p>
                                 <span>
                                      {{transactionDescription}} #{{transactionCode}} - <span id="transactionDate">{{transactionDate}}</span>
                                 </span>
                           </div>
                           <div class="transaction-cost {{damage}}">
                                 <span>
                                      $ {{transactionCost}}
                                 </span>
                           </div>
                      </div>`;
}

/**
 * Maps out the array passed to it, and returns a view string.
 * @param {array} arr - Array containing a card object.
 */
TransactionTemplate.prototype.render = function (arr) {
  let list = document.getElementById("transactList");
  let view = "";
  let template = this.template;

  arr.map((obj) => {
    let type = obj.transactionType === "true" ? "plus" : "minus";
    template = template.replace("{{transactionType}}", type);
    template = template.replace("{{transactionName}}", obj.transactionName);
    template = template.replace(
      "{{transactionDescription}}",
      obj.transactionDescription
    );
    template = template.replace("{{transactionCode}}", obj.transactionCode);
    template = template.replace("{{transactionDate}}", obj.transactionDate);
    template = template.replace("{{transactionCost}}", obj.transactionAmount);
    template = template.replace("{{damage}}", type);
    template = template.replace("{{id}}", obj.transactionID);

    view += template;
  });

  return view;
};
