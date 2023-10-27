import axios from "axios";
export const logItUp = async (userName, passWord) => {
  try {
    const response = await axios.post("/api/auth/login", {
      userName,
      password: passWord,
    });
    return response;
  } catch (error) {
    return error.response.status
  }
};
