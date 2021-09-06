export enum Transmission {
	MT='M/T', AT='A/T'
}
export enum FuelType {
	Gasoline='Gasoline', Diesel='Diesel'
}

export interface Car {
	name: string;
	police: string;
	transmission?: Transmission | string;
	fuelType?: FuelType | string;
	year?: string;
}
export interface CarRecord {
	timestamp: number;
	carId: string;
	km?: string;
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

export type RootStackParamList = {
	Home: undefined;
  NewCar: { name: string };
	Asset: { carId: string };
	VisitEntry: { carId: string };
	Camera: undefined;
};