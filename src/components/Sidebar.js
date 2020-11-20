import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Sidebar({offcanvas}) {

    let publicUrl = process.env.PUBLIC_URL + '/'

    return (
        <div className="offcanvas_menu">
            <div className="offcanvas-overlay fixed-top w-100 h-100 show" onClick={offcanvas}></div>
            <div className="offcanvas-wrapper fixed-top h-100 show">
                <div className="offcanvas-close position-absolute" onClick={offcanvas}>
                    <i className="fa fa-times"></i>
                </div>

                <div className="offcanvas-content">
                    {/* Widget Logo */}
                    <div className="widget widget_logo">
                        <a href="#"><img src={publicUrl + "images/sticky-logo.png"} alt="" /></a>
                    </div>
                    {/* End Widget Logo */}

                    {/* Widget About */}
                    <div className="widget widget_about">
                        <h3 className="widget-title">About us</h3>
                        <p>It takes more than a private internet browser to go incognito. We’ll make your real IP address.</p>
                    </div>
                    {/* End Widget About */}

                    {/* Widget IP */}
                    <div className="widget widget_ip">
                        <h3 className="widget-title">Your IP Address:</h3>
                        <ul>
                            <li>103.237.76.105</li>
                        </ul>
                    </div>
                    {/* End Widget IP */}

                    {/* Widget About */}
                    <div className="widget widget_about">
                        <h3 className="widget-title">Your ISP:</h3>
                        <p>KS Network Limited</p>
                    </div>
                    {/* End Widget About */}

                    {/* Widget  Contact */}
                    <div className="widget widget_contact">
                        <h3 className="widget-title">Get In Touch</h3>
                        <ul>
                            <li>
                                <span className="icon">
                                    <FaEnvelope />
                                </span> 
                                <a href="mailto:Your@gmail.com">Your@gmail.com</a>
                            </li>
                            <li>
                                <span className="icon">
                                    <FaPhone />
                                </span> 
                                <a href="callto:(202)2555421">(202) 255 5421</a>
                            </li>
                            <li>
                                <span className="icon">
                                    <FaMapMarkerAlt />
                                </span>27 Division St, New York NY 10002, USA
                            </li> 
                        </ul>
                    </div>
                    {/* End Widget Contact */}
                </div>

                {/* Widget Social Icon */}
                <div className="widget widget_social_links border-top mt-5">
                    {/* <h3 className="widget-title">Follow Us On:</h3> */}
                    <div className="social-links">
                        <a href="https://www.facebook.com">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com/">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.instagram.com/">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                {/* End Widget Social Icon */}
            </div>
        </div>
    )
}

export default Sidebar
