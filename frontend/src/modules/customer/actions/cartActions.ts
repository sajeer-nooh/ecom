export const addToCart = (productId: number) => {
    return {
        type: "ADD_TO_CART",
        payload: productId
    };
}