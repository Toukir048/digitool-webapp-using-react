import React from 'react';
import { FaCheck } from "react-icons/fa";
import { toast } from 'react-toastify';


const Card = ({ product, productCart, setProductCart }) => {
   
const isAdded = productCart.some(item => item.id === product.id);
    const handleAddToCart = (product) => {
        
        if (isAdded) {
            toast("Product already added!");
            return;
        }
        else {
            toast("Product added to cart!");
        }

        setProductCart(prevCart => [...prevCart, product]);
    };

    return (
        <div>
            <div className="card bg-base-100 shadow-md h-full">
                <div className="card-body">
                    <div className='flex justify-end'>
                        <span
                            className={`badge badge-xs p-3 rounded-full ${
                                product.tagType === 'Best Seller'
                                    ? 'badge-warning text-amber-700'
                                    : product.tagType === 'Popular'
                                    ? 'badge-primary text-indigo-300'
                                    : 'badge-success text-green-800'
                            }`}
                        >
                            {product.tagType}
                        </span>
                    </div>

                    <div className='bg-gray-100 p-2 border border-gray-300 rounded-full w-16 h-16 flex items-center justify-center mb-4'>
                        <img src={product.icon} alt={product.name} />
                    </div>

                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p>{product.description}</p>
                    <span className="text-xl">${product.price}/{product.period}</span>

                    <ul className="mt-6 flex flex-col justify-start gap-2 text-xs">
                        {product.features.map((feature, index) => (
                            <li key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6">
                        <button
                            type="button"
                            onClick={() => handleAddToCart(product)}
                            className={`btn rounded-full p-4 ${isAdded ? 'btn-success text-white' : 'gradient-bg text-white'} btn-block hover:opacity-90`}
                            
                        >
                            {isAdded ? <FaCheck className='me-1' /> : null}
                            {isAdded ? 'Added to Cart' : 'Buy Now'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;