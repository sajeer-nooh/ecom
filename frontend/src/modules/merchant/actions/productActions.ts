import { store } from "../../../redux";
import { actions as merchanStore } from "../data/merchantReducer";
import { MERCHANT_STORE_NAME } from "../../../redux/constants";
import { createClient } from '@supabase/supabase-js'

const randomId = function(length = 10) {
return Math.random().toString(36).substring(2, length+2);
};

export const fetchStoreProducts = async (storeId: number) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/product/list/?created_by=${1}`);
        const data = await response.json();
        store.dispatch(merchanStore.getStoreProducts(data));
        return data;
    } catch (error) {
        console.log(error)
    }
};

export const createProduct = async (e: any) => {
    console.log("Create new product")
    e.preventDefault()
    try {
        const storeInfo = store.getState()[MERCHANT_STORE_NAME].storeInfo;
        
        const formData = new FormData(e.target);

        if(formData.getAll('images')?.length > 3) {
            return alert('You can only upload 3 images at a time')
        }
        const files = [];
        for (let index = 0; index < formData.getAll('images').length; index++) {
            const file = formData.getAll('images')[index] as File; 
            
            const url = await uploadFile(file)
            files.push(url)
        }

        const product = {
            name: formData.get('name') as string,
            name_ar: formData.get('name_ar') as string,
            description: formData.get('description') as string,
            description_ar: formData.get('description_ar') as string,
            price: formData.get('price') as unknown as number,
            stock: formData.get('stock') as unknown as number,
            created_by: 1,
            images: files,
            category: "7e01e96c-fa82-4850-8b20-7c6c3089627a"
        };
        const response = await fetch(`http://127.0.0.1:8000/product/create/`, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseData = await response.json();
        store.dispatch(merchanStore.createProduct(responseData.product));
    } catch (error) {
        console.log(error);
        return alert('Error creating product');
    }
}



async function uploadFile(file: File) {
    try {
        const supabase = createClient(
            process.env.REACT_APP_SUPABASE_PROJECT_URL || '',
            process.env.REACT_APP_SUPABASE_API_KEY || ''
        );

        //Generate a unique filename
        const filePath = `${randomId()}-${file.name}`;
        const { data, error } = await supabase.storage.from('products').upload(filePath, file);
        if (error) {
            return alert('Error uploading file: ' + error.message)

        } else {
            const downloadData = supabase.storage.from('products').getPublicUrl(filePath)
            return downloadData.data.publicUrl;
        }
    } catch (error) {
        return alert('Error uploading file')
    }
}
export const updateProduct = async (product: any) => {
    try {
        console.log("updateProduct", product)
        const response = await fetch(`http://127.0.0.1:8000/product/update/${product.id}`, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        store.dispatch(merchanStore.updateProduct(product));
    } catch (error) {
        console.log(error)
        alert('Error deleting product');
    }
}

export const deleteProduct = async (productId: number)  => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/product/delete/${productId}/`, {
            method: 'DELETE',
        });
        store.dispatch(merchanStore.deleteProdut(productId));
    } catch (error) {
        console.log(error)
        alert('Error deleting product');
    }
}

export const fetchStoreCategories = async (storeId: number)  => {
    try {
        const response = await fetch(`/api/store/${storeId}/categories`);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};

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

export const deleteCategory = (storeId: number, categoryId: number) => async () => {
    try {
        const response = await fetch(`/api/store/${storeId}/categories/${categoryId}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}