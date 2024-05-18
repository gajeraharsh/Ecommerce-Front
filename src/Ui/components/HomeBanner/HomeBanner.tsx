import Image from "next/image";
import React from "react";

function HomeBanner() {
  return (
    <div className="w-full">
      <div className="w-full max-h-[700px] object-cover" 
      style={{
        width:"100%",
        height:"700px"
      }}>
      <img
        src={
          "https://motion-theme-adventure.myshopify.com/cdn/shop/files/david-marcu-114194_1.jpg?v=1613161313&width=1920"
        }
        alt="banner image"
        style={{
            width:"100%",
            height:"100%"
        }}        
      />
      </div>
    </div>
  );
}

export default HomeBanner;
