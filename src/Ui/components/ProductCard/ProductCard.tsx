import React from "react";

function ProductCard() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-[350px] h-[400px]">
        <img
          src="https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-stormi-latte-1_90c6b88a-8f6b-4677-a3bb-a1936621a25a.jpg?v=1637107747&width=823"
          alt="product Cart Image"
          className="w-full h-full"
        />
      </div>
      <div className="p-1">
        <div className="mt-2">
          <h4 className="text-lg">Tablate 260</h4>
        </div>
        <div>
          <p className="text-sm">RS.25.00</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
