import React, { useState } from 'react';
import { CiCirclePlus, CiCircleMinus} from "react-icons/ci";
import { BsTrashFill } from "react-icons/bs";
import { MdOutlineSaveAlt } from "react-icons/md";

export default function CartItems({cartItem, onUpdateQuantity, onDeleteItem}) {
    const {id, productId, name, img, size, color, price, totalPrice} = cartItem;
    const [quantity, setQuantity] = useState(cartItem.quantity);


const itemCountChange = (e) => {

    let newQuantity = 0;
    if(e.target.id == 'minusBtn'){
        newQuantity=  (quantity > 0)?quantity -1:0;
    }else{
       newQuantity =  (quantity ==10) ? 10: quantity +1;
    }
    if(newQuantity == 0){
        alert('최소 수량은 0개입니다.');
        newQuantity = 1;
    }else if(newQuantity ==10){
        alert('최대 수량은 10개 입니다.');
        newQuantity =10;
    }
    setQuantity(newQuantity);
    onUpdateQuantity({productId, quantity: newQuantity})

}

    const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }


    return (
        <section className='flex w-full h-50'>
            <div id='imgDiv' className='flex-1'>
            <img src={img} alt={id} className='w-40 h-50'/>
            </div>
            <div id='infoDiv' className='flex-4 flex flex-col text-left justify-center'>
                <p className='text-sm opacity-70'>{name}</p>
                <p className='text-sm text-orange-500'>{size}/{color}</p>
                <p className='text-sm opacity-90 font-bold'>{numberWithCommas(price)}</p>
                <p className='text-sm opacity-90 font-bold'>{productId}</p>
            </div>
            <div id = 'itemCountDiv' className='flex-1 flex justify-center items-center mt-2'>
            <CiCircleMinus id='minusBtn' className= '' onClick={(e)=>itemCountChange(e)} />  
            <input type="text" className= 'w-5 text-center' name="quantity" id="quantity" value={quantity}/>
            <CiCirclePlus className='' onClick={(e)=>itemCountChange(e)}/> 
            <BsTrashFill onClick={() => onDeleteItem({productId})}/>
            </div>
        </section>
    );
}

