
import CartModal from './CartModal';

export default function Cart() {
  const cartId = "1234";
  let cart;

  if (cartId) {
    cart = "cart";
  }

  return <CartModal cart={cart} />;
}
