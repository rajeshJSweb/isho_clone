import React, { useEffect, useState } from "react";
import BottomBanner from "../Home/BottomBanner";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../features/createUserSlice";
import { PiWarningCircleFill } from "react-icons/pi";

const Registration = () => {
  const { isLoading, user, isError } = useSelector((state) => state.createUser);
  const dispatch = useDispatch();

  const handleCreateUser = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await dispatch(createUser({ email, password }));
    event.target.reset();
  };

  return (
    <div>
      <div className="lg:py-20 pb-20 bg-[#3BC4F2]">
        <div className="px-5 sm:px-9 md:mx-[76px] md:px-[30px]">
          <div className="flex flex-col lg:flex-row lg:justify-center items-center h-full lg:gap-0 w-full">
            <div className="w-full sm:w-[470px] lg:h-[405px] pt-5 px-2">
              <h1 className="text-[25px] lg:text-5xl text-white font-semibold mb-2">
                Create your ISHO Account
              </h1>
              <p className="text-base mb-7 text-white">
                ISHO follows the philosophy of cumulative knowledge construction
                to develop the most valuable user experience, evolving customer
                needs while embracing the collaborative nature of design.
              </p>
            </div>
            <div className="bg-white px-5 w-full lg:w-[470px] py-10 lg:p-10">
              <h1 className="text-lg mb-1 text-center">
                You need to varify your Email!
              </h1>
              <p
                className={`${
                  user && (user?.message || isError)
                    ? "mb-5 text-base text-center"
                    : "mb-10 text-base text-center"
                }`}
              >
                Please enter your valid email and password
              </p>
              {user?.message || isError ? (
                <div className="flex border-2 border-pink-500 p-2 justify-evenly items-center mb-5 rounded-sm mx-5">
                  <PiWarningCircleFill className="text-[25px] text-pink-500" />
                  <p>{isError || user?.message}</p>
                </div>
              ) : null}
              <div className="flex items-center flex-col lg:mx-5">
                <form
                  onSubmit={handleCreateUser}
                  className="w-full flex flex-col items-center gap-3"
                >
                  <input
                    className="border-[1px] border-gray-300 outline-none w-full rounded-full py-3 px-5"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                  />
                  <input
                    className="border-[1px] border-gray-300 outline-none w-full rounded-full py-3 px-5"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <input
                    className="bg-[#3BC4F2] text-[10px] cursor-pointer lg:text-[14px] my-5 px-5 py-3 rounded-full w-full font-semibold text-white"
                    type="submit"
                    value="CREATE AN ACCOUNT"
                  />
                </form>
                <p className="text-gray-500 text-center">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#3BC4F2] cursor-pointer">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBanner />
    </div>
  );
};

export default Registration;
