import { store } from "../../../redux";
import { CUSTOMER_STORE_NAME } from "../../../redux/constants";
import { actions as customerStore } from "../data/customerReducer";

export const createCart = async() => {
    try {

        const response = await fetch('http://0.0.0.0:8000/cart/create/', {
            method: 'POST',
            body: JSON.stringify({
                "store_id": "8e471a55-d20e-439b-a9af-301b33ded43f",
                "customer_id": 5
            }),
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

export const getCustomerCart = async () => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/cart/get/?cart_id=${"5a9d7e10-3a1a-40b2-a323-27cdcde409a4"}`);
        const data = await response.json();
        store.dispatch(customerStore.getCustomerCart(data));

    } catch (error) {
        console.log(error)
    }
}
export const addToCart = async (productId: string, quantity: number) => {
    try {
        // {
        //     "cart": "5a9d7e10-3a1a-40b2-a323-27cdcde409a4",
        //     "product": "7e928004-f35e-4a64-aeaa-b387910c65da",
        //     "qantity": 4
        // }

        const cart = store.getState()[CUSTOMER_STORE_NAME].cart;
        const cartItem = {  
            "cart": "5a9d7e10-3a1a-40b2-a323-27cdcde409a4",
            "product": productId,
            "qauntity": quantity ?? 1
        }

        console.log("addToCart", cartItem)

        const response = await fetch(`http://127.0.0.1:8000/cart/add/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(cartItem),
        });
        store.dispatch(customerStore.addToCart(cartItem));
        alert('Cart item deleted successfully')
    } catch (error) {
        console.log(error)
        alert('Error deleting item');
    }
}

export const removeFromCart = async (itemId: number) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/cart/delete/${itemId}/`, {
            method: 'DELETE',
        });
        store.dispatch(customerStore.removeFromCart(itemId));
        alert('Cart item deleted successfully')
    } catch (error) {
        console.log(error)
        alert('Error deleting item');
    }
}

export const updateCartItem = async (cartItem: any) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/cart/update/${cartItem?.id}`, {
            method: 'PUT',
            body: JSON.stringify(cartItem),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        store.dispatch(customerStore.updateCartItem(cartItem));
        alert('Cart updated successfully')
    } catch (error) {
        console.log(error)
        alert('Error deleting item');
    }
}   

