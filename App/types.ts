export enum Transmission {
	MT='M/T', AT='A/T'
}
export enum FuelType {
	Gasoline='Gasoline', Diesel='Diesel'
}

export interface Car {
	name: string;
	police: string;
	transmission: Transmission;
	fuelType: FuelType;
	year: string;
}
export interface CarRecord {
	timestamp: number;
	carId: string;
	km: number;
	note?: string;
}
export type Cars = {
	[carId: string]: Car;
}
export type CarRecords = {
	[recordId: string]: CarRecord;
}
export type AppContextType = {
	car: Car, record: CarRecord, 
}