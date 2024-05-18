import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [isDrawerOpen, setDraweropen] = useState(false);

  const handleDraweropen = () => setDraweropen(!isDrawerOpen);

  return (
    <>
      <div className="w-full  justify-center hidden lg:flex md:flex ">
        <div className="p-10 flex items-center">
          <div className="pr-5">
            <img src="https://theme-dawn-demo.myshopify.com/cdn/shop/files/Dawn_logo.png?v=1637111732&width=90" />
          </div>
          <div className="">
            <ul className="flex gap-5 ml-5">
              <li>Home</li>
              <li>Catalog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex lg:w-[700px] sm:w-[280px] md:w-[500px] justify-end items-center gap-3">
            <CiSearch size={"25px"} className="cursor-pointer" />
            <CiShoppingCart size={"25px"} />
            <CiUser size={"25px"} />
          </div>
        </div>
      </div>

      {/* drawer */}
      <div className={`w-full sticky top-0 bg-white visible sm:hidden`}>
        <div className="flex sm:hidden items-center justify-between">
          <div className="p-5">
            <RxHamburgerMenu
              size={"25px"}
              className={`${!isDrawerOpen ? "block" : "hidden"}`}
              onClick={handleDraweropen}
            />
            <IoMdClose
              size={"25px"}
              className={`${isDrawerOpen ? "block" : "hidden"}`}
              onClick={handleDraweropen}
            />
          </div>
          <div>
            <img src="https://theme-dawn-demo.myshopify.com/cdn/shop/files/Dawn_logo.png?v=1637111732&width=90" />
          </div>
          <div className="flex p-5 justify-end items-center gap-3">
            <CiSearch size={"25px"} className="cursor-pointer" />
            <CiShoppingCart size={"25px"} />
          </div>
        </div>

        <div
          className={`absolute top-19 w-[80%] h-screen bg-white pl-9 pt-5 transition ease-in-out delay-150 transform  ${
            isDrawerOpen ? "translate-x-0" : "translate-x-[-500px]"
          }`}
        >
          <div className="">
            <ul className="flex flex-col gap-3 text-xl ">
              <li>Home</li>
              <li>Catalog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
