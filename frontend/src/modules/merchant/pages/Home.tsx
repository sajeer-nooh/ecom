import { useAppSelector } from "../../../redux";
import { MERCHANT_STORE_NAME } from "../../../redux/constants";

const Home = () => {
  const storeInfo = useAppSelector(state => state[MERCHANT_STORE_NAME].filters);
  console.log(storeInfo);
  return (
    <div>
        <p>Home page!</p>
    </div>
  );
};

export default Home;