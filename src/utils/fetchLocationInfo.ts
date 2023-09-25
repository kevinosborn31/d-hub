import { EMERGENCY_NUMBERS } from "../constants/EmergencyNumbers";
import { getCountryFromCoordinates } from "./getCountryFromCoordinates";

export const fetchLocationInfo = async (): Promise<string> => {
    try {
        if ("geolocation" in navigator) {
            return new Promise<string>((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    const countryCode = await getCountryFromCoordinates(latitude.toString(), longitude.toString());

                    const ambulanceNumber = EMERGENCY_NUMBERS[countryCode];

                    if (ambulanceNumber) {
                        resolve(ambulanceNumber);
                    } else {
                        console.error('Emergency number not found for the country:', countryCode);
                        resolve("000");
                    }
                }, (error) => {
                    console.error('Error getting geolocation:', error);
                    resolve("000");
                });
            });
        } else {
            console.error('Geolocation is not available in this browser.');
            return "000";
        }
    } catch (error) {
        console.error('Error fetching location information:', error);
        return "000";
    }
};
