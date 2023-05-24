import Layout from "@/components/Layout/Layout";
import Slider from "@/components/Home/Slider";
import Stats from "@/components/Home/Stats";
import ProductItem from "@/components/Home/ProductItem";

import { getData } from "@/utils/fetchData";
import { useState } from "react";
import PromoSection from "@/components/Home/PromoSection";
import Categories from "@/components/Home/Categories";
import Features from "@/components/Home/Features";
import NewsLetter from "@/components/Home/NewsLetter";

export default function HomePage(props) {
  const [products, setProducts] = useState(props.productProps);
  const [sliders, setSliders] = useState(props.sliderProps);

  return (
    <>
      <Layout title={"Home"}>
        <Slider key={sliders._id} sliders={sliders} />
        <Stats />
        <ProductItem key={products._id} products={products} />
        <PromoSection />
        <Categories />
        <Features />
        <NewsLetter />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const productRes = await getData("product");
  const sliderRes = await getData("slider");

  return {
    props: {
      productProps: productRes.products,
      resultProps: productRes.result,
      sliderProps: sliderRes.sliders,
      resultSliderProps: sliderRes.result,
    },
  };
}
