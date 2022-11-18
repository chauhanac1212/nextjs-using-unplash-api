import React from 'react'
import FeaturedCreatorsCards from '../Commen/FeaturedCreatorsCards'
import PopularCards from '../Commen/PopularCards'
import styles from '../styles/PopularCard.module.css'
import {RiRefreshLine} from 'react-icons/ri'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import { useRouter } from 'next/router'
import Link from 'next/link'



const FreelyHome = () => {
    const router = useRouter();
  return (
    <div id={styles.FreelyHome} >
    <div className='container'>
        <div className={styles.FreelyHome1}>
                <div className={styles.hearding}>
                    
              <Link href="/" style={{textDecoration:"none"}}>  <h1 style={{ color : router.route == "/" ? "#FFFFFF" : "#4E586E" }} >Popular</h1></Link>
              <Link href="/edjeidfol" style={{textDecoration:"none"}}>  <h1 style={{ color : router.route == "/wdkfkfk" ? "#FFFFFF" : "#4E586E" }} >Latest</h1></Link>
                {/* <h1>Latest</h1> */}
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