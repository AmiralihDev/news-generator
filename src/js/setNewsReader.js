document.addEventListener("click", find);

function setNewsReader(e) {
  if (e.target.className) {
    let arr = [e.target.children[0].innerText,
    e.target.children[1].innerText,
    e.target.children[2].innerText]
    localStorage.setItem("newsReader",JSON.stringify(arr));
  }
}

export {setNewsReader}