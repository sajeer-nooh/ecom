import { store } from "../../../redux";
import { actions as customerStore } from "../data/customerReducer";

export const createOrder = async (order: any) => {
    try {
        const response = await fetch('http://0.0.0.0:8000/order/create/', {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const fetchCustomerOrders = async () => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/order/customer/list/?customer=${5}`);
        const data = await response.json();
        store.dispatch(customerStore.getCustomerOrders(data));

    } catch (error) {
        console.log(error)
    }
};

