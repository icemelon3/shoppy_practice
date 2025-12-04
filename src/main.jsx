import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import NotFound from './pages/NotFound.jsx';
import Register from './pages/Register.jsx';
import List from './pages/List.jsx';
import Detail from './pages/Detail.jsx';
import Cart from './pages/Cart.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
        path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <List /> },
      { path: 'register', element: <Register /> },
      { path: 'list', element: <List /> },
      { path: 'list/:keyword', element: <List /> },
      { path: 'detail/:productId', element: <Detail /> },
      { path: 'cart/:userId', element: <Cart /> },
    ],
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
