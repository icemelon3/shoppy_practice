import React from 'react';

export default function Register() {
const [selectedFile, setSelectedFile] = React.useState(null);   

    const saveItem = () => {
        alert('제품이 등록되었습니다.');
    }
    return (

        <>
        <div className=' '>
            <img src="" alt="" />
            <div className='flex flex-col items-center gap-4 mt-4'>
            <h1>새로운 제품 등록</h1>
            <div className='w-200'>
            <label htmlFor="uploadBtn" className='mr-5'>제품 이미지</label>
            <input type="file" name="uploadBtn" id="uploadBtn" className='hidden'/>
            <button className='bg-amber-600 p-2 rounded-md text-white'>이미지 업로드</button>
            </div>
            
            <input type="text" name="name" id="name"  placeholder='제품명' className='w-200 px-4'/>
            <input type="text" name="price" id="price"  placeholder='가격' className='w-200  px-4'/>
            <input type="text" name="categoryLarge" id="categoryLarge"  placeholder='카테고리(대)' className='w-200  px-4'/>
            <input type="text" name="categorySmall"  placeholder='카테고리(소)' className='w-200  px-4'/>
            <input type="text" name="desc" id="desc"  placeholder='제품 설명' className='w-200  px-4'/>
            <input type="text" name="sizeOptions" id="sizeOptions"  placeholder='사이즈옵션들(콤마((,)로 구분)' className='w-200  px-4'/>
            <input type="text" name="colorOptions" id="colorOptions"  placeholder='색상옵션들(콤마((,)로 구분)' className='w-200  px-4'/>
             <button className='bg-amber-600 text-white p-2 font-bold rounded-md w-full mt-4' onClick={saveItem}>제품등록하기</button>
            </div>
        </div>
        </>

    );
}

