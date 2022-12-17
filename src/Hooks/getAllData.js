import baseUrl from "../Api/baseUrl";
const useGetData=async(url,params)=>{
    const res=await baseUrl.get(url)
    return res.data
}
export default useGetData