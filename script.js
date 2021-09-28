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
  // let crown = document.querySelector("#crown");
  // let visor = document.querySelector("#visor");

  document.querySelectorAll(".cls-1").forEach((item) => {
    // console.log("ITEM", item.getAttribute("fill"));
    item.addEventListener("click", (event) => {
      //fill din't work as event.target.fill
      console.log("clicked");
      setElement(event.target);

      event.target.style.fill = "grey";
      setElement(event.target);
    });
  });

  function setElement(element) {
    elementToPaint = element;
  }

  document.querySelectorAll("rect").forEach((item) => {
    // console.log("ITEM", item.getAttribute("fill"));
    item.addEventListener("click", (event) => {
      console.log(elementToPaint);
      //fill din't work as event.target.fill
      setColor(event.target.getAttribute("fill"));
      // console.log(event.target.getAttribute("fill"));
    });
  });
}

// function setElement(element) {
//   setColor(visor, event.target.getAttribute("fill"));
// }

function setColor(color) {
  console.log(color);
  elementToPaint.style.fill = color;
}
