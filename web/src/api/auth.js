import api from "./axios";

const jwtToken = localStorage.getItem("jwt");

axios
  .post("auth/login", {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

// export const login = async (email, password) => {
//   try {
//     const response = await api.post(
//       "auth/login/",
//       {
//         headers: {
//           Authorization: `Bearer ${response.data.access_token}`
//         }
//       },
//       { email, password },
//       localStorage.setItem("jwt", response.data.access_token)
//     );

//     console.log("authJs", response.data.access_token);
//     return response.data; // Başarılı giriş durumunda veriyi döndürün
//   } catch (error) {
//     throw error; // Giriş hatası durumunda hatayı fırlatın
//   }
// };
