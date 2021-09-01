import { useContext, useEffect, useState } from "react";
import { AppContext } from "..";
import { delay } from "./helper";

const useFetch = (val) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();

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
  return useFetch(cars);
};

export const useFetchCar = (id) => {
  const car = useContext(AppContext).cars[id];
  return useFetch(car);
};

export const useFetchHistories = () => {
  const { histories } = useContext(AppContext);
  return useFetch(histories);
};
export const useFetchHistory = (id) => {
  const history = useContext(AppContext).histories[id];
  return useFetch(history);
};
