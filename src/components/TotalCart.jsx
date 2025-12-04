import React from 'react';
import { useState } from 'react';
import { FaPlusCircle, FaEquals } from "react-icons/fa";


export default function TotalCart({totalProducts}) {
    
    // const [totalArr, setTotalArr] = useState([totalProducts.map((item)=>(item.price * item.quantity))]);

     const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    //  let totalPrice = totalArr[0].reduce((acc, curr) =>  parseInt(acc) + parseInt(curr) , 0);
    //  console.log(totalProducts);
    const totalPrice = totalProducts?.reduce((sum, item)=>{
        return sum + (item.price * item.quantity);
    }, 0)||0;

    return (
        <section>
        <di className='grid grid-cols-5 gap-4 text-center font-bold mt-4'>
            <div className='bg-gray-100 rounded-md mx-4 py-3'><p>상품총액</p><p>{numberWithCommas(totalPrice)}</p></div> 
            <div className='flex  justify-center items-center '><FaPlusCircle /></div> 
            <div className='bg-gray-100 rounded-md mx-4 py-3'><p>배송비</p><p>{numberWithCommas((totalPrice<5000?3000:0))}</p></div> 
            <div className='flex justify-center items-center'><FaEquals /></div>
            <div className='bg-gray-100 rounded-md mx-4 py-3'><p>총가격</p><p>{numberWithCommas(totalPrice + (totalPrice<5000?3000:0))}</p></div>
        </di>
        <div>
            <button className='bg-amber-600 text-white p-2 font-bold rounded-md w-full mt-4'>주문하기</button>
        </div>
        </section>

    );
}

