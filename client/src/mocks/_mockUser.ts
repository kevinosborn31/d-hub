import { User } from "../interfaces/User";
import { MOCK_GLUCOSE_READINGS } from "./_mockGlucoseReadings";

export const MOCK_USER: User = {
    _id: 1,
    givenNames: ["Kevin", "Sean"],
    surname: "Osborn",
    email: "kevinosborn31@gmail.com",
    verified: false,
    profilePictureURL: "http://placekitten.com/200/200",
    medicareNumber: "230942304",
    sugarRange: [5, 18],
    ketoneWarning: 2,
    glucoseReadings: MOCK_GLUCOSE_READINGS,
}