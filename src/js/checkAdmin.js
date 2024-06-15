import { getDataFromLs } from "./getDataFromLs"
import { setDataInLs } from "./setDataInLs"

function checkAdmin(){
    let admin = getDataFromLs("isAdmin")

    if (admin == "true" || admin == "yes"){
        return true
    }
    else {
        setDataInLs("isAdmin","false")
        return false
    }
}
export {checkAdmin}