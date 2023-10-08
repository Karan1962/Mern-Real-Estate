import axios from "axios";
export const signItUp = async (userName, passWord, email) => {
  try {
    const response = await axios.post("/api/auth/signup", {
      userName,
      password: passWord,
      email,
    });
    return response.status;
  } catch (error) {
    console.error("Error:", error);
  }
};
