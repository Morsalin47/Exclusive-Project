import React, { use, useState } from "react";
import l2 from "../../assets/l2.png";
import { IoChevronUpSharp } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { cartQuantity } from "../../slices/cartSlice";

const CartPage = () => {

    const data = useSelector((state) => state.cartDetails.cartItems);
    const dispatch = useDispatch();

    const [couponText, setCouponText] = useState("");
    const [discount, setDiscount] = useState(0);

    const totalPrice = data.reduce((prev, current) => {
        return prev + (current.price * current.cartQuantity);
    }, 0).toFixed(2);

    const handleIncrement = (id) => {
        dispatch(cartQuantity({ id: id, type: "increment" }));
    }

    const handleDecrement = (id) => {
        dispatch(cartQuantity({ id: id, type: "decrement" }));
    }

    const handleChange = (e) => {
        setCouponText(e.target.value);
    }

    const handelApplyCoupone = () => {
        if (couponText === "mdmrm20") {
            setDiscount(parseFloat((totalPrice * 0.2).toFixed(2)));
        }
    }

    const total = totalPrice - discount;
    
    return (
        <div>
            <div className="flex items-center justify-between text-center py-6 px-10 shadow-[0_1px_13px_rgba(0,0,0,0.1)] rounded">
                <div className="w-[25%]">Product</div>
                <div className="w-[25%]">Price</div>
                <div className="w-[25%]">Quantity</div>
                <div className="w-[25%]">Subtotal</div>
            </div>

            {
                data.map((product, index) => (
                    <div className="flex items-center justify-between text-center mt-10 py-6 px-10 shadow-[0_1px_13px_rgba(0,0,0,0.1)] rounded">
                        <div className="w-[25%] flex items-center gap-x-4">
                            <img className="w-14" src={product.thumbnail} alt="" />
                            <p>{product.title}</p>
                        </div>
                        <div className="w-[25%]">
                            ${product.price}
                        </div>
                        <div className="w-[25%]">
                            <div className="border-[1px] border-[#D9D9D9] inline-block rounded px-4 py-2">
                                <div className="flex items-center justify-between">
                                    <p>{product.cartQuantity}</p>
                                    <div className="ml-4">
                                        <IoChevronUpSharp onClick={() => handleIncrement(index)} className="cursor-pointer" />
                                        <IoChevronDownSharp onClick={() => handleDecrement(index)} className="cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[25%]">${(product.price * product.cartQuantity).toFixed(2)}</div>
                    </div>))
            }

            <div className="flex justify-between mt-6">
                <div>
                    <button className="px-12 py-4 border-2 border-[#808080] rounded">Return To Shop</button>
                </div>
                <div>
                    <button className="px-12 py-4 border-2 border-[#808080] rounded">Update Cart</button>
                </div>
            </div>

            <div className="flex mt-20">
                <div>
                    <input
                        onChange={handleChange}
                        name="coupon"
                        value={couponText}
                        className="w-[300px] py-4 px-6 border-2 border-[#808080] rounded" type="text" placeholder="Coupon Code" />
                    <button onClick={handelApplyCoupone} className='font-primary font-medium text-[16px] rounded leading-6 bg-primary ml-4 px-12 py-4 text-white cursor-pointer'>Apply Coupon</button>
                </div>
                <div className="w-[470px] ml-43 px-6 py-8 border-2 border-[#808080] rounded">
                    <p className="font-primary font-medium text-xl leading-7 ml-6">Cart Total</p>
                    <div className="flex items-center justify-between ml-6 mt-6 border-b-2 border-[#808080] pb-4">
                        <p className="font-primary leading-6">Subtotal:</p>
                        <p className="font-primary text-[16px] leading-6">${totalPrice}</p>
                    </div>
                    <div className="flex items-center justify-between ml-6 mt-6 border-b-2 border-[#808080] pb-4">
                        <p className="font-primary leading-6">Discount:</p>
                        <p className="font-primary text-[16px] leading-6">${discount}</p>
                    </div>
                    <div className="flex items-center justify-between ml-6 mt-6 border-b-2 border-[#808080] pb-4">
                        <p className="font-primary leading-6">Shipping:</p>
                        <p className="font-primary text-[16px] leading-6">Free</p>
                    </div>
                    <div className="flex items-center justify-between ml-6 mt-6">
                        <p className="font-primary leading-6">Total:</p>
                        <p className="font-primary text-[16px] leading-6">${total}</p>
                    </div>
                    <div className="text-center mt-4">
                        <button className='font-primary font-medium text-[16px] rounded leading-6 bg-primary ml-4 px-12 py-4 text-white cursor-pointer'>Procees to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;