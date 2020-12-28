import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container"></div>
      <img
        className="home__image"
        src="https://molzi.com/wp-content/uploads/2020/09/Primeday-Bannerx2.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="34567890"
          title="The Lean Starup"
          price={29.99}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          }
          rating={5}
        />
        <Product
          id="98765432"
          title="Montech AIR X White ATX Mid-Tower Case, Super High Airflow, Pre-Installed 3 Fans, Dual 200mm ARGB Fans, 120mm ARGB Fan, ARGB Controller, Motherboard Sync, Pull Out Tempered Glass"
          price={79.9}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81E%2B5wMsSTL._AC_SL1500_.jpg"
          }
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="12345678"
          title="LED Flood Light 100W Equivalent RGB Color Changing, Outdoor Smart Floodlights RGBW 2700K Warm White & 16 Million Colors, 20 Modes, Grouping, Timing, IP66 Waterproof (2 Pack)"
          price={38.59}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71eR%2Br23SVL._AC_SL1500_.jpg"
          }
          rating={5}
        />
        <Product
          id="90237428"
          title="Crucial Ballistix RGB 3600 MHz DDR4 DRAM Desktop Gaming Memory Kit 16GB (8GBx2) CL16 BL2K8G36C16U4BL (Black)"
          price={64.99}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61qHbO1rbdL._AC_SL1280_.jpg"
          }
          rating={4}
        />
        <Product
          id="49543232"
          title="Magnetic 11’’ x 14’’ Small Dry Erase Board. Includes 6 Magnetic Dry Erase Markers, Assorted Colors. Great Whiteboard for Fridge, Locker, and More!"
          price={14.95}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71AnZm1ZD0L._AC_SL1500_.jpg"
          }
          rating={3}
        />
      </div>

      <div className="home__row">
        <Product
          id="84224721"
          title="Flyte Lyfe Magnetic Floating Levitating Plant Pot for Plants with Oak wood base (12-Sided Geodesic Silicon Planter"
          price={285.99}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/31cGEqp6axL._AC_.jpg"
          }
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
