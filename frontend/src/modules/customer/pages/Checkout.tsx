import { Button, Input } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import VisaIcon from '../../../components/icons/VisaIcon';
import ApplePayIcon from '../../../components/icons/ApplePayIcon';
import CashIcon from '../../../components/icons/CashIcon';
import { getCustomerCart } from '../actions/cartActions';
import { CUSTOMER_STORE_NAME } from '../../../redux/constants';
import { useAppSelector } from '../../../redux';
import MasterCardIcon from '../../../components/icons/MasterCardIcon';
import { createOrder } from '../actions/orderActions';

const options = [
    { label: 'Visa', type: 'online',  value: <VisaIcon /> },
    { label: 'Apple pay', type: 'online', value: <ApplePayIcon /> },
    { label: 'Cash', type: 'cash', value: <CashIcon /> },
    { label: 'Master Cart', type: 'online', value: <MasterCardIcon /> },
];

const CheckoutPage = () => {

    const [totalAmount, setTotalAmount] = useState(0);
    const SHIPPING_FEES = 3;
    useEffect(() => {
        getCustomerCart()
    }, []);

    const cart = useAppSelector((state) => state[CUSTOMER_STORE_NAME].cart);

    useEffect(() => {
        const total = cart?.cart_items.reduce((accumulator: any, currentItem: any) => {
            const price = currentItem.product__price;
            const quantity = currentItem.quantity;
            return accumulator + (price * quantity);
          }, 0);
          setTotalAmount(total + SHIPPING_FEES)
    },[cart])

    return (
        <div className="flex flex-1">
            <div className="w-1/2 border-r border-gray-200">
                <div className="p-4">
                    <h2 className="font-medium text-lg mb-4">Cart Details</h2>
                    {cart?.cart_items?.map((item: any, i: number) => (
                        <div className="flex items-center mb-2">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <img src="..." alt="..." className="w-full h-full rounded-full" />
                            </div>
                            <div className="flex-grow ml-4">
                                <p className="font-medium">{item?.product__name}</p>
                                <p className="text-gray-500 text-sm">{item?.product__price} *  {item?.quantity}</p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-neutral-200 flex items-center justify-between mb-6">
                        <p className="text-gray-500 text-sm">Subtotal</p>
                        <p className="font-medium text-sm">$15.00</p>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-gray-500 text-sm">Shipping</p>
                        <p className="font-medium text-sm">USD $3.00</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-sm">Total</p>
                        <p className="font-medium text-sm">USD ${totalAmount}</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 p-4">
                <h2 className="font-medium text-lg mb-4">Shipping & Payment</h2>
                <div className='flex justify-around gap-3'>
                    <button className="w-full py-2 rounded-md ">
                        <div className='p-4 border-2 border-neutral-300 rounded-lg'>
                            Pickup
                        </div>
                    </button>
                    <button className="w-full py-2 rounded-md ">
                        <div className='border-2 p-4 border-neutral-300 rounded-lg'>
                            Delivery
                        </div>
                    </button>
                </div>
                <div className="my-4">
                    <h6 className="font-medium text-lg mb-4">Delivery address</h6>
                    <Input
                        autoFocus
                        name="name"
                        label="Address"
                        isRequired
                        placeholder="Delivery Address"
                        variant="bordered"
                        defaultValue="Kuwait city"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Payment Type</label>
                    <div className="flex justify-around gap-3 items-center">
                        {options.map((option) => (
                            <button className="px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300">
                                <div className='px-4 border-2  border-neutral-200 rounded-lg'>
                                    {option.value}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <button
                  onClick={createOrder}
                  className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                >
                  Place order
                </button>
            </div>
        </div>)
}; export default CheckoutPage;