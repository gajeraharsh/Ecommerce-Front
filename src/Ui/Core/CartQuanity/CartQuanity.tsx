import React from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

function CartQuanity(props:any) {

    const {
        value,
        onChange
    } = props;

  return (
    <div className="flex border border-slate-500 w-fit">
      <div className="p-3 cursor-pointer">
        <LuMinus size={"24px"} />
      </div>
      <input type="number" className="cart-quanity-input w-[55px] text-center"  defaultValue={1}/>
      <div className="p-3 cursor-pointer" >
        <GoPlus size={"24px"} />
      </div>
    </div>
  );
} 

export default CartQuanity;
