import axios from "axios";
export const logItUp = async (userName, passWord) => {
  try {
    const response = await axios.post("/api/user", {
      userName,
      password: passWord,
    });
    return response.status;
  } catch (error) {
    return error.response.status
  }
};
