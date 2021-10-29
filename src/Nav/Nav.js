import React from 'react'
import logo from '../Assets/logo.png';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';
import './Nav.css';
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <>

            <div className="logo-bar">
            <Link to='/Online-forms' >
                <div>
                    <button className='btn btn-danger mt-3 z-depth-1 bounceIn'>

                        Admission Open 
                    </button>
                </div></Link>
                <div className='icons'>
                <a href="https://youtube.com/channel/UCwJNTGyLuVtfrGCMVdX1Cpg" target='_blank' rel="noopener noreferrer"><FaYoutube className='icon' style={{ color: 'red' }} /></a>
                <a href="https://www.instagram.com/mdcoachinglsc/" target='_blank' rel="noopener noreferrer">  <FaInstagram className='icon' style={{ color: '#8a3ab9' }} /></a>
                    <a href="https://www.facebook.com/mdcoachinglsc/" target='_blank' rel="noopener noreferrer"> <FaFacebookF className='icon' style={{ color: 'blue' }} /></a>
                   
                    <a href="https://www.linkedin.com/in/mdcoachinglsc/" target='_blank' rel="noopener noreferrer"> <FaLinkedinIn className='icon' style={{ color: '#0077b5' }} /></a>
                    
                    <FaTwitter className='icon' style={{ color: 'aqua' }} />
                </div>
            </div>
            <hr />

            <div className="container-fluid w-100 navtop" style={{ backgroundColor: "#022335" }}>


                <nav className="navbar navbar-expand-lg navbar-light ">
                    <img src={logo} alt="" width={200} height={100} />
                    <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon " ></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto topnav ">
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to='/'>HOME <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle text-danger" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    ONLINE ADMISSION
                                </p>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to='/NiosClass10'>Stream 1 &#38; 2</Link>
                                    <Link className="dropdown-item" to='/NiosClass12'>Stream 3 &#38; 4</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Subjects
                                </p>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/SubjectListClass10th">class 10th</Link>
                                    <Link className="dropdown-item" to="/SubjectListClass12th">class 12th</Link>
                                </div>
                            </li>
                           
                            <li className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Question Papers
                                </p>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to ='QuestionPapersClass10th-12th'>Class 10th and 12th</Link>
                                </div>
                            </li>
                          
                            <li className="nav-item">
                                <a className="nav-link text-danger"target='_blank' rel="noopener noreferrer" href="https://results.nios.ac.in/">RESULT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" target='_blank' rel="noopener noreferrer" href="https://sdmis.nios.ac.in/search/hall-ticket">Hall Ticket/Datesheet</a>
                            </li>
                            <li className="nav-item">
                                <Link to='/About_us' className="nav-link text-white">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Contact_us">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav
