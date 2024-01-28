import React from "react";
import LogoTop from "../../assets/Images/LogoTop.png";
import Search from "../../assets/Images/Search.png";
import styles from "./NavBar.module.css";
import Wishlist from "../../assets/Images/Wishlist.png";
import Cart from "../../assets/Images/Cart.png";
import User from "../../assets/Images/User.png";

const NavBar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-black text-light">
                    <div className="col-6 mx-auto">
                        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                            <span>
                                <a href="#" className="text-light ms-3"><strong>ShopNow</strong></a>
                            </span>
                        </p>
                    </div>
                    <div className="dropdown col-3">
                        <a
                            className="btn text-light dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            English
                        </a>
                    </div>
                </div>
            </div>

            <div className="row">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <img src={LogoTop} alt="Top Logo" className={styles.logo}/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active ms-4" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active ms-4" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active ms-4 me-4" href="/signup">Sign Up</a>
                                </li>
                            </ul>
                            <div className="d-flex ms-4" role="search">
                                <input className="form-control w-100 ms-0 pe-5" type="text" placeholder="What are you looking for?" aria-label="Search" />
                                <img src={Search} alt="Search" type="submit" className={styles.search} />
                            </div>
                        <div className="row images">
                            <div className="col-1 ms-5">
                                <a href=""><img src={Wishlist} alt="Wishlist" className="ms-5"/></a>
                            </div>
                            <div className="col-1 ms-3">
                                <img src={Cart} alt="Cart" className="ms-5"/>
                            </div>
                            <div className="col-1 ms-3">
                                <img src={User} alt="User" className="ms-5"/>
                            </div>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default NavBar;
