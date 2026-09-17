import React from "react";
import BrandBox from "./BrandBox";
import { brandContent } from "../../mock/brand";
import Slider from "react-slick";
import SectionTitle from "../UI/SectionTitle";

const Brands = () => {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-1 my-4 md:my-8 text-center">
      <SectionTitle title={"popularBrands"} />
      <Slider {...settings}>
        {brandContent.map((brandItem) => {
          return (
            <BrandBox
              key={brandItem.id}
              brandName={brandItem.name}
              imageSrc={brandItem.imgSrc}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Brands;
