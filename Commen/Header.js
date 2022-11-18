import React, { useEffect, useState } from "react";
import { BsBell, BsChatDots } from "react-icons/bs";
import { BiSave } from "react-icons/bi";
import styles from "../styles/Header.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { card } from "../redux/Actions/action";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [query, setquery] = useState();
  const result = useSelector((state) => state.reducer);
  const data = result.data.data;

  const dispetch = useDispatch();
  const router=useRouter()

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      dispetch(card(query))
    }
  }
  const hendelsumbit = (e) => {
    e.preventDefault();
    dispetch(card(query));
    setquery('')
  };
 
  useEffect(() => {
    dispetch(card());
  }, [query]);
  return (
    <div id={styles.headers}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>
            
            <h1 style={{textDecoration: 'none',
  listStyle: 'none'}}> freely</h1>
            
          </div>
          <div className={styles.search}>
            <div className="p-1 bg-light rounded rounded-pill shadow-sm ">
              <div className="input-group">
              

                <div className="input-group-prepend" >
                  <button
                    id="button-addon2"
                  onClick={hendelsumbit}
                    className="btn btn-link text-muted"
                    
                  >
                    <i>
                      <AiOutlineSearch />
                    </i>
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="search"
                  aria-describedby="button-addon2"
                  className="form-control border-0 bg-light"
                  required={true}
                  pattern="[a-z0-9._%+-]+[a-z]{2,}$"
                  value={query}
                  onChange={(e) => setquery(e.target.value.trim())}
                  id={styles.formControl}
                  onKeyPress={handleKeyPress}
                  autoComplete='off'
              
                  
                />
              </div>
            </div>
          </div>
          <div className={styles.icons}>
            <Link href='/Myaccount'>
            <i>
              <BiSave />
            </i>
            </Link>
            <i>
              <BsBell />
            </i>
            <i>
              <BsChatDots />
            </i>
            {
              data ?. results?.slice(0,1).map((item,i)=>{
                return(
                  <img
                  src={item.user.profile_image.small} key={i}
                  alt=""
                  style={{ width: "35px", height: "35px", borderRadius: "100%" }}
                />
                )
              })
            }
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
