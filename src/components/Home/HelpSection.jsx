import React from "react";

const HelpSection = () => {
  return (
    <div className="md:my-[100px]">
      <div className="w-auto md:mx-[76px] px-[20px] md:px-[30px]">
        <h1 className="text-center text-[36px] font-semibold mb-[50px]">
          Let us help you!
        </h1>
        <div className="md:flex justify-center items-center gap-16 md:mx-[153px]">
          <div className="w-full md:w-4/12 flex flex-col justify-center items-center">
            <img
              className="h-[200px]"
              src="https://i.ibb.co/fx35GZL/useful-info-delivery.jpg"
              alt=""
            />
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-[25px] p-2">Delivery</h1>
              <p className="text-center">
                Your order is our priority. Satisfaction guaranteed at the right
                time at the right place.
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/12 flex flex-col justify-center items-center">
            <img
              className="h-[200px]"
              src="https://i.ibb.co/vx9x1kN/useful-info-design.jpg"
              alt=""
            />
            <div className=" flex flex-col items-center justify-center">
              <h1 className="text-[25px] p-2">Design Studio</h1>
              <p className="text-center">
                Our specialists will help you build your perfect home
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/12 flex flex-col justify-center items-center">
            <img
              className="h-[200px]"
              src="https://i.ibb.co/ZBfb5MM/useful-info-services.jpg"
              alt=""
            />
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-[25px] p-2">Service</h1>
              <p className="text-center">
                Our experts will fix any of your issues
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
