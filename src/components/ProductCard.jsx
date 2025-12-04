import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({product}) {
    const {id, name, price, desc, sizeOptions, colorOptions, img} = product;
    const [size, setSize] = useState(sizeOptions[0]);
    const [color, setColor] = useState(colorOptions[0]);
    const navigate = useNavigate();
    return (
        <li onClick={()=>navigate(`/detail/${id}`, {state:{product}})}>
            <div className='p-4'>
                <img src={img} alt={name} className='w-60 h-90'/>
            <p className='font-semibold my-2'>{name}</p>
            <p className="text-sm opacity-80">{price}</p>
            <p className="text-sm opacity-80">{desc}</p>
           </div>
        </li>
    );
}

