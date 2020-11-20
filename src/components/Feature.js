import React from 'react'
import Loading from './Loading'
import Title from './Title'

function Feature({data, classText}) {

    let publicUrl = process.env.PUBLIC_URL + '/'
    if(!data) {
        return <Loading />
    }
    return (
        <section className={`${classText} feature`}>
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
                                    <div className="single-feature">
                                        <div className="feature-icon">
                                            <img src={publicUrl+item.img.url} alt={item.img.alt} />
                                        </div>
                                        <div className="feature-content">
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
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

export default Feature

Feature.defaultProps = {
    classText: 'pt-120 pb-90'
}
