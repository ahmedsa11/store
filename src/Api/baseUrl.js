import axios from "axios";
// const config = {
//   headers: {
//     token:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOThhOGQ4ODI1NTlhNTk5NzlkYjZmOSIsImlhdCI6MTY3MTY0NzA5MCwiZXhwIjoxNjc5NDIzMDkwfQ.84FzWxaizoZ7kDrZ-jhiRgtoCrwZhcY4f9y1DIgYIak",
//   },
// };
const baseUrl = axios.create({ baseURL: "http://127.0.0.1:8000" });
export default baseUrl;
 