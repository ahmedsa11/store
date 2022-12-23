import baseUrl from "../Api/baseUrl";
const GetData = async (url, params) => {
  const res = await baseUrl.get(url);
  return res.data;
};
export default GetData;
