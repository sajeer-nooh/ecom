export const fetchStoreCategoriess = (storeId: number) => async () => {
    try {
        const response = await fetch(`/api/store/${storeId}/categories/list`);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};

export const createCategory = (storeId: number, category: any) => async () => {
    try {
        const response = await fetch(`/api/store/${storeId}/categories/create`, {
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

export const deleteCategory = (storeId: number, categoryId: number) => async () => {
    try {
        const response = await fetch(`/api/store/${storeId}/categories/delete/${categoryId}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


