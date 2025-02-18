import React, { useContext } from 'react'
import heroimg from './images/hero.jpg'
import Product from './Product'
import Data from './Data'
import Navbar from './Navbar'
import Footer from './Footer'
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { Appcontext } from '../context/Productcontext'
import { SiZara } from "react-icons/si";
import { SiSamsung } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { SiCocacola } from "react-icons/si";


const Home = () => {
  const {getsingledata}=useContext(Appcontext)
  return (
    <>
     <Navbar/>
     <section className='home parent'>
       <section className="hero">
         <div className="hero-content">
          <span>Welcome To,</span>
          <h1>Dev Shops</h1>
          <p>At DEVSHOP, we strive to revolutionize your shopping experience by offering a vast array of products conveniently accessible from the comfort of your home.</p>
          <NavLink to="/products"><button>Shop Now</button></NavLink>
         </div>
         <img src={heroimg}/>
       </section>
       {/* explore sale */}
       <section className="explore">
        <div className="explore-title">
        <p>Check Now!</p>
        <h3>Summer sales are here</h3>
        </div>
       <div className="sale">
         {Data.filter((item)=> item.id<4).map((item)=>{
             return <NavLink to="/singleprod" key={item.productName}><Product name={item.productName} price={item.price} img={item.image} id={item.id}/></NavLink>
         })}
       </div>
       </section>
       {/* features */}
       <section className="features-container">
        <div className="features">
        <div className="feature f1">
          <TbTruckDelivery className='icon' size="2rem"/>
          <p>superfast and free delivery</p>
         </div>
         <div className="feature f2">
          <MdOutlineSecurity className='icon' size="2rem"/>
          <p>No-contact shipping</p>
         </div>
         <div className="feature f3">
          <GiTakeMyMoney className='icon' size="2rem"/>
          <p>Money back guarenty</p>
         </div>
         <div className="feature f4">
          <MdSystemSecurityUpdateGood className='icon' size="1.5rem"/>
          <p>supersequre payment system</p>
         </div>
        </div>
       </section>
       {/* companies */}
       <section className="trust">
         <b>Trusted by 1000+ companies</b>
         <div className="companies">
          <SiZara className='icon' color='black'/>
          <SiSamsung className='icon' color='black'/>
          <FaPlaystation className='icon' color='black'/>
          <SiCocacola className='icon' color='black'/>
         </div>
       </section>
    </section>
     <Footer/>
    </>
  )
}

export default Home