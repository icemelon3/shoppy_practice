import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import SearchHeader from './components/SearchHeader';
import {ProductsApiProvider} from './context/ProductsApiContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from './context/UserContext';

const queryClient = new QueryClient();

function App() {

  return (
<UserProvider>
<SearchHeader />
    <ProductsApiProvider>
      <QueryClientProvider client = {queryClient}>
      <Outlet />
      </QueryClientProvider>
    </ProductsApiProvider> 
</UserProvider>
  )
}

export default App
