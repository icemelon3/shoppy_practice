import axios from "axios"

export default class ProductsApi{

    constructor(){}

    async search() {
        return axios.get(`/products/products.json`)
     .then((res)=>{
        return res.data})
    }

    async getCartItems(userId){
       const cartItem = localStorage.getItem(`cart_${userId}`.toUpperCase());
       return cartItem?JSON.parse(cartItem): {userId:userId.toUpperCase(), cartItems:[]};
    }

    async setCartItems(userId, cartItem){
        let addItems ={};
        const {name,size,color, quantity, price, totalPrice, img} = cartItem;
        const existCart = await this.getCartItems(userId);
        let existCartItems = existCart && existCart.cartItems && Array.isArray(existCart.cartItems)?existCart.cartItems:[];
        const newCart = [...existCartItems,{productId:cartItem.productId, name, size, color, quantity, price, totalPrice, img}];
        addItems = {userId:userId.toUpperCase(), cartItems:newCart}
        localStorage.setItem(`cart_${userId}`.toUpperCase(), JSON.stringify(addItems));
    }


    async updateCartItem(userId, productId, quantity){
        const existCart = await this.getCartItems(userId);
        const newCartItems = existCart.cartItems.map((item) => 
            (item.productId == productId)?({...item, quantity, totalPrice: item.price * quantity}):item);
        const updatedCart = {userId:userId.toUpperCase(), cartItems:newCartItems};
        localStorage.setItem(`cart_${userId}`.toUpperCase(), JSON.stringify(updatedCart));
        return updatedCart;
        };
    
    async removeCartItem(userId, productId){
        console.log(productId, userId);
        const existCart = await this.getCartItems(userId);
        const newCartItems = existCart.cartItems.filter((item) => {
            return item.productId != productId;
        });
        const deletedCart = {userId:userId.toUpperCase(), cartItems:newCartItems};
        localStorage.setItem(`cart_${userId}`.toUpperCase(), JSON.stringify(deletedCart));
        return deletedCart;            

    }





}

