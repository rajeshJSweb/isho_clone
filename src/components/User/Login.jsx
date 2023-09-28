import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BottomBanner from "../Home/BottomBanner";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/loginSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { user, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const from = location.state?.from?.pathName || '/'

  const handleUserLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(userLogin({ email, password }));
    toast.warn(user?.error,{
      theme: "colored"
    });
  };

  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      <div className="py-20 bg-[#3BC4F2]">
        <div className="px-5 sm:px-9 md:mx-[76px] md:px-[30px]">
          <h1 className="text-[25px] lg:text-5xl mb-10 text-white text-center font-semibold">
            Welcome To ISHO, Please Sign in!
          </h1>
          <div className="flex flex-col lg:flex-row lg:justify-center items-center h-full gap-10 lg:gap-0">
            <div className="w-full sm:w-[470px] lg:h-[450px] bg-white px-5 py-10 lg:p-10 relative">
              <div className="absolute top-2"></div>
              <h1 className="text-lg mb-1 text-center">
                I Am Already a Registered ISHO User!
              </h1>
              <p
                className={`${
                  user && (user?.error || user?.message)
                    ? "mb-5 text-center"
                    : "mb-10 text-center"
                }`}
              >
                Enter your mobile number and password to sign in
              </p>
              <div className="sm:mx-14 lg:mx-9 flex items-center flex-col">
                <form
                  onSubmit={handleUserLogin}
                  className="w-full flex flex-col items-center gap-3"
                >
                  <ToastContainer />
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
                  <Link
                    to="/password"
                    className={`${
                      user && (user?.error || user?.message)
                        ? "mb-4 text-xs text-[#3BC4F2] mt-2"
                        : "mb-8 text-xs text-[#3BC4F2] text-center mt-2"
                    }`}
                  >
                    Forgot Password?
                  </Link>
                  <input
                    className="bg-[#3BC4F2] text-[10px] lg:text-[14px] px-5 py-3 rounded-full w-full font-semibold text-white"
                    type="submit"
                    value="LOGIN"
                  />
                </form>
              </div>
            </div>
            <div className="w-full sm:w-[470px] lg:h-[450px] bg-yellow-400 px-5 py-10 lg:p-10 flex flex-col items-center">
              <h1 className="text-lg mb-1 text-center">
                I Want a ISHO User Account.
              </h1>
              <p className="text-sm mb-10 text-center">
                If you still don’t have an account isho.com, use this option to
                access the registration form. Provide your details to create an
                account on isho.com
              </p>
              <Link
                to="/registration"
                className="bg-white px-10 py-3 rounded-full text-[10px] lg:text-[14px] text-center "
              >
                CREATE AN ACCOUNT
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BottomBanner />
    </div>
  );
};

export default Login;
