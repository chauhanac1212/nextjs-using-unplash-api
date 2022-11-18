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
                <h1 className={router.pathname == "/" ? "white" : ""}><Link style={{color:'white',  textDecoration: 'none'}} href='/'>Home</Link></h1>
             
                <h1 style={{paddingRight:"5px"}}>/</h1>
                <h1 className={router.pathname == "/Myaccount" ? "active" : ""}><Link href='/Myaccount' style={{textDecoration:"none"}}>My Account</Link></h1>
                </div>
                
        </div>
        
    </div>
    <Myprofile/>
    </div>
    </>
  )
}

export default Myaccount