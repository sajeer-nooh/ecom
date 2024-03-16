import { Button, Input } from '@nextui-org/react';
import React from 'react'
import VisaIcon from '../../../components/icons/VisaIcon';
import ApplePayIcon from '../../../components/icons/ApplePayIcon';
import CashIcon from '../../../components/icons/CashIcon';

const options = [
    { label: 'Visa', value: <VisaIcon /> },
    { label: 'Apple pay', value: <ApplePayIcon /> },
    { label: 'Cash', value: <CashIcon /> },
];

const CheckoutPage = () => {
    return (
        <div className="flex flex-1">
            <div className="w-1/2 border-r border-gray-200">
                <div className="p-4">
                    <h2 className="font-medium text-lg mb-4">Cart Details</h2>
                    <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <img src="..." alt="..." className="w-full h-full rounded-full" />
                        </div>
                        <div className="flex-grow ml-4">
                            <p className="font-medium">Acme Circles T-Shirt</p>
                            <p className="text-gray-500 text-sm">$15.00</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-gray-500 text-sm">Subtotal</p>
                        <p className="font-medium text-sm">$15.00</p>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-gray-500 text-sm">Shipping</p>
                        <p className="font-medium text-sm">USD $3.00</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-sm">Total</p>
                        <p className="font-medium text-sm">USD $15.00</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 p-4">
                <h2 className="font-medium text-lg mb-4">Shipping & Payment</h2>
                <div className='flex justify-around'>
                    <button className="w-full px-3 py-2 rounded-md ">
                        <div className='p-4 border-2 border-neutral-400 rounded-lg'>
                            Pickup
                        </div>
                    </button>
                    <button className="w-full px-3 py-2 rounded-md ">
                        <div className='border-2 p-4 border-neutral-400 rounded-lg'>
                            Delivery
                        </div>
                    </button>
                </div>
                <div className="mb-4">
                    <Input
                        autoFocus
                        name="name"
                        label="Name [EN]"
                        isRequired
                        placeholder="Product name in English"
                        variant="bordered"
                        defaultValue="Kuwait city"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Payment Type</label>
                    <div className=" flex items-center space-x-4">
                        {options.map((option) => (
                            <button className="px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300">
                                <div className='border px-4 border-neutral-400 rounded-lg'>
                                    {option.value}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <Button color="primary">
                    Place order
                </Button>
            </div>
        </div>)
}; export default CheckoutPage;