import { checkAdmin } from "./checkAdmin";
import { getDataFromLs } from "./getDataFromLs";
import { newsCreator } from "./newsCreator";
import { setDataInLs } from "./setDataInLs";
import { showDateInComment, showLsData } from "./showData";
import { silverBox } from "./silverBox";

let websiteTitle = document.getElementById("websiteTitle");
let menu = document.getElementById("menu");
let inputFilter = document.getElementById("input-fliter");
let h1Welcome = document.getElementById("welcome");
let newNewsBtn = document.getElementById("newsCreatorBtn");
let newsTitle = document.getElementById("newsTitle");
let newsDec = document.getElementById("newsDec");
let newsAuthor = document.getElementById("newsAuthor");
let newsDate = document.getElementById("newsDate");
let comments = document.getElementById("comments");
let commentsContainr = document.getElementById("commentsContainr");
let authorComment = document.getElementById("authorComment");
let authorEmail = document.getElementById("authorEmail");
let newsComment = document.getElementById("comment");
let sendCommentBtn = document.getElementById("sendBtn");


let newsList = [];
let newsIndex 


function eventListener() {
  document.addEventListener("DOMContentLoaded", init);
  inputFilter.addEventListener("input", searchNews);
  sendCommentBtn.addEventListener("click", getCommentValue);
}
eventListener();

function init() {
  let isAdmin = checkAdmin();
  if (isAdmin == true) {
    showNewBtn();
  }
  let data = JSON.parse(getDataFromLs("newsList"));

  if (data != null) {
    newsList = data;
    showLsData(newsList);
  }
  getMenuNews();
}

function getMenuNews() {
  let menuItem = document.querySelectorAll(".menu-item");
  menuItem.forEach((news, index) => {
    news.addEventListener("click", () => {
      showNews(index);
      newsIndex = index
    });
  });
}

function searchNews() {
  let menuItem = document.querySelectorAll(".menu-item");
  menuItem.forEach((news, index) => {
    if (
      news.children[0].innerText
        .toUpperCase()
        .includes(inputFilter.value.toUpperCase())
    ) {
      news.style.display = "block";
    } else {
      news.style.display = "none";
    }
  });
}

function getCommentValue() {

  if (newsComment.value.length < 4 || authorComment.value == "" || authorEmail.value == "") {
    new Modal().showError("please fill all field")
  }else{
    new Modal().showSuccess("comment is added")
    createComment(newsComment.value,authorComment.value,authorEmail.value)
  }
}
function createComment(commentValue,authorNameValue,authorEmailValue){
  let date = new Date().toLocaleDateString('fa-IR-u-nu-latn')
  let obj = {
    comment : commentValue,
    author : authorNameValue,
    email : authorEmailValue,
    date : `${date},  ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  }
  newsList[newsIndex].comments.push(obj)
  setDataInLs("newsList",JSON.stringify(newsList))
  showDateInComment(commentValue,authorNameValue,authorEmailValue,obj.date)
  newsComment.value = ""
  newsAuthor.value = ""
  authorEmail.value = ""
}
function showNews(index) {
  websiteTitle.innerText = newsList[index].title
  h1Welcome.innerText = newsList[index].title;
  newsDec.innerHTML = newsList[index].description;
  newsAuthor.innerText = newsList[index].author;
  newsDate.innerText = newsList[index].date;
  commentsContainr.style.display = "flex";
  comments.innerHTML = ""
  newsList[index].comments.forEach((comment) => {
    showDateInComment(comment.comment,comment.author,comment.email,comment.date)
  })
}

function showNewBtn() {
  newNewsBtn.style.visibility = "visible";
}

class Modal {}
Modal.prototype.showError = (text = "") => {
  silverBox({
    alertIcon: "error",
    text: text,
    centerContent: true,
    cancelButton: {
      text: "OK",
    },
  });
};

Modal.prototype.showInfo = (
  where = "top-right",
  text = String,
  timer = Number
) => {
  silverBox({
    timer: timer,
    position: where,
    alertIcon: "info",
    text: text,
    centerContent: true,
    showCloseButton: true,
  });
};

Modal.prototype.getValue = (
  iconSrc = "",
  title = "",
  text = "",
  confirmButton = "",
  input = [],
  html,
  confirmButtonId = ""
) => {
  silverBox({
    customIcon: iconSrc,
    title: {
      text: title,
    },
    centerContent: true,
    text: text,
    showCloseButton: true,
    confirmButton: {
      text: confirmButton,
      closeOnClick: true,
      id: confirmButtonId,
    },
    cancelButton: {},
    input: input,
    html: html,
  });
};
Modal.prototype.showSuccess = (text = "") => {
  silverBox({
    title: {
      text: "Success",
      alertIcon: "success",
    },
    text: text,
  });
};