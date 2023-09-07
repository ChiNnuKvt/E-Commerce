import React from 'react'
import "./Header.css"
import { BsSearch } from "react-icons/bs"
// import logoPng from "Assest/Sole Haven.png>"
import { FaUserAlt } from "react-icons/fa";
import { AiFillHeart,AiOutlineShoppingCart } from "react-icons/ai";



import { NavLink, Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            {/* <header className='header-top-strip py-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6 '>
                            <p className='text-white mb-0'>Free Shipping over 500 rs & Free Returns</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0'>Call Line : <a className="text-white" href='tel:+91 9951072005'>+91 9951072005</a></p>
                        </div>
                    </div>

                </div>
            </header> */}

            <header className='header-upper py-2 fixed-top'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-2'>
                            <h2>
                                <Link to={'/'}><img src='Assest/Sole Haven2.png' className="col-12 my-0"></img></Link>
                            </h2>
                        </div>

                        <div className='col-7'>
                            <div className="input-group w-75">
                                <input type="text" class="form-control p-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2">
                                    <BsSearch className='fs-6' />
                                </span>
                            </div>
                        </div>

                        <div className='col-3'>
                            <div className='d-flex '>
                                
                                <div>
                                    <Link className='d-flex align-items-center text-white'>

                                    </Link>
                                </div>
                                <div className='mx-3'>
                                    <Link to={'/Register'} className='d-flex align-items-center gap-10 text-white'>
                                        <div className='pt-1'>
                                            <AiFillHeart size={35} />
                                     
                                        </div>
                                    </Link>
                                </div>
                                
                                <div className='mx-3'>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <div className='pt-1'>
                                            <AiOutlineShoppingCart size={35} />
                                     
                                        </div>
                                    </Link>
                                </div>
                        
                                <div className='mx-3'>
                                    <Link to={'/Register'} className='pt-2 d-flex align-items-center gap-10 text-white'>
                                        Register
                                    </Link>
                                </div>
                                
                                <div  className='mx-1'>
                                    <Link to={'/Login'} className='pt-2 d-flex align-items-center gap-10 text-white'>
                                        Login
                                    </Link>
                                </div>
                                <div  className='mx-1'>
                                    <Link to={'/Login'} className='pt-2 d-flex align-items-center gap-10 text-white'>
                                        Logout
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header