import { useEffect, useState } from "react";
import { fetchCryptos } from "../api/coinGecko";

export const Home = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const fetchCryptoData = async () => {
    try {
      const data = await fetchCryptos();
      setCryptoList(data);
    } catch (error) {
      console.error("Error fetching crypto data: ", error);
    }
  };
  return <div className="">Home Page</div>;
};
