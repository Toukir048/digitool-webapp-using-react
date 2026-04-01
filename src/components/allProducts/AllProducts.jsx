import React, { useEffect, useState } from 'react';
import Products from './products/Products';
import Cart from './cart/Cart';

const AllProducts = ({ productCart, setProductCart }) => {
  const [productsData, setProductsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('products');

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(setProductsData)
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const baseBtn =
    'px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200';

  const activeBtn =
    'bg-gradient-to-l from-[#9514FA] to-[#4F39F6] text-white shadow-md';

  const inactiveBtn =
    'bg-gray-100 text-gray-600 hover:bg-gray-200';

  return (
    <section className="max-w-7xl mx-auto mb-10 px-4 py-10">
      <div className="flex flex-col items-center text-center gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900">
          Premium Digital Tools
        </h2>

        <p className="max-w-lg text-gray-500">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className="flex gap-2 p-1 bg-gray-100 rounded-full">
          <button
            onClick={() => setSelectedCategory('products')}
            className={`${baseBtn} ${
              selectedCategory === 'products' ? activeBtn : inactiveBtn
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setSelectedCategory('cart')}
            className={`${baseBtn} ${
              selectedCategory === 'cart' ? activeBtn : inactiveBtn
            }`}
          >
            Cart ({productCart.length})
          </button>
        </div>
      </div>

      {selectedCategory === 'products' ? (
        <Products
          productsData={productsData}
          productCart={productCart}
          setProductCart={setProductCart}
        />
      ) : (
        <Cart
          productCart={productCart}
          setProductCart={setProductCart}
        />
      )}
    </section>
  );
};

export default AllProducts;