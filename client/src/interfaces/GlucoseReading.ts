export interface GlucoseReading {
    day: string, // TODO: should be date
    time: string, // TODO: should be date
    glucoseValue: number,
    ketoneValue?: number,
}