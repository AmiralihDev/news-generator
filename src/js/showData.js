import domGenerator from "dom-generator";
let menu = document.getElementById("menu");
let comments = document.getElementById("comments");
function showDateInComment(comment, author, email,date) {
  let l = `<div class="comments-item">
            <div>
              <p class="author-name">name</p>
              <p class="author-email">email</p>
              <p class="comment-date">date</p>
            </div>
            <p class="comment">comment</p>
  
          </div>`;
  let template = domGenerator({
    tag: "div",
    attributes: { class: "comments-item" },
    children: [
      {
        tag: "div",
        children: [
          {
            tag: "p",
            attributes: { class: "author-name" },
            properties: { innerText: author },
          },
          {
            tag: "p",
            attributes: { class: "author-email" },
            properties: { innerText: email },
          },
          {
            tag: "p",
            attributes: { class: "comment-date" },
            properties: { innerText: date },
          },
        ],
      },
      {
        tag: "p",
        attributes: { class: "comment" },
        properties: { innerText: comment },
      }
    ],
  });
  comments.append(template)
}
function showNewsInMenu(title, author, date) {
  let template = domGenerator({
    tag: "div",
    attributes: { class: "menu-item" },
    children: [
      {
        tag: "p",
        attributes: { class: "menu-item-title" },
        properties: { innerText: title },
      },
      {
        tag: "div",
        children: [
          {
            tag: "p",
            attributes: { class: "menu-item-author" },
            properties: { innerText: author },
          },
          {
            tag: "p",
            attributes: { class: "menu-item-date" },
            properties: { innerText: date },
          },
        ],
      },
    ],
  });
  menu.append(template);
}
function showLsData(newsList) {
  if (Array.isArray(newsList)) {
    newsList.forEach((news) => {
      showNewsInMenu(news.title, news.author, news.date);
      news.comments?.forEach((comment) => {
        
      });
    });
  }
}

export { showNewsInMenu, showLsData, showDateInComment };
