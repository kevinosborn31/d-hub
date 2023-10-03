import axios from "axios";

export const getUserDataGoogle = async (accessToken: any) => {
  try {
    const response = await axios.get("https://www.googleapis.com/userinfo/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userData = response.data;

    return userData;
  } catch (error) {
    console.error("Error fetching user data from Google:", error);
    throw error;
  }
};

export default getUserDataGoogle;