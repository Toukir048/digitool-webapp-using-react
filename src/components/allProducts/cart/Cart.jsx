import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';

const Cart = ({ productCart, setProductCart }) => {
    const handleRemoveFromCart = (productId) => {
        const updatedCart = productCart.filter(item => item.id !== productId);
        setProductCart(updatedCart);
        // console.log("Removed:", productId);
        // console.log("Updated cart:", updatedCart);
    };

    const handleCheckout = () => {
        setProductCart([]);
        toast("Thank you for your purchase!");
    }

    const totalPrice = productCart.reduce((total, product) => total + product.price, 0);

    return (
        <div className='border border-gray-300 rounded-lg my-10 px-2 md:px-4 py-2 md:py-4'>
            <p className='text-xl font-bold'>Your Cart</p>

            {productCart.length === 0 ? (
                <div className='flex flex-col justify-center items-center my-8'>
                    <IoCartOutline className='text-8xl text-gray-400' />
                    <h3 className='text-2xl text-gray-400 font-semibold'>Your cart is empty</h3>
                </div>
            ) : (
                <div className='flex flex-col mt-2 gap-4 w-full'>
                    {productCart.map(product => (
                        <div
                            key={product.id}
                            className="card bg-base-200 shadow-sm flex-row items-center justify-between"
                        >
                            <div className="card-body flex flex-row items-center gap-2 md:gap-4">
                                <div className='w-8 h-8 md:w-16 md:h-16 bg-gray-100 p-2 border border-gray-300 rounded-full flex items-center justify-center'>
                                    <img
                                        src={product.icon}
                                        alt={product.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div className='flex flex-col justify-center'>
                                    <h3 className="text-sm md:text-xl font-bold">{product.name}</h3>
                                    <span className="text-sm md:text-xl">${product.price}</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    handleRemoveFromCart(product.id);
                                    toast("Product removed from cart!");
                                }}
                                className='me-4 p-2 gradient-bg rounded-full cursor-pointer text-red-600 tooltip tooltip-left tooltip-gradient'
                                data-tip="Remove"
                            >
                                <MdDelete className='md:w-8 md:h-8' />
                            </button>
                        </div>
                    ))}

                    <div className='flex justify-between items-center'>
                        <p className='text-gray-600'>Total:</p>
                        <h3 className='font-bold text-xl'>${totalPrice}</h3>
                    </div>

                    <button
                    onClick={handleCheckout}
                        type="button"
                        className='gradient-bg text-white font-bold py-2 px-4 text-sm sm:text-xl rounded cursor-pointer'
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;