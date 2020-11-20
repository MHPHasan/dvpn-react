import React from 'react'
import Loading from './Loading'
import { FaArrowRight, FaDribbble, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Title from './Title';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Team({data, classText}) {

    let publicUrl = process.env.PUBLIC_URL + '/'

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    };

    if(!data) {
        return <Loading />
    }
    return (
        <section className={`${classText} team`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Section Title  */}
                            <Title title={data.title} subtitle={data.desc} />
                        {/* End Section Title  */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <Slider {...settings} className="team-carousel">
                            {
                                data.items.map((item, index) => {
                                    return (
                                        <div key={index} className="single-team text-center">
                                            <div className="member-img">
                                                <img src={publicUrl + item.img.url} alt={item.img.alt} />
                                                <a href={item.btn_url} target="_blank" className="btn-rounded">
                                                    <FaArrowRight />
                                                </a>
                                            </div>
                                            
                                            <div className="member-details">
                                                <h3>{item.title}</h3>
                                                <p>{item.subtitle}</p>
                                            </div>
                                            
                                            <div className="social-links">
                                                <a href={item.socials.dribble_url} target="_blank">
                                                    <FaDribbble />
                                                </a>
                                                <a href={item.socials.twitter_url} target="_blank">
                                                    <FaTwitter />
                                                </a>
                                                <a href={item.socials.linkedin_url} target="_blank">
                                                    <FaLinkedinIn />
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team

Team.defaultProps = {
    classText: 'pt-120 pb-140'
}