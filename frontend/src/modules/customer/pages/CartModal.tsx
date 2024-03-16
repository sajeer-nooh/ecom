import { Modal, ModalContent, ModalHeader, ModalBody, Button, Input, Textarea, Select, SelectItem, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { DeleteIcon } from "../../../components/icons/DeleteIcon";
import ShopingCartIcon from "../../../components/icons/ShoppingCartIcon";
import { getCustomerCart } from "../actions/cartActions";
import { CUSTOMER_STORE_NAME } from "../../../redux/constants";
import { useAppSelector } from "../../../redux";

export default function CartModal(props: any) {

  useEffect(() => {
    getCustomerCart()
  }, []);

  const cart = useAppSelector((state) => state[CUSTOMER_STORE_NAME].cart);
  console.log(cart)

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onOpenChange={props.onOpenChange}
        onClose={props.onClose}
        placement="top-center"
        classNames={{
          wrapper: 'justify-end',
        }}
      >
        <ModalContent className="h-full align-end !mx-0 rounded-r-none">
          <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
          <ModalBody>
            {!cart || cart?.items?.length === 0 ? (
              <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                <ShopingCartIcon className="h-16" />
                <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
              </div>
            ) : (
              <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                <ul className="flex-grow overflow-auto py-4">
                  {cart?.cart_items?.map((item: any, i: number) => {

                    return (
                      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">

                        <div className="flex items-center mb-2">
                          <div className="relative flex cursor-pointer h-16 w-16 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                              <img src="..." alt="..." className="w-full h-full rounded-full" />

                              <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-red-600 text-[11px] font-medium text-white">
                                  <p className="flex items-center justify-center">x</p>
                              </div>
                          </div>
                          <div className="flex-grow ml-4">
                            <p className="font-medium">{item?.product__name}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p className="text-sm font-medium text-gray-700">{item.product__quantity}</p>
                          <p className="mx-2 text-sm font-medium text-gray-700">x</p>
                          <p className="text-sm font-medium text-gray-700">${item.product__price}</p>

                        </div>
                      </div>
                    );
                  })}
                </ul>
                <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">

                  <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                    <p>Shipping</p>
                    <p className="text-right">Calculated at checkout</p>
                  </div>
                  <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                    <p>Total</p>

                  </div>
                </div>
                <a
                  href="/checkout"
                  className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                >
                  Proceed to Checkout
                </a>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
