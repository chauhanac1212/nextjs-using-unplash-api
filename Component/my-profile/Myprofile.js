import React, { useEffect } from "react";
import { SlDiamond } from "react-icons/sl";
import { TbFileUpload } from "react-icons/tb";
import { BsThreeDotsVertical, BsBookmark } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {RiImageLine} from 'react-icons/ri'
import {BsCameraVideo} from 'react-icons/bs'
import {BiLockOpenAlt} from 'react-icons/bi'
import {MdFilter} from 'react-icons/md'
import Sidebar from '../../Commen/Sidebar'
import styles from "../../styles/PopularCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {SiNano} from 'react-icons/si'
import moment from "moment";
import { card } from '../../redux/Actions/action'
const Myprofile = () => {
    const result = useSelector((state) => state.reducer);
  const data = result.data.data;
  const dispetch = useDispatch();
  useEffect(() => {
    dispetch(card());
  }, []);
  return (
    <div className='container'>
        <div className="row">
            <div className=" col-lg-3 col-md-4 " style={{background:'white',marginRight:"10px"}}>
                <Sidebar/>
            </div>
            <div className="col-lg-8 col-md-7" style={{backgroundColor:"white"}}>
            
<div className='myprofile'>
    <h1>My profile</h1>
</div>
        <div className='myprofile_img'>
            <img src='./boy.jpg' alt="" />
        </div>
        <div className='myprofile_name'>
            <div>
                <img src='./boy.jpg' alt="" style={{width:"70px",height:'70px',borderRadius:"100%"}} />
                <div>
                <h2>Nathasha fox</h2>
                </div>
                <p>abhnxjsxkdowkdodoop</p>
                <div className='myprofile_flower'>
                    <span>
                        <h5>33</h5>
                        post
                    </span>
                    <span>
                        <h5>432</h5>
                        Followers
                    </span>
                    <span>
                        <h5>432</h5>
                        Following
                    </span>
                </div>
                <h6>Be cool always</h6>
            </div>
            <h2>Edit</h2>
        </div>
        <div className='myprofile_icons'>
            <div>
                <i><AiOutlineMenuUnfold/></i>
                <i><RiImageLine/></i>
                <i><BsCameraVideo/></i>
                <i><BiLockOpenAlt/></i>
                <i><MdFilter/></i>
            </div>
        </div>
        {data?.results?.map((item, i) => {
        return (
          <div key={i} className={styles.PopularCardsmain} style={{background:"white"}}>
            <div className={styles.PopularCardsmain1} >
              <div className={styles.PopularCards}  >
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
                    <h4 style={{ color:'black'}}>{item.user.name}</h4>
                    <p style={{ color:'black'}}>{moment(item.updated_at).format("DD/MM/YYYY")} </p>
                  </div>
                  <i className={styles.topIcons} >
                    <SlDiamond />
                  </i>
                </div>
                <div className={styles.topIcons1} >
                    <i  style={{ color:'black'}}><SiNano/></i>
                  <i style={{ color:'black'}}>
                    <TbFileUpload />
                  </i>
                  <i style={{ color:'black'}}>
                    <BsThreeDotsVertical />
                  </i>
                </div>
              </div>
              <div className={styles.imgs1}>
                <img className={styles.imgs} src={item.urls.small} alt="" />
              </div>

              <div className={styles.icons}>
                <div className={styles.icons1}>
                  <i className={styles.icons2} style={{ color:'black'}}>
                    <AiOutlineHeart />
                    <p style={{ color:'black'}}>{item.likes}</p>
                  </i>
                  <i className={styles.icons2} style={{ color:'black'}}>
                    <AiOutlineMessage />
                    <p style={{ color:'black'}}>338</p>
                  </i>
                  <i className={styles.icons2}>
                    <span style={{ color:'black'}}> $</span>
                    <p style={{ color:'black'}}>23.00tips</p>
                  </i>
                </div>
                <i style={{ color:'black'}}>
                  <BsBookmark />
                </i>
              </div>
              <div className={styles.PopularCardsBottom}>
                <div className="d-flex align-items-center">
                  <h5 style={{ color:'black'}}>{item.user.name}</h5>
                  <h6
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      color:'black'
                    }}
                  >
                    {item.description}
                  </h6>
                </div>
                <p style={{ color:'black'}}>view all {item.height} comments</p>
                <h4 style={{ color:'black'}}>Add a comment</h4>
              </div>
            </div>
          </div>
        );
      })}
        </div>
        </div>
        
<style jsx>
    {`
    .myprofile h1{
        font-size: 25px;
        font-weight: 900;
        margin-top: 10px;
    }
    .myprofile_img{
        overflow: hidden;
     
        height: 40vh;
    }
    .myprofile_img img{
        width: 100%;
      
        object-fit: container;
       
    }
    .myprofile_name{
        display:flex;
        justify-content: space-between;
    position: relative;
    margin-left: 15px;
    margin-right: 15px;
    }
    .myprofile_name img{
        position: absolute;
        top: -30px;
    }
    .myprofile_name h2{
        font-size:20px;
        margin-top:50px
        
    }
    .myprofile_flower{
        display:flex;
        justify-content:space-between
    }
    .myprofile_flower span{
        display:flex;
     
       

    }
    .myprofile_flower span h6{
        font-weight: 700;
        font-size: 14px;
        text-align: center;
    }
    .myprofile_flower span:nth-child(2){
        margin-right:8px;
        margin-left:10px;
        padding-right:5px
    }
    .myprofile_icons{
width: auto;
height: 40px;
background: rgba(241, 242, 246, 1) 0% 0% no-repeat padding-box;
opacity: 1;
// padding:8px;

    }
    .myprofile_icons div{
        display:flex;
        justify-content: space-around;
        align-items: center;
        // align-content:center
        font-size: 23px;
        // padding:0px auto;
    }

    `}
</style>
    </div>

  )
}

export default Myprofile