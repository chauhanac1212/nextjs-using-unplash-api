import React, { useEffect } from "react";
import { SlDiamond } from "react-icons/sl";
import { TbFileUpload } from "react-icons/tb";
import { BsThreeDotsVertical, BsBookmark } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import styles from "../styles/PopularCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { card } from "../redux/Actions/action";
import moment from "moment";
const PopularCards = () => {
  const result = useSelector((state) => state.reducer);
  const data = result.data.data;
  const dispetch = useDispatch();
  useEffect(() => {
    dispetch(card());
  }, []);
  return (
    <>
      {data?.results?.map((item, i) => {
        return (
          <div key={i} className={styles.PopularCardsmain}>
            <div className={styles.PopularCardsmain1}>
              <div className={styles.PopularCards}>
                <div className="d-flex">
                  <img
                    src={item.user.profile_image.small}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "100%",
                    }}
                  />
                  <div className={styles.names}>
                    <h4>{item.user.name}</h4>
                    <p>{moment(item.updated_at).format("DD/MM/YYYY")} </p>
                  </div>
                  <i className={styles.topIcons}>
                    <SlDiamond />
                  </i>
                  <li>Follow</li>
                </div>
                <div className={styles.topIcons1}>
                  <i>
                    <TbFileUpload />
                  </i>
                  <i>
                    <BsThreeDotsVertical />
                  </i>
                </div>
              </div>
              <div className={styles.imgs1}>
                <img className={styles.imgs} src={item.urls.small} alt="" />
              </div>

              <div className={styles.icons}>
                <div className={styles.icons1}>
                  <i className={styles.icons2}>
                    <AiOutlineHeart />
                    <p>{item.likes}</p>
                  </i>
                  <i className={styles.icons2}>
                    <AiOutlineMessage />
                    <p>338</p>
                  </i>
                  <i className={styles.icons2}>
                    <span> $</span>
                    <p>23.00tips</p>
                  </i>
                </div>
                <i>
                  <BsBookmark />
                </i>
              </div>
              <div className={styles.PopularCardsBottom}>
                <div className="d-flex align-items-center">
                  <h5>{item.user.name}</h5>
                  <h6
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.description}
                  </h6>
                </div>
                <p>view all {item.height} comments</p>
                <h4>Add a comment</h4>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PopularCards;
