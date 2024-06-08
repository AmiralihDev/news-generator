import { ShowData } from "./showData"


function newsCreateor(name,title, textArea, newsList){
    let date = new Date().toLocaleDateString("fa-IR")
    let obj = {
        title : title,
        auther : name,
        des : textArea,
        date : date
    }
    if (Array.isArray(newsList)) {
        
        newsList.push(obj)
        let data = new ShowData(name,title,obj.date)
        console.log(newsList);
    }
}
export {newsCreateor}