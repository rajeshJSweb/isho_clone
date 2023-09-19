import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Login from './components/User/Login/Login';
import Products from './components/Products.jsx/Products';
import Carts from './components/Carts/Carts';
import AllProducts from './components/Products.jsx/AllProducts';
import PersonalWorkSpace from './components/PersonalWorkSpace/PersonalWorkSpace';
import UnwindingZone from './components/UnwindingZone/UnwindingZone';

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
        },
        {
          path: '/all_products',
          element: <AllProducts/>
        },
        {
          path: '/personal-workspace',
          element: <PersonalWorkSpace/>
        },
        {
          path: '/unwinding-zone',
          element: <UnwindingZone/>
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