import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import.meta.env.BASE_URL + "icon-menu.svg"
import.meta.env.BASE_URL + "icon-cart.svg"
import UserPf from "./Users"

function Header({pName,currentUser}) {
  function toggleMenu() {
    const element = document.querySelector(".hamdrop");
    element.classList.toggle("open");
    
  }
  return (
    <>
      <div className="header">
        <div className="header-l">
          <div className="hamdrop">
            <img
              src={hamburger}
              alt=""
              className="hamenu"
              onClick={() => {
                toggleMenu();
              }}
            />
            <div className="pop">
            <Link to={""} ><button className="pop-btn">Collections</button></Link> 
            <Link to={""} ><button className="pop-btn">Men</button></Link> 
            <Link to={""} ><button className="pop-btn">Women</button></Link> 
            <Link to={""} ><button className="pop-btn">About</button></Link> 
            <Link to={""} ><button className="pop-btn">Contact</button></Link> 

            </div>
          </div>
          <Link to={currentUser?.id ? `/user/${currentUser.id}` : "/user/1"} className="link-to-main-page">
            <h1 className="product-name">{pName ? pName : "no products"}</h1>
          </Link>
          <div className="buttons-desk">
            <Link to={""} ><button className="pop-btn-desk">Collections</button></Link> 
            <Link to={""} ><button className="pop-btn-desk">Men</button></Link> 
            <Link to={""} ><button className="pop-btn-desk">Women</button></Link> 
            <Link to={""} ><button className="pop-btn-desk">About</button></Link> 
            <Link to={""} ><button className="pop-btn-desk">Contact</button></Link> 
          </div>
        </div>
        <div className="header-r">
          <img src={cart} alt="" className="cart" />
          <img src={currentUser?.profilePic} alt={currentUser?.name[0]} className="pfp"/>
        </div>
      </div>
      
    </>
  );
}
export default Header;
