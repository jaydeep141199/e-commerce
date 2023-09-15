import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart as addToCartAction ,removeFromCart as removeCartAction} from "../redux/CartSlice";

const Body = () => {
  const [product, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart)
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addToCartAction(item));
  };
  const removeFromCart=(item)=>{
    dispatch(removeCartAction(item))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setTimeout(() => {
          setProductData(data);
          setIsLoading(false);
        }, 3000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div role="status" className="flex items-center justify-center p-8">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
       
        </div>
      ) : (
        <div className="text-center bg-gray-400">
          <div className="grid grid-cols-4 gap-4 p-5">
            {product.map((item) => (
              <div
                key={item.id}
                className="rounded overflow-hidden shadow-lg items-center bg-white p-5"
              >
                <img
                  className="h-[150px] py-[10px] w-full transition duration-700 ease-in-out hover:scale-125"
                  src={item.image}
                  alt={item.title}
                />
                <div className="py-4">
                  <div className="font-bold text-xl h-[35px]">
                    {item.title.length > 30
                      ? item.title.substr(0, 15) + "..."
                      : item.title}
                  </div>
                </div>
                <div className="font-medium h-[95px]">
                  {item.description.length > 60
                    ? item.description.substr(0, 60) + "..."
                    : item.description}
                </div>
                <div className="p-5">
                  <label htmlFor="" className="font-bold">
                    PRICE :
                  </label>
                  <span className="bg-gray-200 font-bold rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                    &#8377;{item.price}
                  </span>
                </div>
                {/* add to cart */}
                <div>
                  {cart.some((x) => x.id === item.id) ? (
                    <button
                      className="bg-yellow-500 px-10 py-2 my-2 outline-none border rounded-full font-bold cursor-pointer"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove From Cart
                    </button>
                  ) : (
                    <button
                      className="bg-yellow-500 px-10 py-2 my-2 outline-none border rounded-full font-bold cursor-pointer"
                      onClick={() => addToCart(item)}
                    >
                      Add To Cart
                    </button>
                  )}

                  <button className="bg-yellow-400 px-10 py-2 my-2 outline-none border rounded-full font-bold">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
