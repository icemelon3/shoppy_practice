import React from 'react';
import ProductCard from '../components/ProductCard';
import { useQuery } from '@tanstack/react-query';
import {useProductsApi} from '../context/ProductsApiContext';

export default function List() {
  const {productApi} = useProductsApi();
  const {isLoading, error, data:products} = useQuery({
queryKey: ['products'],
queryFn: () => productApi.search()
  }); 
  return (
    <div>
      {/* <ProductCard /> */}
      {isLoading && <div>Loading...</div>}
      {error && <div>Error occurred: {error.message}</div>}
      {products && (
        <ul className='grid grid-cols-4'>
          {products.map((product) => (
<ProductCard key={product.id} product={product} />
            
          ))}
        </ul>
      )}
    </div>
  );
}

