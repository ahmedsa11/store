import notify from "./useNotifcation"

const Connect=()=>{
    if(!navigator.onLine){
        notify('هناك مشكله في الاتصال بالانترنت','warn')
        console.log('هناك مشكله في الاتصال بالانترنت')
        return
    }
}
export default Connect