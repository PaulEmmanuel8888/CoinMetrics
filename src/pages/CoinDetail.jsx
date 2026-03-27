import { useParams } from "react-router";

export const CoinDetail = () => {
  const { id } = useParams();
  return <div className="">Coin Detail: {id}</div>;
};
