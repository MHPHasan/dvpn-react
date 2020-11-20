import React from 'react'
import Loading from './Loading'
import Title from './Title'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';

function Service({data, classText}) {

    let publicUrl = process.env.PUBLIC_URL + '/'
    if(!data) {
        return <Loading />
    }

    return (
        <section className={`${classText} service`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Title title={data.title} subtitle={data.desc} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        data.items.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <div className="single-service hover-effect">
                                        <div className="service-icon">
                                            <img src={publicUrl+item.img.url} alt={publicUrl+item.img.alt} />
                                        </div>
                                        <div className="service-content">
                                            <Link to="/service"><h3>{ item.title }</h3></Link>
                                            <p>{ item.desc }</p>
                                            <Link to="/service" className="btn-link">{item.button.text} <FaArrowRight /></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Service

Service.defaultProps = {
    classText: 'pt-120 pb-90'
}
