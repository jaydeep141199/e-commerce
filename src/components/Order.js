import React from "react";
import { useLocation } from "react-router-dom";

export const Order = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
     
       
          {location.state.orders.map((order) => (
            <div className="flex py-5">
              <div>
                <img
                  src={order.image}
                  alt="photo1 "
                  className="h-[100px] w-[200px]"
                />
              </div>
              <div className="px-4">
                <div>
                  <p>{order.title}</p>
                </div>
                <div>
                  <p>
                    {order.description.length >= 90
                      ? order.description.substr(0, 90) + "..."
                      : order.description + "..."}
                  </p>
                </div>
                <p>${order.price}</p>
              </div>
             
            </div>
          ))}
         
   
    </>
  );
};
