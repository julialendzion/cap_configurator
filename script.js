"use strict";

document.addEventListener("DOMContentLoaded", start);
let elementToPaint = "none";

async function start() {
  let response = await fetch("cap-01.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;
  init();
}

function init() {
  document.querySelectorAll(".cls-1").forEach((item) => {
    item.addEventListener("click", (event) => {
      setElement(event.target);
      event.target.style.fill = "grey";
    });
  });

  function setElement(element) {
    elementToPaint = element;
  }

  document.querySelectorAll("rect").forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(elementToPaint);
      //fill din't work as event.target.fill --> item.getAttribute("fill")); solved it
      setColor(event.target.getAttribute("fill"));
    });
  });
}

function setColor(color) {
  console.log(color);
  elementToPaint.style.fill = color;
}
