let menu = document.getElementById("menu");
let searchFliter = document.getElementById("input-fliter");
let menuItem = document.getElementsByClassName("menu-item");

function EventListener() {
  searchFliter.addEventListener("input", findNews);
}
EventListener();

function findNews(e) {
  let fliter = searchFliter.value.toLowerCase();
  for (let index = 0; index < menuItem.length; index++) {
    let title = menuItem[index].children[0].innerText;
    let auther = menuItem[index].children[1].innerText;
    let date = menuItem[index].children[2].innerText;
    const element = menuItem[index];

    if (
      title.toLowerCase().includes(fliter.toLowerCase()) ||
      auther.toLowerCase().includes(fliter.toLowerCase())
    ) {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  }
}
