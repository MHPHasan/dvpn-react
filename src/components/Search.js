import React, { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa';

function Search({search}) {
    return (
        <div className="full-page-search show">
            <button className="search-close-btn" onClick={search}>
                <FaTimes />
            </button>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="search-form p-5">
                            <form action="#">
                                <div className="dvpn_input-wrapper">
                                    <input type="text" placeholder="Enter Your Keyword" name="search" required />
                                    <span className="input-icon"><FaSearch/></span>
                                </div>
                                <div className="btn-wrap">
                                    <span></span>
                                    <button type="submit" className="btn">SEARCH</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
