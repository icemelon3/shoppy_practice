import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CiCirclePlus, CiCircleMinus} from "react-icons/ci";
import {useProductsApi} from '../context/ProductsApiContext';
import {useUser} from '../context/UserContext';

export default function ProductCard() {
    const {state:{product}} = useLocation();
    const {id, name, price, desc, sizeOptions, colorOptions, img} = product;
    const [size, setSize] = useState(sizeOptions[0]);
    const [color, setColor] = useState(colorOptions[0]);
    const [itemCount, setItemCount] = useState(1);
    const {userId} = useUser();

 const {productApi} = useProductsApi();

 const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const itemCountPlus = () => {
    itemCount<10?setItemCount(itemCount + 1):setItemCount(10);
}


const itemCountMinus = () => {
    itemCount>0?setItemCount(itemCount - 1):setItemCount(0);
}

const addCart = (e) => {
    const pickSize = document.getElementById('size').value
    const pickColor = document.getElementById('color').value
    const itemCount = parseInt(document.getElementById('quantity').value);

    if(pickSize === "" ){ alert("사이즈를 선택해주세요."); document.getElementById('size').focus(); return ;}
    if(pickColor === "" ){ alert("색상을 선택해주세요."); document.getElementById('color').focus(); return ;}
    if(itemCount === 0 ){ alert("수량을 선택해주세요."); document.getElementById('quantity').focus();return ;}
    
    e.preventDefault();
        const cartItem = {
        productId: id,
        name:name,
        size: pickSize,
        color: pickColor,
        quantity: itemCount,
        price: price,
        totalPrice: price * itemCount,
        img
    } 
    
    productApi.setCartItems(userId, cartItem);

    alert(`${name} ${size} ${color} ${itemCount}개 장바구니에 담겼습니다.`);


}

    return (
        
        <li>
            <section className='flex'>
                <article className='flex  w-full p-4'>
                <img src={img} alt={name} className='basis-3/5'/>
                <div className='flex flex-col items-center w-60 ml-2 basis-2/5'>
                    <p className='text-sm mb-2'>상품번호: {id}</p>
                    <p className='font-bold text-xl my-2 underline'>{name}</p>
                    <p className='font-semibold opacity-80 my-3'>{numberWithCommas(price)}</p>
                    <p className="text-sm opacity-80">{desc}</p>
                    <label htmlFor="size" > </label>
                    <select id='size' style={{fontSize: '0.8rem'}} className='py-1 my-2' onChange={(e)=>setSize(e.target.value)}>
                        <option value="" >사이즈선택</option>    
                        {sizeOptions.map(size => 
                            <option key={size} value={size}>{size}</option>)
                        }
                    </select>
                    <label htmlFor="color"> </label>
                    <select id='color' style={{fontSize: '0.8rem'}} className='py-1 my-2' onChange={(e)=>setColor(e.target.value)}>
                        <option value="">컬러선택</option>    
                        {colorOptions.map(color => 
                            <option key={color} value={color}>{color}</option>)
                        }
                    </select>
                    <div className='w-full h-0.5 bg-black opacity-30'></div>
                    <div id = 'itemCountDiv' className='w-full flex justify-center items-center mt-2'>
                    <CiCircleMinus  className= '' onClick={itemCountMinus} />  
                    <input type="text" className= 'w-5 text-center' name="quantity" id="quantity" value={itemCount||'1'}/>
                    <CiCirclePlus className='' onClick={itemCountPlus}/> 
                    </div>
                    <button className='mt-auto my-2 bg-amber-600 text-white py-2 px-4 rounded' onClick={addCart}>장바구니</button>
                </div>
                </article>
           </section>
        </li>
    );
}

