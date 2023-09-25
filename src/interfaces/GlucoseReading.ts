export interface GlucoseReading {
    day: string, // should be date
    time: string, // should be date
    glucoseValue: number,
    ketoneValue?: number,
}