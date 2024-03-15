import { useEffect } from "react";
import OrdersTable from "../views/Order/Table";
import { fetchStoreOrders } from "../actions/orderActions";


const Orders = () => {
  
  
  useEffect(() => {  
    fetchStoreOrders()
  }, []);


return (
    <div className="flex">
        <OrdersTable />
    </div>
  );
};

export default Orders;