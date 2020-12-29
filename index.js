"use strict";

const btn = document.querySelector(".btn");
const bodyTable = document.querySelector(".bodyTable");
const tableRow = document.querySelector(".table-row");

function add() {
  tableRow.classList.add("visible");

  let nameEl = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let amount = document.getElementById("amount").value;

  let tablerow = document.createElement("tr");

  let text = document.createElement("td");
  let textName = document.createTextNode(nameEl);
  text.appendChild(textName);
  tablerow.appendChild(text);
  bodyTable.appendChild(tablerow);

  let textDa = document.createElement("td");
  let textDate = document.createTextNode(date);
  textDa.appendChild(textDate);
  tablerow.appendChild(textDa);
  bodyTable.appendChild(tablerow);

  let textAm = document.createElement("td");
  let textAmount = document.createTextNode(amount);
  textAm.appendChild(textAmount);
  tablerow.appendChild(textAm);
  bodyTable.appendChild(tablerow);

  let textButton = document.createElement("td");
  let x = document.createElement("button");
  x.textContent = "x";
  textButton.appendChild(x);
  tablerow.appendChild(textButton);
  bodyTable.appendChild(tablerow);
  x.style.width = "3rem";

  x.addEventListener("click", () => {
    bodyTable.removeChild(tablerow);

    if (document.querySelectorAll(".bodyTable tr").length <= 1) {
      tableRow.classList.remove("visible");
    }
  });
}
