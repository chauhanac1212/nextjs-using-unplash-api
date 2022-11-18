import React from 'react'
import FeaturedCreatorsCards from '../Commen/FeaturedCreatorsCards'
import PopularCards from '../Commen/PopularCards'
import styles from '../styles/PopularCard.module.css'
import {RiRefreshLine} from 'react-icons/ri'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'



const FreelyHome = () => {
  return (
    <div id={styles.FreelyHome} >
    <div className='container'>
        <div className={styles.FreelyHome1}>
                <div className={styles.hearding}>
                <h1>Popular</h1>
                <h1>Latest</h1>
                </div>
                
                <div className={styles.FreelyHome2}>
                    <h6>Featured creators</h6>
                    <i><RiRefreshLine/></i>
                        <i><AiOutlineLeft/></i>
                        <i><AiOutlineRight/></i>
                </div>
        </div>
        <div className="row">
            <div className="col-lg-8">
                <PopularCards/>
            </div>
            <div className="col-lg-4">
                <FeaturedCreatorsCards/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default FreelyHome