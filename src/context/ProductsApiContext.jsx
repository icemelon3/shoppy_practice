import { createContext, useContext } from "react";
import ProductsApi from "../api/productsApi"

export const ProductsApiContext = createContext();

const productApi = new ProductsApi();
export function ProductsApiProvider({children}){
    return( 
    <ProductsApiContext.Provider value={{productApi}}>
        {children}
    </ProductsApiContext.Provider>
)
}

export function useProductsApi(){
    return useContext(ProductsApiContext)
}