import baseUrl from "../Api/baseUrl";

const InUpdateDataWithImage = async (url, parmas) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" ,Authorization: `Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.put(url, parmas, config);
    return res;
}
const InsUpdateData = async (url, parmas) => {
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.put(url, parmas,config);
    return res;
}
export { InUpdateDataWithImage, InsUpdateData };