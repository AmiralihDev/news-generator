import { findAdmin } from "./findAdmin";
import { newsCreateor } from "./newsCreateor";
import { ShowData } from "./showData";
import domGenerator from "dom-generator";
import { silverBox } from "./silverBox";
import { getDataFromLs } from "./getDataFromLs";
import { setNewsReader } from "./setNewsReader";
import { setDataToLs } from "./setDataToLs";
import { findNews } from "./showNews";

let menu = document.getElementById("menu");
let newBtn = document.getElementById("newsCreateor");
let newsList = [];

function EventListener() {
  document.addEventListener("DOMContentLoaded", settings);
  document.addEventListener("click", findNewsMain);
  newBtn.addEventListener("click", newsCreateorValidation);
}

EventListener();
function settings() {
  if (localStorage.getItem("isAdmin") != "true") {
    localStorage.setItem("isAdmin", "false");
  }
  let data = getDataFromLs("newsList");
  if (data) {
    
    newsList = data;
    data.forEach((element) => {
      let storage = new ShowData(
        element.auther,
        element.title,
        element.date
      );
    });
  }
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
        label: "Title",
        type: "text",
        placeHolder: "Enter Title",
        id: "title",
      },
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
  let title = document.getElementById("title");
  createBtn.addEventListener("click", () => {
    if (name.value == "" || textArea.value == "" || title.value == "") {
      silverBox({
        alertIcon: "error",
        text: "value is empty try again.",
        centerContent: true,
        cancelButton: {
          text: "OK",
        },
      });
    } else if (textArea.value.length < 12) {
      silverBox({
        alertIcon: "error",
        text: "your news text is small try again.",
        centerContent: true,
        cancelButton: {
          text: "OK",
        },
      });
    } else {
        newsCreateor(name.value, title.value, textArea.value, newsList);
        setDataToLs("newsList", JSON.stringify(newsList));
        silverBox({
            title: {
                   text: "Success",
                   alertIcon: "success"
            },
            text: "Your News is Added."
     })
    }
  });
}

function findNewsMain(e) {
  if (e.target.className == "menu-item") {
    localStorage.setItem("newsReader","none")
    setNewsReader(e);
    findNews()
  }
}
