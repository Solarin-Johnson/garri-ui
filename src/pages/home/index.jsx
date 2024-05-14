import React, { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import "./home.scss";
import bgImage from "../../images/bg-full.png";
import bgImageDraw from "../../images/bg-1.png";
import image1 from "../../images/garri-vector.png";
import image2 from "../../images/garri-milk-groundnut-2.png";
import image3 from "../../images/Garri-legacy-2.png";
import imageCard1 from "../../images/garri-honey.webp";
import imageCard2 from "../../images/garri-bowl.webp";

export default function Home({ pageIndex, currentIndex }) {
  const parallax = useRef(null);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(isMobileDevice());

  useEffect(() => {
    const handleResize = () => {
      parallax && parallax.current.scrollTo(index);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [index, isMobile]);

  useEffect(() => {
    parallax && parallax.current.scrollTo(index);
  }, [index, isMobile, currentIndex]);

  useEffect(() => {
    setIndex(pageIndex);
  }, [pageIndex, isMobile]);
  console.log(index);

  const handleClick = (i) => {
    parallax && currentIndex(i);
  };

  function isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }

  const speed = (x) => {
    return x;
  };

  return (
    <div className="home-container" id={isMobile ? "mobile" : "pc"}>
      <Parallax
        ref={parallax}
        pages={4}
        style={{
          top: "0",
          left: "0",
          width: "100%",
          overflow: isMobile ? "hidden" : "auto",
          animation: "zoom 2s",
          animationTimingFunction: "cube-bezier(0.645, 0.045, 0.355, 1)",
        }}
      >
        <ParallaxLayer
          offset={1}
          speed={speed(1)}
          factor={1.3}
          style={{ backgroundColor: "var(--color-1)" }}
        />
        <ParallaxLayer
          offset={2}
          speed={speed(1)}
          factor={4}
          style={{ backgroundColor: "var(--color-2)" }}
        />

        {/* Second Page Text */}
        <ParallaxLayer
          offset={1}
          speed={speed(-0.02)}
          className="home-title home-title-2"
        >
          <div>Dive into Tradition with Garri and Groundnut!</div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={speed(-0.1)}
          factor={4}
          style={{
            backgroundImage: !isMobile && `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
          }}
        />

        {/* First Page */}
        <ParallaxLayer offset={0} speed={speed(0.15)} className="home-image">
          <img src={image1} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={speed(-0.02)} className="home-title">
          <div>Discover the Flavourful World of Garri!</div>
        </ParallaxLayer>

        {/* Second Page */}
        <ParallaxLayer
          offset={1}
          speed={speed(0.15)}
          className="home-image home-image-2"
        >
          <img src={image2} alt="" loading="lazy" />
        </ParallaxLayer>

        {/* Third page */}
        <ParallaxLayer
          offset={2}
          speed={speed(0.2)}
          className="home-title home-title-3"
        >
          <div>Taste the Tradition Today!</div>
        </ParallaxLayer>

        {/* Bg Slow */}
        <ParallaxLayer
          offset={0}
          speed={speed(0.6)}
          factor={4}
          style={{
            backgroundImage: !isMobile && `url(${bgImageDraw})`,
            backgroundSize: "cover",
            backgroundPosition: !isMobile ? "40%" : "center",
            opacity: 0.85,
          }}
        />

        {/* Third page */}
        <ParallaxLayer
          offset={2}
          speed={speed(0.15)}
          className="home-image home-image-2"
        >
          <img src={image3} alt="" />
        </ParallaxLayer>

        {/* Last Page */}
        <ParallaxLayer offset={3} speed={speed(0.15)} className="footer-image">
          <span>
            <img src={imageCard1} alt="" />
          </span>
          <span>
            <img src={imageCard2} alt="" />
          </span>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={speed(0)} className="footer-title">
          <div>Try Garri now!</div>
        </ParallaxLayer>

        {/* Buttons */}
        <ParallaxLayer
          style={{ display: "flex" }}
          onClick={() => {
            setIndex(1);
            handleClick(1);
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={1}
          style={{ display: "flex" }}
          onClick={() => {
            setIndex(2);
            handleClick(2);
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          style={{ display: "flex" }}
          onClick={() => {
            setIndex(3);
            handleClick(3);
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={3}
          style={{ display: "flex" }}
          onClick={() => {
            setIndex(0);
            handleClick(0);
          }}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
}
