import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";
const Home = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0] } />
      {console.log(bannerData)}
      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);
  //Todo lo que getServerSideProps retorna, se carga como un props al componente principal
  return {
    props: { products, bannerData }
  };
};

export default Home;
