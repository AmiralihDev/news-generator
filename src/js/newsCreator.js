import { showNewsInMenu } from "./showData"

function newsCreator(title,des,author,newsList){
    let data = {
        title : title,
        description : des,
        author : author,
        date : new Date().toLocaleDateString('fa-IR-u-nu-latn'),
        comments : [

        ]
    }
    showNewsInMenu(title,author,data.date,data.comments.length)
    return data
}

export {newsCreator}