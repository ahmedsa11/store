import baseUrl from "../Api/baseUrl";

const InUpdateDataWithImage = async (url, parmas) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    }
    const res = await baseUrl.put(url, parmas, config);
    console.log(res.status)
    return res;
}
const InsUpdateData = async (url, parmas) => {
    const res = await baseUrl.put(url, parmas);
    return res;
}
export { InUpdateDataWithImage, InsUpdateData };