import React, { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import "./home.scss";
import bgImage from "../../images/bg-full.png";
import bgImageDraw from "../../images/bg-1.png";
import image1 from "../../images/garri-vector.png";
import image2 from "../../images/garri-milk-groundnut-2.png";
import image3 from "../../images/Garri-legacy-2.png";

export default function Home({ pageIndex }) {
  const parallax = useRef(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      parallax && parallax.current.scrollTo(index);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [index]);

  useEffect(() => {
    setIndex(pageIndex);
    parallax && parallax.current.scrollTo(pageIndex);
  }, [pageIndex]);

  return (
    <div className="home-container">
      <Parallax
        ref={parallax}
        pages={4}
        style={{ top: "0", left: "0", width: "100%" }}
      >
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={1.3}
          style={{ backgroundColor: "var(--color-1)" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{ backgroundColor: "var(--color-2)" }}
        />
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            opacity: 0.8,
          }}
        />

        {/* Home */}
        <ParallaxLayer offset={0} speed={0.15} className="home-image">
          <img src={image1} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.07} className="home-title">
          <div>Discover the Flavourful World of Garri!</div>
        </ParallaxLayer>

        {/* Slow Bg */}
        <ParallaxLayer
          offset={0}
          speed={0.4}
          factor={4}
          style={{
            backgroundImage: `url(${bgImageDraw})`,
            backgroundSize: "cover",
            backgroundPosition: "40%",
            opacity: 0.85,
          }}
        />
        {/* Second Page */}
        <ParallaxLayer
          offset={1}
          speed={-0.07}
          className="home-title home-title-2"
        >
          <div>Dive into Tradition with Garri and Groundnut!</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.15}
          className="home-image home-image-2"
        >
          <img src={image2} alt="" />
        </ParallaxLayer>

        {/* Third Page */}
        <ParallaxLayer
          offset={2}
          speed={-0.07}
          className="home-title home-title-3"
        >
          <div>Taste the Tradition Today!</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.15}
          className="home-image home-image-2"
        >
          <img src={image3} alt="" />
        </ParallaxLayer>

        {/* Buttons */}
        <ParallaxLayer
          style={{ display: "flex" }}
          onClick={() => {
            parallax.current.scrollTo(1);
            setIndex(1);
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={1}
          style={{ display: "flex" }}
          onClick={() => {
            parallax.current.scrollTo(2);
            setIndex(2);
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          style={{ display: "flex" }}
          onClick={() => {
            parallax.current.scrollTo(0);
            setIndex(0);
          }}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
}
