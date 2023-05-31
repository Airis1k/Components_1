import { createNews as allNews } from "./news.js";

init();

function init() {
   // select main element
   const mainElement = document.querySelector("main");
   addNewsSection(mainElement);
}

function addNewsSection(mainDiv) {
   mainDiv.append(allNews());

   console.log(mainDiv);
}