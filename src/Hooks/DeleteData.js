import baseUrl from "../Api/baseUrl";
const DeleteData = async (url, parmas) => {
    const res = await baseUrl.delete(url, parmas);
    return res.data;
}
export default DeleteData;