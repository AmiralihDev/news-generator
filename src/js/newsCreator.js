import { showNewsInMenu } from "./showData"

function newsCreator(title,des,author,newsList){
    let data = {
        title : title,
        description : des,
        author : author,
        date : new Date().toLocaleDateString("fa-IR"),
        comments : [

        ]
    }
    showNewsInMenu(title,author,data.date)
    return data
}

export {newsCreator}