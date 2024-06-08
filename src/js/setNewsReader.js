
function setNewsReader(e) {
  if (e.target.className) {
    let obj = {
        title : e.target.children[0].innerText,
    auther :e.target.children[1].innerText,
    date : e.target.children[2].innerText}
    localStorage.setItem("newsReader",JSON.stringify(obj));
  }
}

export {setNewsReader}