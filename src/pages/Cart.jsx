import React from 'react';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import {useProductsApi} from '../context/ProductsApiContext';
import CartItems from '../components/CartItems';
import {useUser} from '../context/UserContext';
import TotalCart from '../components/TotalCart';

export default function Cart() {
    const {productApi} = useProductsApi();
    const queryClient = useQueryClient();
    const {userId} = useUser();


    const {isLoading, error, data:cart} = useQuery({
    queryKey: ['cart'],
    queryFn: () => productApi.getCartItems(userId)
    }); 

    const updateQuantity =  useMutation({
    mutationFn: ({productId, quantity}) => {
        productApi.updateCartItem(userId, productId, quantity);
    },
    onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(['cart', userId]);
    }
    });

    const deleteItem = useMutation({
       // console.log(productId, userId),
       
    mutationFn: ({productId}) => {
        productApi.removeCartItem(userId, productId);
    },
    onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(['cart', userId]);
    }
    });

    return (
        <div>
            <title>내 장바구니</title>
            <div className=''>
            {isLoading && <div>Loading...</div>}
                {error && <div>Error occurred: {error.message}</div>}
                {cart && cart.cartItems && cart.cartItems.length > 0 ? (
                    <div>
                    <ul className=''>
                    {
                    cart.cartItems.map((items) => (
                     <li key={items.productId} className='py-1'>
                        <CartItems cartItem={items} onUpdateQuantity={updateQuantity.mutate} onDeleteItem={deleteItem.mutate} /></li>
                    ))}
                    </ul>
                    <TotalCart totalProducts = {cart.cartItems || []}></TotalCart>
                   </div>
                   ):(<div>장바구니가 비어있습니다.</div>)}
            </div>
            
        </div>
    );
}

