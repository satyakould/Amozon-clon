import { Slider } from "@material-ui/core";
import { Slideshow, SlideshowOutlined } from "@material-ui/icons";
import React from "react";
import "./Home.css";
import Product from "./Product";
import "react-slideshow-image/dist/styles.css";
import "react-slideshow-image/dist/styles.css";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="2332"
            title="New Apple iPhone 12 Mini (64GB) - Black"
            price={66990}
            img={
              "https://m.media-amazon.com/images/I/71uuDYxn3XL._AC_UY218_.jpg"
            }
            rating={4}
          />
          <Product
            id="2333"
            title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
            price={174707}
            img={
              "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY218_.jpg"
            }
            rating={5}
          />
          \{" "}
          <Product
            id="2333"
            title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Space Grey (Latest Model)"
            price={132990}
            img={
              "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg"
            }
            rating={5}
          />
          \{" "}
          <Product
            id="2333"
            title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Blue)"
            price={4999}
            img={
              "https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UL320_.jpg"
            }
            rating={5}
          />
          {}
        </div>
        <div className="home_row">
          <Product
            id="2335"
            title="Unisex-Adult Smash V2 L Perf Shoes Sneakers"
            price={2599}
            img={
              "https://m.media-amazon.com/images/I/614QhkmglaL._AC_UL320_.jpg"
            }
            rating={4}
          />
          <Product
            id="2332"
            title="React and React Native: A complete hands-on guide to modern web and mobile development with React.js, 3rd Edition"
            price={2279}
            img={
              "https://m.media-amazon.com/images/I/61acdiPRZQL._AC_UL320_.jpg"
            }
            rating={4}
          />
          <Product
            id="23002"
            title="Welrock M4 Bluetooth Smart Band OLED Touch Display Activity Tracker Fitness Band Waterproof & Sweatproof Long Battery Life Suitable for All Android & iOS Devices Code - M4 Band_49 (Black)"
            price={450}
            img={
              "https://m.media-amazon.com/images/I/51NGM6Yx2EL._AC_UY218_.jpg"
            }
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="22"
            title="Samsung 189 cm (75 inches) 4K Ultra HD Smart LED TV UA75TU8000KXXL (Black) (2020 Model)"
            price={196990}
            img={
              "https://m.media-amazon.com/images/I/917QAUQorDL._AC_UY218_.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
