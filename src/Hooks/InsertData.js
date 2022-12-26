import baseUrl from "../Api/baseUrl";
const InsertDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    //   token:
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOThhOGQ4ODI1NTlhNTk5NzlkYjZmOSIsImlhdCI6MTY3MTY0NzA5MCwiZXhwIjoxNjc5NDIzMDkwfQ.84FzWxaizoZ7kDrZ-jhiRgtoCrwZhcY4f9y1DIgYIak",
    }
  };
  const res = await baseUrl.post(url, params, config);
  return res;
};
const InsertData = async (url, params) => {
  const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
}
  const res = await baseUrl.post(url, params,config);
  console.log(res);
  return res;
};

export { InsertDataWithImage, InsertData };
