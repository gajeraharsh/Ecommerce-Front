import Image from "next/image";
import { Inter } from "next/font/google";
import HomeBanner from "@/Ui/components/HomeBanner/HomeBanner";
import ProductSection from "@/Ui/components/ProductSection/ProductSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full">
      <HomeBanner />
      <ProductSection  sectionTitle={"Featured Products"} />
      <ProductSection  sectionTitle={"Tranding Products"} />
    </main>
  );
}
