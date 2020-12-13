import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="cont">
        <img
          className="img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_3000x1200_without._CB415288872_.jpg"
          alt=""
        />
        <div className="row">
          <Product
            id={7}
            title="Sonata Ocean Series Analog NM7989PP01 / NL7989PP01"
            price={1299}
            image="https://m.media-amazon.com/images/I/91H9TJ-nTsL._AC_UL480_QL65_.jpg"
            rating={4}
          />
          <Product
            id={2}
            title="Lenovo IdeaPad Flex 5 AMD Ryzen 5 4500U 14 inch Full HD IPS 2-in-1 Convertible Laptop (8GB/512GB SSD/Windows 10/MS Office 2019…"
            price={1}
            image="https://images-eu.ssl-images-amazon.com/images/I/71sVY0DNp0L._AC_UL200_SR200,200_.jpg"
            rating={5}
          />
        </div>
        <div className="row">
          <Product
            id={1}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)"
            price={86500}
            image="https://images-eu.ssl-images-amazon.com/images/I/811aBwuSuIL._AC_UL200_SR200,200_.jpg"
            rating={4}
          />
          <Product
            id={4}
            title="Sparx Men's Sports Running Shoes"
            price={1399}
            image="https://m.media-amazon.com/images/I/81RP-fppqqL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id={6}
            title="Krishna Emporia Men's Regular Fit Casual Shirt"
            price={899}
            image="https://m.media-amazon.com/images/I/612GWJQv1lL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="row">
          <Product
            id={5}
            title="SKMEI Analogue - Digital Black Dial Men's & Boys' Watch"
            price={1050}
            image="https://m.media-amazon.com/images/I/61bTR1wJ9dL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
