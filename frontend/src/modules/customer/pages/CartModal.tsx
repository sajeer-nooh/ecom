import { Modal, ModalContent, ModalHeader, ModalBody, Button, Input, Textarea, Select, SelectItem, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { DeleteIcon } from "../../../components/icons/DeleteIcon";
import ShopingCartIcon from "../../../components/icons/ShoppingCartIcon";

export default function CartModal(props: any) {

const cart = props.cart;

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
                    {cart?.items?.map((item: any, i: number) => {

                      return (
                        <li
                          key={i}
                          className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                        >
                          <div className="relative flex w-full flex-row justify-between px-1 py-4">
                            <div className="absolute z-40 -mt-2 ml-[55px]">
                              <DeleteIcon item={item} />
                            </div>
                            <Link
                            //   href={merchandiseUrl}
                            //   onClick={closeCart}
                              className="z-30 flex flex-row space-x-4"
                            >

                            </Link>
                            <div className="flex h-16 flex-col justify-between">
                            </div>
                          </div>
                        </li>
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
                    href={cart.checkoutUrl}
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
