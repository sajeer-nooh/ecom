import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useLocation } from 'react-router-dom';
import { Chip } from '@nextui-org/react';


const ProductDetails = () => {
    const location = useLocation();
    const product = location.state;

    console.log(product)

    if (!product) {
        return <div>No data passed!</div>;
    }

    return (
        <div className="flex flex-col justify-center min-h-screen px-4 md:flex-row md:space-x-10">
            <div className="w-full md:w-1/2">
                {product?.images?.length && <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper: any) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {product.images.map((image: string, i: number) => (
                        <SwiperSlide className="w-full h-400" key={i}>
                            <img className="w-full h-80" height={500} width={300} src={image} alt="product" />
                        </SwiperSlide>))}
                </Swiper>}

            </div>
            <div className="w-full md:w-1/2 p-4">
                <h1 className="font-bold text-2xl mb-2">{product.name}</h1>
                <h1 className="font-bold text-2xl mb-2 rtl">{product.name_ar}</h1>
                <p className="text-gray-500 text-sm mt-4">{product.description}</p>
                <p className="text-gray-500 text-sm mt-4 rtl">{product.description_ar}</p>

                <p className="text-gray-700 mb-4 text-lg">{product.price} KWD</p>

                <Chip className="capitalize" color="default" size="sm" variant="flat">
                    {product.category}
                </Chip>

                <button className="my-4 w-full py-2 rounded-md bg-blue-600 text-white font-medium focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 hover:bg-blue-700">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
