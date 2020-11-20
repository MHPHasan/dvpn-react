import React, { Component } from 'react'
import Logo from '../images/logo.png'
import stickyLogo from '../images/sticky-logo.png'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { FaSearch, FaGlobe, FaAngleDown } from 'react-icons/fa';

//import image
import Flag1 from '../images/icons/flag1.png'
import Flag2 from '../images/icons/flag2.png'
import Flag3 from '../images/icons/flag3.png'
import Flag4 from '../images/icons/flag4.png'
import Flag5 from '../images/icons/flag5.png'
import Flag6 from '../images/icons/flag6.png'

class Navbar extends Component {

    state = {
        addClass: ''
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll.bind(this));
    // }

    handleScroll() {
        let lastScrollY = window.scrollY

        if (lastScrollY >= 70) {

            this.setState((state, props) => ({
                addClass: 'sticky fadeInDown animated'
            }));

        } else {

            this.setState((state, props) => ({
                addClass: ''
            }));

        }
    }
    
    render() {
        return (
            <header className="header fixed-top">
                <div className={`${this.state.addClass} header-main`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                {/* Logo */}
                                <div className="logo">
                                    <Link to="/">
                                        <img src={Logo} className="main-logo" alt="Logo"/>
                                        <img src={stickyLogo} className="sticky-logo" alt="Sticky Logo"/>
                                    </Link>
                                </div>
                                {/* End Logo */}
                            </div>

                            <div className="col-lg-10 d-flex align-items-center justify-content-end">
                                {/* Nav Wrapper */}
                                <div className="nav-wrapper">
                                    {/* Menu Button */}
                                    <div id="menu-button">
                                        <span></span>
                                    </div>
                                    {/* End Menu Button */}

                                    {/* Nav */}
                                    <ul className="nav justify-content-end">
                                        <li><Link to="#">Home</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/">Home One</Link></li>
                                                <li><Link to="/home-v2">Home Two</Link></li>
                                                <li><Link to="/home-v3">Home Three</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="#">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/about">About</Link></li>
                                                <li><Link to="/coming-soon">Coming Soon</Link></li>
                                                <li><Link to="/error">404</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="#">Services</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/service">Service</Link></li>
                                                <li><Link to="/single-service">Service Details</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="#">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/blog">Blog</Link></li>
                                                <li><Link to="/single-blog">Blog Details</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                    {/* End Nav */}
                                </div>
                                {/* End Nav Wrapper */}


                                <div className="d-flex align-items-center">
                                    {/* Search Toggle */}
                                    <div className="search-toggle">
                                        <button className="search-toggle-btn" onClick={this.props.handler.handleSearch}>
                                            <FaSearch />
                                        </button>
                                    </div>
                                    {/* End Search Toggle */}

                                    {/* Language */}
                                    <div className="flag-dropdown ml-3">
                                        <Dropdown>
                                            <Dropdown.Toggle className="dropdown-btn d-flex align-items-center">
                                                <FaGlobe />
                                                <FaAngleDown />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#"><img src={Flag1} alt="Flag" /></Dropdown.Item>
                                                <Dropdown.Item href="#"><img src={Flag2} alt="Flag" /></Dropdown.Item>
                                                <Dropdown.Item href="#"><img src={Flag3} alt="Flag" /></Dropdown.Item>
                                                <Dropdown.Item href="#"><img src={Flag4} alt="Flag" /></Dropdown.Item>
                                                <Dropdown.Item href="#"><img src={Flag5} alt="Flag" /></Dropdown.Item>
                                                <Dropdown.Item href="#"><img src={Flag6} alt="Flag" /></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    {/* End Language */}

                                    {/* Offcanvas Triggar */}
                                    <div className="offcanvas-trigger ml-3 mr-2 mr-sm-0" onClick={this.props.handler.handleOffcanvas}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    {/* End Offcanvas Triggar */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar

