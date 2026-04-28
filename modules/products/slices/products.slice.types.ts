export interface ProductsState {
    products: Product[];
    cart: Product[];
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: {
        stars: number;
        reviews: number;
    }
    deliveryType: 'free' | 'paid';
}