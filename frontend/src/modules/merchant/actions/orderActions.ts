export const fetchStoreProducts = (storeId: number) => async () => {
    try {
        const response = await fetch(`/api/store/${storeId}/products`);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};

export const fetchStoreOrders = (storeId: number) => async () => {
    try {
        const response = await fetch(`/api/store/${storeId}/orders`);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};

export const fetchStoreCategories = (storeId: number) => async () => {
    try {
        const response = await fetch(`/api/store/${storeId}/categories`);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};

export const createProduct = (storeId: number, product: any) => async () => {
    try {
        const response = await fetch(`/api/store/${storeId}/products`, {
            method: 'POST',
            body: JSON.stringify(product),
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

export const createCategory = (storeId: number, category: any) => async () => {
    try {
        const response = await fetch(`/api/store/${storeId}/categories`, {
            method: 'POST',
            body: JSON.stringify(category),
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