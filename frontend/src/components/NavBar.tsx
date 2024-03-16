import { Link, useDisclosure } from "@nextui-org/react";
import Search from "../modules/customer/pages/Search";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import ShoppingCartIcon from "./icons/ShoppingCartIcon";
import CartModal from "../modules/customer/pages/CartModal";

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();


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
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
                <div onClick={onOpen} className="relative flex cursor-pointer h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                    <ShoppingCartIcon />

                    <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
                        <p className="flex items-center justify-center">{3}</p>
                    </div>
                </div>
            </NavbarContent>
            <CartModal isOpen={isOpen} onClose={onClose}/>
        </Navbar>
    );
}

