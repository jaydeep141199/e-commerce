import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  DecrementQuentity,
  IncrementQuentity,
  cleanCart,
  removeFromCart,
} from "../redux/CartSlice";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const quentityDecrese = (item) => {
    dispatch(DecrementQuentity(item));
  };
  const quentityIncrese = (item) => {
    dispatch(IncrementQuentity(item));
  };
  const quentityRemove = (item) => {
    dispatch(removeFromCart(item));
  };
  const orders=[...cart];
  const total =Number((cart
    .map((item) => item.price * item.quantity)
    .reduce((cur, pre) => cur + pre, 0)).toFixed(2));
// console.log("total",typeof total);
const charges = Number((total * 0.15).toFixed(2))
  // console.log("charges", typeof charges);
  
  const discount = total > 100 ? 10.0 : 0.0;
  // console.log("discount",discount); // Apply discount of 10 rupees if total is above 100
  const grandTotal = ((total + charges) -discount).toFixed(2);
  // console.log(grandTotal);
  
  const  placeorder=(item)=>{
    toast.success('order Placed !!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      setTimeout(()=>{Navigate("/order",{
        state:{
          orders:orders,
          totalPrice:grandTotal,
        }
      })},3000)
      setTimeout(() => {
        dispatch(cleanCart());
      }, 4000);

  }
const Navigate=useNavigate()
  return (
    <>
      <Header />{" "}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <section className="grid grid-cols-3 pt-3">
        <div className="col-span-2 px-5 bg-gray-300">
          <div className="grid grid-cols-3 gap-4 text-center p-2 ">
            {cart.map((item) => (
              <div
                key={item.id}
                className="rounded overflow-hidden shadow-lg  bg-white px-5"
              >
                <img
                  className="h-[100px]  w-[100px] pt-2  mx-4 transition duration-700 ease-in-out hover:scale-75"
                  src={item.image}
                  alt={item.title}
                />
                <div className="py-2">
                  <div className="font-bold text-xl">
                    {item.title.length > 20
                      ? item.title.substr(0, 20) + "..."
                      : item.title}
                  </div>
                </div>
                <div className="font-medium  h-[135px]">
                  {item.description.length > 75
                    ? item.description.substr(0, 75) + "..."
                    : item.description}
                </div>
                <div className=" mt-2">
                  <label htmlFor="" className="font-bold">
                    PRICE :
                  </label>
                  <span className="bg-gray-200 font-bold rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                    &#8377;{item.price}
                  </span>
                </div>
                <div className="btn  py-4">
                  <button
                    className="bg-primary p-2 font-bold cursor-pointer"
                    onClick={() => quentityDecrese(item)}
                  >
                    -
                  </button>
                  <button className="px-2 font-bold">{item.quantity}</button>
                  <button
                    className="bg-primary  p-2 font-bold cursor-pointer"
                    onClick={() => quentityIncrese(item)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="bg-yellow-500  px-4  mb-3 font-semibold cursor-pointer"
                  onClick={() => quentityRemove(item)}
                >
                  Remove To Cart
                </button>
                <p className="font-semi">{item.price * item.quantity}</p>
              </div>
            ))}
          </div>
        </div>
        {total === "0.00" ? (
          <p className="font-bold text-2xl">your cart is empty</p>
        ) : (
          <div className="rightside mx-3">
            <div className="flex">
              <FaMapMarkerAlt className="text-gray-500" />
              <div>
                <p> Select your location</p>
                <p>Please select the location</p>
                <button className="bg-yellow-400 px-2 my-2 font-semibold text-white">
                  select location
                </button>
              </div>
            </div>
            <div className="flex py-2">
              <FaMapMarkerAlt className="text-gray-500" />
              <div>
                <p> choose your save location</p>

                <button className="bg-yellow-400 px-2  my-2  font-semibold text-white">
                  Choose location
                </button>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between  mt-2 ">
                <p>Total Price:</p>
                <p>{total}</p>
              </div>
              <div className="flex justify-between">
                <p>Discount:</p>
                <p>{discount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Charges:</p>
                <p>{charges}</p>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-xl">
                <p>Grand total:</p>
                <p>{grandTotal}</p>
              </div>
            </div>
            <button
              onClick={placeorder}
              className="px-2 bg-green-600 text-white py-2 my-2"
            >
              Place order
            </button>
          </div>
        )}
      </section>
      {/* <section className="grid grid-cols-3 pt-5">
        <div className="col-span-2 px-5">
          {cart.map((item, index) => (
            <div>
                image
              <div>
<img src={item.image}></img>
              </div>
              description
              <div>

              </div>
              buttons
              <div>

              </div>
            </div>
          ))}
        </div>
        <div className="">hardik</div>
      </section> */}
    </>
  );
};

export default Cart;
