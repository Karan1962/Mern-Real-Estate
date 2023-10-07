export const signItUp = async (userName, passWord, email) => {
  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password: passWord, email }),
    });
    return response.status;
  } catch (error) {
    console.error("Error:", error);
  }
};
