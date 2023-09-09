import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../../features/productsSlice';
import { useNavigate } from 'react-router-dom';

const AllProduct = ({ selectedCategory }) => {
  const { products, isLoading, isError } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, []);

  useEffect(() => {
    setDisplayedProducts([]);
    setCurrentPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const filteredProducts = selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;

    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
    setDisplayedProducts([...displayedProducts, ...productsToDisplay]);
  }, [currentPage, products, selectedCategory]);

  const handleSingleProduct = (productId) => {
    navigate(`/products/${productId.id}`);
  };

  return (
    <div className='mt-[40px]'>
      {isLoading && (
        <div className='flex justify-center items-center'>
          <h1 className='text-green-600 text-4xl font-semibold'>Loading...</h1>
        </div>
      )}
      <div className='grid grid-cols-2 md:grid-cols-4 w-full'>
        {displayedProducts.map((product) => (
          <div key={product.id} className='mb-[75px] mx-3 mt-3 md:mx-5'>
            <div
              onClick={() => handleSingleProduct(product)}
              className='flex justify-center items-center flex-col shadow-sm rounded-md md:px-3 md:py-10'
            >
              <img
                src={product.image}
                className='h-[200px] w-[200px] object-contain transition-transform transform hover:scale-110'
                alt=''
              />
              <div className='mt-[20px] text-center'>
                <h1 className='text-[16px]'>{product.title.slice(0, 20)}</h1>
                <h1 className='font-semibold tracking-widest text-[16px] pt-2'>$ {product.price}</h1>
              </div>
              <div className='mt-6'>
                <img src={product.image} className='w-7 h-7 object-contain' alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className='my-10 flex justify-center'>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={displayedProducts.length >= products.length}
          className='px-7 py-3 rounded-full bg-indigo-900 font-semibold text-white'
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default AllProduct;
