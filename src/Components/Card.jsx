import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

function Card({ forEachData }) {
    const { FirstSlice } = useSelector((state) => state) // storing the till now stored values
    const dispatch = useDispatch();
    // adding data to the array of cart objects
    const AddToCart = () => {
        dispatch(add(forEachData))
        toast.success("Item Added To Cart Successfully");
    }
    //removing data to the array of cart objects
    const RemoveFromCart = () => {
        dispatch(remove(forEachData.id))
        toast.error("Item Removed From Cart Successfully");
    }

    return (
        <div className="flex flex-col items-center justify-between bg-white hover:scale-110 transition-all duration-180  ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] ">
            <p className="text-gray-700 font-semibold text-lg text-left truncate mt-1 w-40">{forEachData.title}</p>

            <p className="w-40 text-gray-400 font-normal text-[11px] text-left">{forEachData.description.split(" ").slice(0, 10).join(" ") + "..."}</p>

            <div className="h-[180px]"><img src={forEachData.image} alt="" className="h-full w-full" /></div>
            <div className="flex justify-between items-center w-full mt-5">
                <p className="text-green-600 font-semibold">${forEachData.price}</p>
                <button className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
                >
                    {
                        // if the element is not present in the store till now
                        !FirstSlice.some((one_instance) => one_instance.id == forEachData.id) ?
                            (<p onClick={AddToCart}>Add To Cart </p>)
                            : (<p onClick={RemoveFromCart}>Remove Item  </p>)
                    }
                </button>
            </div>

        </div>
    )
}
export default Card;