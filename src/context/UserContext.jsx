import React, { useEffect, useState } from 'react';
import { createContext, useContext } from "react";
export const UserContext = createContext();

export function UserProvider({children}) {
    const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
    useEffect(() => {
        localStorage.setItem('userId', userId);
    }, [userId]);
    return (
        <UserContext.Provider value={{userId, setUserId}}>
            {children}
        </UserContext.Provider>
    );
}


export function useUser(){
    return useContext(UserContext)
}




