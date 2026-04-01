import React from 'react';
import Card from '../../card/card';

const Products = ({ productsData, productCart, setProductCart }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 w-full h-full'>
            {productsData.map(product => (
                <Card
                    key={product.id}
                    product={product}
                    productCart={productCart}
                    setProductCart={setProductCart}
                />
            ))}
        </div>
    );
};

export default Products;