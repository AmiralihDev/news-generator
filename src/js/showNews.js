import { getDataFromLs } from "./getDataFromLs";
let newsList
let newsSelected
let title = document.getElementById("title")
let description = document.getElementById("description")
let auther = document.getElementById("auther")
let date = document.getElementById("date"
)
function findNews(){
    newsList = getDataFromLs("newsList")
    newsSelected = getDataFromLs("newsReader")
    console.log(newsSelected);
    console.log(newsList);
    newsList.forEach((element) => {
        if (newsSelected.auther == element.auther && newsSelected.title == element.title && newsSelected.date == element.date){
            setTimeout(()=>{

                showNews(element)
            },500)
            
        }
    });
}

function showNews(element){
    title.innerText = element.title
    auther.innerText = element.auther
    date.innerText = element.date
    description.innerText = element.des
    }
export {findNews}