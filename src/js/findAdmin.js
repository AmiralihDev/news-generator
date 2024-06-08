function findAdmin(){
    let ls = localStorage.getItem("isAdmin")
    if (ls == "true") {
        return true
    }else{
        return false
    }
}   

export {findAdmin}