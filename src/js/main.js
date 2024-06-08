import { findAdmin } from "./findAdmin";
import { newsCreateor } from "./newsCreateor";
import { showData } from "./showData";
import domGenerator from "dom-generator";
import { silverBox } from "./silverBox";
let newBtn = document.getElementById("newsCreateor");
let newsList = [];

function EventListener() {
  document.addEventListener("DOMContentLoaded", settings);
  newBtn.addEventListener("click", newsCreateorValidation);
}

EventListener();
function settings() {
  showData();
  let admin = findAdmin();
  if (admin == true) {
    showNewBtn();
  }
}

function showNewBtn() {
  newBtn.style.visibility = "visible";
}

function newsCreateorValidation() {
  let textArea = document.createElement("textarea");
  textArea.id = "newsCreateDes";
  silverBox({
    customIcon: "",
    title: {
      text: "new news",
    },
    centerContent: true,
    text: "Enter your news information",
    showCloseButton: true,
    confirmButton: {
      text: "Create",
      closeOnClick: true,
      id: "createBtn",
      bgColor: "gray",
    },
    cancelButton: {},
    input: [
      {
        label: "name",
        type: "text",
        placeHolder: "Enter your name",
        id: "name",
      },
    ],
    html: textArea,
  });

  textArea = document.getElementById("newsCreateDes");
  let name = document.getElementById("name");
  let createBtn = document.getElementById("createBtn");
  createBtn.addEventListener("click", () => {
    if (name.value == "" || textArea.textContent == "") {
        
    }
  });
}
