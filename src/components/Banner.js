import React from 'react'
import { FaPlay } from 'react-icons/fa';
import Loading from './Loading';

function Banner({data}) {

    let publicUrl = process.env.PUBLIC_URL + '/'

    if(!data) {
        return <Loading />
    }
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        {/* Banner Content */}
                        <div className="banner-content">
                            <h4>{ data.subtitle }</h4>
                            <h1>{ data.title }</h1>
                            <p>{ data.desc }</p>

                            <div className="banner-btn-group">
                                <div className="btn-wrap">
                                    <span></span>
                                    <a href={ data.button.btn_url } className="btn btn-white">{ data.button.btn_text }</a>
                                </div>

                                <a href={ data.playButton.btn_url } className="mfp-iframe video-btn">
                                    <span><FaPlay /></span> { data.playButton.btn_text }
                                </a>
                            </div>
                        </div>
                        {/* End Banner Content */}
                    </div>

                    <div className="col-lg-5">
                        {/* Banner Img */}
                        <div className="banner-img d-none d-xl-block">
                            <img src={ publicUrl + data.images.Main_Img.url } alt={ data.images.Main_Img.alt } className="main-img" />
                            <img src={ publicUrl + data.images.Setting_Img.url } alt={ data.images.Setting_Img.alt } className="setting-img" />
                            <img src={ publicUrl + data.images.Sheild_Img.url } alt={ data.images.Sheild_Img.alt } className="sheild-img" />
                            <img src={ publicUrl + data.images.Lock_Img.url } alt={ data.images.Lock_Img.alt } className="lock-img" />
                            <img src={ publicUrl + data.images.Card_Img.url } alt={ data.images.Card_Img.alt } className="card-img" />
                            <img src={ publicUrl + data.images.Box_Img.url } alt={ data.images.Box_Img.alt } className="box-img" />
                            <img src={ publicUrl + data.images.Check_Img.url } alt={ data.images.Check_Img.alt } className="check-img" />
                            <img src={ publicUrl + data.images.Setting2.url } alt={ data.images.Setting2.alt } className="setting2-img" />
                        </div>
                        {/* End Banner Img */}

                        {/* Banner Img Responsive */}
                        <div className="banner-img-responsive d-block d-xl-none">
                            <img src={ publicUrl + data.images.resImg.url } alt="Main Image" />
                        </div>
                        {/* End Banner Img Responsive */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
