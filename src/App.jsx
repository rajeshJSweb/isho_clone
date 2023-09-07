import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Login from './components/User/Login/Login';
import Products from './components/Products.jsx/Products';
import Carts from './components/Carts/Carts';

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/products/:productId',
          element: <Products />
        },
        {
          path: '/carts',
          element: <Carts/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>
      <h1>App</h1>
    </RouterProvider>
  );
};

export default App;