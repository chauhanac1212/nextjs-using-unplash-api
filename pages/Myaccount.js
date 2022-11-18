import React from 'react'
import styles from '../styles/PopularCard.module.css'
import Sidebar from '../Commen/Sidebar'
import Myprofile from '../Component/my-profile/Myprofile'
import Header from '../Commen/Header'
import Link from 'next/link'
import { useRouter } from "next/router";

const Myaccount = () => {
  const router = useRouter();

  return (
    <>
     <Header />
    <div id={styles.FreelyHome} >
    <div className='container'>
        <div className={styles.FreelyHome1}>
                <div className={styles.hearding}>
                <Link href="/" style={{textDecoration:"none"}}>  <h1 style={{ color : router.route === "/" ? "#FFFFFF" : "#4E586E" }} >Home</h1></Link>
                <h1 style={{paddingRight:"5px"}}>/</h1>

              <Link href="/Myaccount" style={{textDecoration:"none"}}>  <h1 style={{ color : router.route === "/Myaccount" ? "#FFFFFF" : "#4E586E" }} >My Account</h1></Link>
                </div>
                
        </div>
        
    </div>
    <Myprofile/>
    </div>
    </>
  )
}

export default Myaccount