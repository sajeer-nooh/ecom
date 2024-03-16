import { Suspense, useEffect } from 'react';
import { Button, Image } from "@nextui-org/react";
import { useAppSelector } from '../../../redux';
import { MERCHANT_STORE_NAME } from '../../../redux/constants';
import { fetchStoreProducts } from '../../merchant/actions/productActions';
import { PlusIcon } from '../../../components/icons/PlusIcon';
import { useNavigate } from 'react-router-dom';
import NoImageIcon from '../../../components/icons/NoImageIcon';
import { addToCart } from '../actions/cartActions';


export default function StoreFront() {
    const navigate = useNavigate();

    useEffect(() => {
        fetchStoreProducts(1)
    }, []);

    const products = useAppSelector((state) => state[MERCHANT_STORE_NAME].products);
    type Product = typeof products[0];

    return (
        <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-4 md:grid-rows-2">
            {products.map((product: Product) => (
                <div key={product.id} className='relative group rounded-lg'>
                    <div className='relative'>
                        {product?.images?.length ?<Image
                            onClick={() => {
                                 //Navigate to product details page
                                 navigate('/product/details', { state: product }); 
                            }}
                            className='cursor-pointer relative h-80 w-full object-cover transition duration-300 ease-in-out group-hover:scale-105'
                            alt="NextUI hero Image"
                            src={product?.images[0]}
                        /> : <NoImageIcon />}
                        <div className='absolute bottom-2 left-1/2 -translate-x-1/2 w-full px-2 z-10'>
                            <div className="flex justify-between items-center p-2 bg-gray-300/75 rounded-full mt-3">
                                <span className='text-neutral-700 text-sm truncate'>{product.name}</span>
                                <Button size='sm' className='rounded-full' color='primary'>
                                    <p className="text-xs font-medium">{product.price} KD</p>
                                    <PlusIcon className="h-5" onClick={() => addToCart(product.id, 1)}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}


