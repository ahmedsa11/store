import axios from "axios";
// const config = {
//   headers: {
//     token:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOThhOGQ4ODI1NTlhNTk5NzlkYjZmOSIsImlhdCI6MTY3MTY0NzA5MCwiZXhwIjoxNjc5NDIzMDkwfQ.84FzWxaizoZ7kDrZ-jhiRgtoCrwZhcY4f9y1DIgYIak",
//   },
// };
const baseUrl = axios.create({ baseURL: "https://combative-plum-blackbuck.cyclic.app" });
export default baseUrl;
 