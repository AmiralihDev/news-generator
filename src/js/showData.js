import domGenerator from "dom-generator";

let menu = document.getElementById("menu");

class ShowData {
  constructor(name, title, date) {
    let template = domGenerator({
      tag: "a",
    //   attributes: { href: "news.html" },
      children: [
        {
          tag: "div",
          attributes: { class: "menu-item" },
          children: [
            {
              tag: "p",
              attributes: { class: "menu-item-title" },
              properties: { innerText: title },
            },
            {
              tag: "p",
              attributes: { class: "menu-item-auther" },
              properties: { innerText: name },
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
}
export { ShowData };
