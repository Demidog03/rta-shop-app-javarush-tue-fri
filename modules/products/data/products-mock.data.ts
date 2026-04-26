import homePageMainImage from '@/assets/images/home-page-main-image.jpg';
import { Product } from '../slices/products.slice.types';

export const productsMockData: Product[] = [
    {
        id: '1',
        name: 'Woke Up Like This',
        description: 'Effortlessly cool style',
        price: 49.99,
        image: homePageMainImage,
        rating: {
            stars: 3.5,
            reviews: 100,
        },
        deliveryType: 'free',
    },
    {
        id: '2',
        name: 'Feeling Fancy',
        description: 'Elevate your style with this premium casual shirt',
        price: 79.99,
        image: homePageMainImage,
        rating: {
            stars: 5,
            reviews: 100,
        },
        deliveryType: 'paid',
    },
    {
        id: '3',
        name: 'Sporty Style',
        description: 'Stay active and stylish with this versatile casual shirt',
        price: 69.99,
        image: homePageMainImage,
        rating: {
            stars: 4.5,
            reviews: 100,
        },
        deliveryType: 'paid',
    },
    {
        id: '4',
        name: 'Classic Chic',
        description: 'A timeless look for any occasion',
        price: 59.99,
        image: homePageMainImage,
        rating: {
            stars: 2,
            reviews: 100,
        },
        deliveryType: 'free',
    },
];