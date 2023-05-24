import Layout from "@/components/Layout/Layout";
import { getData } from "@/utils/fetchData";

const ProductDetail = () => {
  return <Layout title="Product Details"></Layout>;
};

export async function getServerSideProps({ params: { slug } }) {
  console.log(slug);
  // const productRes = await getData("product");

  return {
    props: {
      // productProps: productRes.products,
      // resultProps: productRes.result,
    },
  };
}

export default ProductDetail;
