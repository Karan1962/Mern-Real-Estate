export const logItUp = async (userName , passWord)=>{
    try {
        const response = await fetch("/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName, password: passWord }),
        });
        return response.status;
      } catch (error) {
        console.error("Error:", error);
      }
}