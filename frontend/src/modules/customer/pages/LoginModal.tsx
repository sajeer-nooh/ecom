import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { MailIcon } from "../../../components/icons/MailIcon";
import { LockIcon } from "../../../components/icons/LockIcon";
import { loginUser } from "../actions/userActions";

export default function LoginModal(props: any) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Button onPress={onOpen} color={props.mode === 'login' ? "default" : "primary"} className="capitalize">{props.mode}</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <ModalBody>
                                <form onSubmit={(e: any) => {
                                    console.log(e)
                                    loginUser(e);
                                    onClose();
                                }}>


                                    <Input
                                        autoFocus
                                        endContent={
                                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        label="Email"
                                        placeholder="Enter your email"
                                        variant="bordered"
                                        name="email"
                                    />
                                    <Input
                                        endContent={
                                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        label="Password"
                                        placeholder="Enter your password"
                                        type="password"
                                        variant="bordered"
                                        name="password"
                                    />
                                    <div>
                                        <Button color="danger" variant="flat" onPress={onClose}>
                                            close
                                        </Button>
                                        <Button color="primary" type="submit">
                                            {props.mode}
                                        </Button>
                                    </div>
                                </form>
                            </ModalBody>


                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
