import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts";
import { Car, CarRecord, CarRecords, Cars } from "../types";
import { delay } from "./helper";

type ValType = Car|Cars|CarRecord|CarRecords|null

const useFetch = <T>(val: T): [T, boolean] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<T>();

  useEffect(() => {
    setLoading(() => true);
    delay().then(() => {
      setValue(() => val);
      setLoading(() => false);
    });
  }, [val]);

  return [value, loading];
};

export const useFetchCars = () => {
  const { cars } = useContext(AppContext);
  return useFetch<Cars>(cars);
};

export const useFetchCar = (id: string) => {
  const car = useContext(AppContext).cars[id];
  return useFetch<Car>(car);
};

export const useFetchHistories = () => {
  const { records } = useContext(AppContext);
  return useFetch<CarRecords>(records);
};
export const useFetchRecord = (id: string) => {
  const record = useContext(AppContext).records[id];
  return useFetch<CarRecord>(record);
};
