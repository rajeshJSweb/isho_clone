import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state) => state.addCart.cart);
  const [isCheckBox, setIsCheckBox] = useState(false);

  const subTotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

    let grandTotal = 0
    let discountAmount = 0

    if(subTotal>45){
        discountAmount= (subTotal * 10)/100
        grandTotal = subTotal - discountAmount
    }else{
        grandTotal = subTotal
    }

  const handleCheckboxChange = () => {
    setIsCheckBox(!isCheckBox);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    console.log(name)
  };

  return (
    <div className="md:mx-[64px] md:px-[30px] my-20">
      <form onSubmit={handleFormSubmit}>
        <div className="flex">
          <div className="w-full md:w-8/12 px-10">
            <div className="flex justify-between items-center mb-7">
              <h1 className="font-semibold text-2xl">Contact Information</h1>
              <p>
                Already have and account? <Link to='/login' className="text-blue-400">Login</Link>
              </p>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full px-5 py-3 outline-none border-2 border-gray-400 rounded-md mb-5"
            />
            <div className="flex w-full gap-5">
              <input
                className="mb-5 py-3 px-5 border-2 border-gray-400 rounded-md outline-none w-full"
                type="text"
                name="phone"
                required
                placeholder="Phone Number"
              />
              <input
                className="mb-5 py-3 px-5 border-2 border-gray-400 rounded-md outline-none w-full"
                type="text"
                name="emergencyPhone"
                placeholder="Emergency Number"
              />
            </div>
            <input
              type="text"
              name="email"
              placeholder="Your email address"
              required
              className="w-full px-5 py-3 outline-none border-2 border-gray-400 rounded-md mb-5"
            />
            <label className="mb-5" htmlFor="">
              Choose your division
            </label>
            <select
              name="division"
              className="w-full py-2 px-5 border-2 border-gray-400 rounded-md outline-none mb-5"
            >
              <option value="">Dhaka</option>
              <option value="">Rangpur</option>
              <option value="">Sylhet</option>
              <option value="">Khulna</option>
              <option value="">Rajshahi</option>
            </select>
            <label htmlFor="">Write your address</label>
            <textarea
              className="w-full px-5 py-2 mb-5 outline-none border-2 border-gray-500 rounded-md"
              name="textArea"
              id=""
              placeholder="Write your messages"
            ></textarea>
            <div className="flex gap-2 mb-4">
              <input
                type="checkbox"
                onChange={handleCheckboxChange}
                name="confirm"
              />
              <label htmlFor="">Create my user account</label>
            </div>
            {isCheckBox ? (
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-5 py-3 outline-none border-2 border-gray-400 rounded-md mb-5"
              />
            ) : null}
          </div>
          <div className="bg-slate-50 w-full md:w-4/12 md:px-5 md:py-10">
            <table className="w-full">
              <tr className="border-b-[1px] border-gray-500">
                <td className="py-3 text-xl w-8/12">Subtotal</td>
                <td className="text-center text-2xl font-semibold">
                  ${subTotal.toFixed(1)}
                </td>
              </tr>
              <tr className="border-b-[1px] border-gray-500">
                <td className="py-3 text-xl w-8/12">Coupon discount</td>
                <td className="text-center text-lg">
                  ${discountAmount.toFixed(1)}
                </td>
              </tr>
              <tr className="border-b-[1px] border-gray-500">
                <td className="py-3  text-xl w-8/12">Shipping charge</td>
                <td className="text-center text-base">$10</td>
              </tr>
              <tr className="border-b-[1px] border-gray-400">
                <td className="py-3  text-xl w-8/12">Total price</td>
                <td className="text-center text-2xl font-semibold">
                  ${grandTotal.toFixed(1)}
                </td>
              </tr>
            </table>
            <div className="flex justify-between border-[1px] border-gray-400 py-2 px-5 mt-14">
              <div className="flex justify-center cursor-pointer items-center gap-2 bg-black px-5 py-2 rounded-md text-white hover:bg-slate-600">
                <BsArrowLeft />
                <Link to="/carts">Back</Link>
              </div>
              <div className="flex cursor-pointer justify-center items-center gap-2 bg-black px-5 py-2 rounded-md text-white hover:bg-slate-700">
                <input type="submit" className="cursor-pointer" value="Next" />
                <BsArrowRight className="font-semibold cursor-pointer " />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
