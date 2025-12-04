import React from 'react';
import { GiShop } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa6";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineCached } from "react-icons/md";
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';


export default function SearchHeader() {
    const navigate = useNavigate();
    const { userId, setUserId } = useUser();
    const goHome = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const goCart = (e) => {  
        e.preventDefault
        navigate(`/cart/${userId}`);
    }

    const goRegister = (e) => {  
        e.preventDefault
        navigate(`/register`);
    }


    const setUser = () => {
        let userId = confirm('로그인 하시겠습니까?')?prompt('아이디를 입력하세요'):'';
        if(!userId){
            alert('올바른 아이디를 입력해주세요.');
            return;
        }
        setUserId(userId.toUpperCase());
    }
    return (
        <header className='flex justify-between items-center p-4 border-b-2 border-black'>
            <div id='logo' className='flex items-center gap-2 text-2xl font-bold' onClick={goHome}>
            <GiShop className='text-3xl' />
            <h1>Shoppy</h1>
            </div>
            <div id='menubar' className='flex items-center gap-2 text-2xml font-bold'>
            <h1 onClick={goHome}>Product</h1>
            <FaCartPlus className='text-2xl' onClick={goCart}/>
            {userId && userId=='ADMIN'&&<HiOutlinePencilAlt className='text-2xl' onClick={goRegister}/>}
            <FaUserCircle className='text-2xl'/>
            {userId ? <button onClick={() => setUserId('')}>Logout</button> : <button onClick={setUser}>Login</button>}
            <MdOutlineCached className='text-2xl'/>
            </div>
        </header>
    );
}

