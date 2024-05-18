import Button from "@/Ui/Core/Button/Button";
import CartQuanity from "@/Ui/Core/CartQuanity/CartQuanity";
import ProductSection from "@/Ui/components/ProductSection/ProductSection";
import React from "react";

function ProductPage() {
  return (
    <div className="w-full flex flex-col items-center pt-14 pb-14">
      <div className="w-[100%] lg:w-[80%] flex  flex-col lg:flex-row items-center gap-28">
        <div className="h-[700px] w-[90%] lg:w-[50%]">
          <img
            src="https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-stormi-latte-1_90c6b88a-8f6b-4677-a3bb-a1936621a25a.jpg?v=1637107747&width=823"
            alt="product page image"
            className="w-full h-full"
          />
        </div>
        <div className="pt-3  w-[100%] lg:w-[50%]">
          <h2 className="text-3xl ">Effortl esstest</h2>

          <div className="pt-5 ">
            <p className="text-lg">Rs. 25.00</p>
          </div>

          <div className="pt-10">
            <CartQuanity />
            <div className="pt-5">
              <Button type="outline">Add to cart</Button>
              <Button type="fill">Buy it now</Button>
            </div>
          </div>

          <div className="pt-10">
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              eos delectus repellendus! Quasi, nesciunt vel sunt, voluptas, ex
              quod ullam consectetur delectus veniam iusto architecto voluptatum
              perferendis nam! Quisquam, dignissimos, officia commodi deleniti
              perspiciatis facilis nostrum quo esse mollitia similique quod
              ipsum sapiente saepe tenetur amet sunt odio error! Sequi, eos
              reiciendis? Praesentium non sunt corrupti, nemo aspernatur eveniet
              tempora ducimus, placeat ea magni in est vero porro magnam a
              voluptatem officiis aperiam. Numquam consequuntur harum quae dicta
              earum quam voluptates, quia fugiat dolor quis enim nemo natus odio
              molestias atque provident repellendus ea. Ad tempora maiores illum
              non natus!
            </p>
          </div>
        </div>
      </div>

      <ProductSection 
        sectionTitle="Related products"
      />
    </div>
  );
}

export default ProductPage;
