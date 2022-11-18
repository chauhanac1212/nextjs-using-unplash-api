import Slider from "react-slick";
import styles from "../styles/PopularCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { card } from "../redux/Actions/action";
import { useEffect, useState } from "react";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const FeaturedCreatorsCards = () => {
  const result=useSelector((state)=>state.reducer)
const data=result.data.data
  

  const dispetch=useDispatch()
  useEffect(()=>{
    dispetch(card())
  },[])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: function (currentSlide, nextSlide) {
      // console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      // console.log("after change", currentSlide);
    },
  };
  return (
    <div>
      <Slider {...settings}>
        { data?.results?.map((item, index) => {
          return (
            <div className={styles.Sliders} key={index}>
              <div className={styles.Sliderimg} key={index}>
                <img src={item.urls.regular
} />

              </div>
              <div className={styles.sliderstatusimg}>
                <img src={item.user.profile_image.small


} />
                <p>{item.user.first_name}</p>
              </div>
            </div>
          );
        })}
      </Slider>

      <style jsx>{`
      
      :global(.slick-dots li button:before) {
        font-size: 15px;
        width: 20px;
        height: 20px;
        content: '•';
        text-align: center;
        opacity: .7;
        color: #1BB1E6
    }
    :global(.slick-dots li button:before ){
      font-size: 15px;
      width: 20px;
      height: 20px;
      content: '•';
      text-align: center;
      opacity: .8;
      color: #C8CFE0;
    }
        
      `}</style>
    </div>
  );
};
export default FeaturedCreatorsCards;