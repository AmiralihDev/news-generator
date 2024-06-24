import domGenerator from "dom-generator";
let menu = document.getElementById("menu");
let comments = document.getElementById("comments");
function showDateInComment(comment, author, email, date) {
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
            properties: { innerText: `Author : ${author}` },
          },
          {
            tag: "p",
            attributes: { class: "author-email" },
            properties: { innerText: `Email : ${email}` },
          },
          {
            tag: "p",
            attributes: { class: "comment-date" },
            properties: { innerText: `Date ${date}` },
          },
        ],
      },
      {
        tag: "p",
        attributes: { class: "comment" },
        properties: { innerText: `comment : ${comment}` },
      },
    ],
  });
  comments.append(template);
}
function showNewsInMenu(title, author, date, commentLength) {
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
            properties: { innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-vector-pen" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
  <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z"/>
</svg> ${author}` },
          },
          {
            tag: "p",
            attributes: { class: "menu-item-date" },
            properties: { innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16">
  <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg> ${date}` },
          },
          {
            tag: "p",
            attributes: { class: "menu-item-comment" },
            properties: {
              innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
</svg> ${commentLength} comments`,
            },
          },
        ],
      },
      {
        tag: "hr",
      },
    ],
  });
  menu.append(template);
}
function showLsData(newsList) {
  if (Array.isArray(newsList)) {
    newsList.forEach((news) => {
      showNewsInMenu(news.title, news.author, news.date, news.comments.length);
      news.comments?.forEach((comment) => {});
    });
  }
}

export { showNewsInMenu, showLsData, showDateInComment };
