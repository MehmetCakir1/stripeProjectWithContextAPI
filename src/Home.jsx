import React from "react";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import sublinks from "./helper/data";
import { DataContext } from "./context";
import { useState } from "react";
import Modal from "./components/Modal";
import SmallScreenModal from "./components/SmallScreenModal";

const Home = () => {

const [menu,setMenu]=useState(sublinks)
const [subMenu,setSubMenu]=useState([])
const [title,setTitle]=useState("")
const [isVisible,setIsVisible]=useState(false)
const [show,setShow]=useState(false)

// console.log(menu);

const showMenu = (e)=>{
  for(let i =0;i<menu.length;i++){
    if(menu[i].page==e.target.textContent.toLowerCase()){
      setSubMenu(menu[i].links)
      setTitle(e.target.textContent)
      setIsVisible(true)
    }
  }
  // console.log(e.target.textContent.toLowerCase())
}
// console.log(subMenu)
  return (
    <DataContext.Provider value={{menu,showMenu,subMenu,title,setIsVisible,show,setShow}}>
      <div className="container">
        <Navbar />
        <SmallScreenModal/>
        {
          isVisible && <Modal/>
        }
        <div className="mainDiv">
          <article>
            <h1>
              Payments <br/>infrastructure <br />
              for the internet
            </h1>
            <p>
              Millions of companies of all sizes—from startups to Fortune
              500s—use Stripe’s software and APIs to accept payments, send
              payouts, and manage their businesses online.
            </p>
            <button>Start Now</button>
          </article>
          <Payment />
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default Home;
