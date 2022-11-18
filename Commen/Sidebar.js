import Link from "next/link";
import {CgProfile} from 'react-icons/cg'
import {GoCreditCard} from 'react-icons/go'
import { BsWallet } from "react-icons/bs";
import {AiOutlineUsergroupAdd,AiOutlineHome,AiOutlineUnlock,AiOutlineMenuFold} from 'react-icons/ai'
import {BiLayer,BiLogOutCircle} from 'react-icons/bi'
import {MdOutlineReportProblem} from 'react-icons/md'
import {GrLanguage} from 'react-icons/gr'
import {FaQuestionCircle} from 'react-icons/fa'
const dashboardItems = [
  { name: "My profile", link: "My profile",icons:<CgProfile/> },
  { name: "Wallet", link: "Wallet", icons:<BsWallet/> },
  { name: "Debit/Credit Card", link: "Debit/Credit Card", icons:<GoCreditCard/> },
  { name: "Manage addresses", link: "Manage addresses",icons:<AiOutlineHome/> },
  { name: "Purchased Posts", link: "Purchased Posts",icons:<AiOutlineUnlock/> },
  { name: "Billing and Plans", link: "Billing and Plans",icons:<BiLayer/> },
  { name: "Refer you friends", link: "Refer you friends" ,icons:<AiOutlineUsergroupAdd/>},
  { name: "Report a problem", link: "Report a problem" ,icons:<MdOutlineReportProblem/>},
  { name: "Language", link: "Language",icons:<GrLanguage/> },
  { name: "FAQs", link: "FAQs" ,icons:<FaQuestionCircle/> },
  { name: "Logout", link: "logout",icons:<BiLogOutCircle/>  },
];

const Sidebar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md "
        style={{ backgroundColor: "white" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" id="togal"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <h1
            className="navbar-brand"
            style={{ fontSize: "20px", fontWeight: "900", }}
          >
            My account
          </h1>

          {dashboardItems.map((item, index) => {
            return (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" key={index}>
                <li className="nav-item active">
                  
                  <Link
                    className="nav-link active"
                    href={`/${item.link}`}
                    onClick={() => globalData.setCurrTab(item.name)}
                    style={{display:'flex',alignItems:'center'}}
                  >
                      <i style={{paddingRight:"4px"}}>{item.icons}</i>
                    {item.name}
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>
      </nav>
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <i>
          <AiOutlineMenuFold />
        </i>
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
        My account
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {dashboardItems.map((item, index) => {
            return (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" key={index}>
                <li className="nav-item active">
                <Link
                    className="nav-link active"
                    href={`/${item.link}`}
                    onClick={() => globalData.setCurrTab(item.name)}
                    style={{display:'flex',alignItems:'center'}}
                  >
                      <i style={{paddingRight:"4px"}}>{item.icons}</i>
                    {item.name}
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <style jsx>
        {`
          :global(.navbar-collapse) {
            display: flex;
            flex-direction: column;
          }
          :global(.offcanvas){
            width: 50px;
            margin-top: 180px;
          }
          :global(.offcanas-start){
            width: 150px;
          }
          :global(.show){
            width: 150px;
          }


          @media (max-width: 766px) {
            :global(.navbar-expand-md) {
              display: none;
            }
          }
          @media (max-width: 1800px) {
            .btn{
                visibility: hidden;
              }
          }
          
           @media (max-width: 800px) {
            .btn{
                visibility: visible;
              }
            }
          }
          //     @media (max-width:780px){
          //         :global(.navbar-toggler-icon){
          //         display:none
          //         }
          // }

        `}
      </style>
    </>
  );
};

export default Sidebar;
