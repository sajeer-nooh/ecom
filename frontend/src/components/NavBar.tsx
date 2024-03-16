import { Link, useDisclosure } from "@nextui-org/react";
import Search from "../modules/customer/pages/Search";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import ShoppingCartIcon from "./icons/ShoppingCartIcon";
import CartModal from "../modules/customer/pages/CartModal";
import { useAppSelector } from "../redux";
import { CUSTOMER_STORE_NAME } from "../redux/constants";
import LoginModal from "../modules/customer/pages/LoginModal";

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const loginModal = useDisclosure();
    const cart = useAppSelector((state) => state[CUSTOMER_STORE_NAME].cart);


    return (
        <Navbar isBordered className="">
            <NavbarBrand>
                <p className="font-bold text-inherit">ORDABLE/</p>
            </NavbarBrand>
            <NavbarItem>
                <Search />
            </NavbarItem>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <LoginModal mode="login" />
                </NavbarItem>
                <NavbarItem>
                    <LoginModal mode="signup" />
                </NavbarItem>
                <div onClick={onOpen} className="relative flex cursor-pointer h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                    <ShoppingCartIcon />

                    <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
                        <p className="flex items-center justify-center">{cart?.cart_items?.length ?? 3}</p>
                    </div>
                </div>
            </NavbarContent>
            <CartModal isOpen={isOpen} onClose={onClose} />
        </Navbar>
    );
}

