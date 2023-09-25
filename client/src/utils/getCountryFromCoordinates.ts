export const getCountryFromCoordinates = async (
  latitude: string,
  longitude: string
) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );
    const data = await response.json();

    if (data && data.address && data.address.country_code) {
      return data.address.country_code.toUpperCase();
    }

    return "Unknown";
  } catch (error) {
    console.error("Error getting country from coordinates:", error);
    return "Unknown";
  }
};
