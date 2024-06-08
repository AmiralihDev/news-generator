function getDataFromLs(key = ""){
    let data = localStorage.getItem(key)
    if(data){
        return JSON.parse(data)
    }else{
    }
}

export {getDataFromLs}