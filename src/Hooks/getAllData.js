import baseUrl from "../Api/baseUrl";
const GetData = async (url, params) => {
  const res = await baseUrl.get(url);
  return res.data;
};
const GetDataToken = async (url, parmas) => {
  const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  }
  const res = await baseUrl.get(url, config);
  return res.data;
}

export { GetData, GetDataToken };