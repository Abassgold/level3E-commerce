import React from 'react'
import logoBottom from "../../assets/Images/logoBottom.png";
import Send from "../../assets/Images/Send.png";
import styles from "./Footer.module.css";
import qrCode from "../../assets/Images/qrcode.png";
import gogglePlay from "../../assets/Images/play.png";
import appStore from "../../assets/Images/appStore.png";
import { TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
        <div className='bg-black p-5'>
            <div className='row'>
                <div className="col-lg-3 col-md-6 col-sm-12 text-light">
                    <div>
                        <img src={logoBottom} alt="" />    
                    </div>
                    <div>
                        <p className="mt-3">Subscribe</p>
                    </div>
                    <div>
                        <p>Get 10% off your first order</p>
                    </div>
                    <div className=''>
                           <input type="text" placeholder='Enter your email' className={styles.input} />
                            <img src={Send} alt="Send" className={styles.send} />
                    </div>
                </div> 
                <div className="col-lg-3 col-md-6 col-sm-12 text-light">
                    <div>
                        <p>Support</p>   
                    </div>
                    <div>
                        <p className="mt-3">SQI College Of ICT, Ogbomosho, Oyo State.</p>
                    </div>
                    <div>
                        <p>exclusive@gmail.com</p>
                    </div>
                    <div className=''>
                       <p>+234 810 387 5405</p>
                    </div>
                </div> 
                <div className="col-lg-2 col-md-6 col-sm-12 text-light">
                    <div>
                        <p>Account</p>   
                    </div>
                    <div>
                        <p className="mt-3">My Account</p>
                    </div>
                    <div>
                        <p>Login/Register</p>
                    </div>
                    <div className=''>
                       <p>Cart</p>
                    </div>
                    <div className=''>
                       <p>Wishlist</p>
                    </div>
                    <div className=''>
                       <p>Shop</p>
                    </div>
                </div> 
                <div className="col-lg-2 col-md-6 col-sm-12 text-light">
                    <div>
                        <p>Quick Links</p>   
                    </div>
                    <div>
                        <p className="mt-3">Privacy Policy</p>
                    </div>
                    <div>
                        <p>Terms Of Use</p>
                    </div>
                    <div className=''>
                       <p>FAQ</p>
                    </div>
                    <div className=''>
                       <p>Contact</p>
                    </div>
                </div> 
                <div className="col-lg-2 col-md-6 col-sm-12 text-light">
                    <div>
                        <p>Download App</p>   
                    </div>
                    <div>
                        <p className="mt-3 fs-6">Save $3 with App New User Only</p>
                    </div>
                    <div className='row'>
                        <div className="col-lg-1 me-5">
                            <img src={qrCode} alt="" className={styles.code} />    
                        </div>
                        <div className="col-2">
                            <img src={gogglePlay} alt="" className='mb-2'/>
                            <img src={appStore} alt="" />
                        </div>
                    </div>
                    <div className="row mt-3 col-sm-12">
                        <div className='col-1 me-2'>
                            <TiSocialFacebook />
                        </div>
                        <div className='col-1 me-2'>
                            <CiTwitter />
                        </div>
                        <div className='col-1 me-2'>
                            <FaInstagram />
                        </div>
                        <div className='col-1'>
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <div className='bg-black text-center text-white pb-2'>
            <p>© Copyright Rimel 2022. All right reserved</p>
        </div>
    </>
  )
}

export default Footer