import React, { ReactElement } from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductSection(props: any): ReactElement {
  const { sectionTitle } = props;

  return (
    <div className="w-full flex justify-center pt-14">
      <div className="lg:w-[80%] sm:w-full md:w-full flex flex-col gap-10">
        <h1 className="text-3xl">{sectionTitle}</h1>
        <div className="w-full flex gap-5 justify-center flex-wrap">
           <ProductCard />
           <ProductCard />
           <ProductCard />
           <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
