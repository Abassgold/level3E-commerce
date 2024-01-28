import React from 'react'
import sideImage from "../../assets/Images/sideImage.png"
import LogoTop from "../../assets/Images/LogoTop.png";
import Search from "../../assets/Images/Search.png";
import styles from "./Signin.module.css";

const Signin = () => {
    return (
        <>
            <div className="bg-black text-center mt-5 text-light pt-3">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                            <span>
                                <a href="#" className="text-light ms-3"><strong>ShopNow</strong></a>
                            </span>
                        </p>
                    </div>
                    <div className="dropdown col-3 me-5">
                        <a
                            className="text-light dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            English
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-light">
                <div className="row">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <img src={LogoTop} alt="Top Logo" className={styles.logo} />
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
                                    <input className="form-control w-100 ms-5 pe-5" type="text" placeholder="What are you looking for?" aria-label="Search" />
                                    <img src={Search} alt="Search" type="submit" className={styles.search} />
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={sideImage} style={{ width: "95%", height: "90%" }} alt="" />
                </div>
                <div className="col-lg-6 col-md 6 col-sm-12">
                    <div>
                        <h2 className=' mt-5'>Log in to Exclusive</h2>
                        <p className='mt-3'>Enter your details below</p>
                    </div>
                    <div className='form-floating me-4'>
                        <input type="text" className='form-control' name='email' />
                        <label htmlFor="email">Email or Phone Number</label>
                    </div>
                    <div className='form-floating mt-4 me-4'>
                        <input type="password" className='form-control' name='password' />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className='row'>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <button className="btn btn-danger mt-4 ps-4 pe-4">Log in</button>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-danger mt-4">
                            <p>Forget Password?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin