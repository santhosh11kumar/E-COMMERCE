import { useSelector } from "react-redux";
import CartCard from "../Components/CartCard";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Cart() {
    const { FirstSlice } = useSelector((state) => state);
    const [TotalAmount, setAmount] = useState(0);

    // function calculate() {
    //     FirstSlice.map((item) => {
    //         setAmount(TotalAmount += item.price)
    //     })
    // }
    useEffect(() => {
        // reduce is a js function which will give you last calculated answer  in call back which will
        // iterate over firstslice array for every index_val index it will do addtion and store in total

        setAmount(
            FirstSlice.reduce((total, index_val) => total + index_val.price, 0)
        );
    }, [FirstSlice]);

    return (
        <div className="mb-10">
            {
                // if the item already present then
                FirstSlice.length > 0 ? (
                    <div className="flex flex-row justify-center max-[1300px] mx-auto gap-x-5">
                        <div className="w-[60%] flex flex-col p-2">
                            {FirstSlice.map((Itr_Item, index) => (
                                <CartCard
                                    Item={Itr_Item}
                                    ItemIndex={index}
                                    key={Itr_Item.id}
                                ></CartCard>
                            ))}
                        </div>

                        <div className="w-[40%] mt-5 flex flex-col">
                            <div className="flex flex-col h-[100%] justify-between p-5 gap-5 my-14">
                                <div className="flex flex-col gap-5 ">
                                    <p className="font-semibold text-xl text-green-800 ">
                                        YOUR CART
                                    </p>
                                    <p className="font-semibold text-5xl text-green-700  -mt-5">
                                        SUMMARY
                                    </p>
                                    <p className="text-xl">
                                        <span className="text-gray-700 font-semibold text-xl">
                                            Total Items:{" "}
                                        </span>{" "}
                                        <span>{FirstSlice.length}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-xl font-bold">Total Amount: </span>
                                <span className="text-gray-700 font-semibold">
                                    ${TotalAmount}
                                </span>
                                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl mr-10">
                                    check out
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="min-h-[80vh] flex flex-col justify-center items-center">
                        <h1 className="text-gray-700 font-semibold text-xl mb-2">
                            No Items Found!
                        </h1>
                        <NavLink to="/">
                            <button className="uppercase bg-green-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider hover:bg-purple-50 duration-300 transition-all ease-in hover:text-green-600 border-2 border-green-600">
                                Shop Now
                            </button>
                        </NavLink>
                    </div>
                )
            }
        </div>
    );
}
export default Cart;
