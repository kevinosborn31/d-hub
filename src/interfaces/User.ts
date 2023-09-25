import { GlucoseReading } from "./GlucoseReading";

export interface User {
    givenNames: string | string[],
    email: string,
    verified: boolean,
    doctors?: User[],
    profilePictureURL?: string,
    medicareNumber?: string,
    sugarRange?: number[],
    ketoneWarning?: number,
    glucoseReadings?: GlucoseReading[],
}

export interface Doctor extends User {
    doctorVerified: boolean,
    patients?: User[]
}