function getDataFromLs(key = ""){
    let data = localStorage.getItem(key)

    if (data){
        return data
    }else {return null}
}
export {getDataFromLs}