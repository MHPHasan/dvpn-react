import React from 'react'
import Loading from './Loading'
import Title from './Title'

function Price({data, classText}) {

    let publicUrl = process.env.PUBLIC_URL + '/'
    if(!data) {
        return <Loading />
    }
    return (
        <section className={`${classText} pricing`}>
            <img src={publicUrl + data.bg_pattern.url} alt={data.bg_pattern.alt} className="section-pattern-img" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Section Title */}
                        <Title title={data.title} subtitle={data.desc} classText="text-white title-shape title-shape-style-two text-center" />
                        {/* End Section Title */}
                    </div>
                </div>

                <div className="row justify-content-center">
                    
                    {
                        data.items.map((item, index) => {
                            let active = index == 1 ? "active " : '';
                            return (
                                <div key={index} className="col-lg-4 col-md-6">
                                    {/* Single Price  */}
                                    <div className={`${active}single-price`}>
                                        {item.ribbon ? <h4 className="ribbon">{item.ribbon}</h4> : ''}
                                        <div className="price-head">
                                            <h4>{item.title}</h4>
                                            <div className="price">
                                                <span className="currency">{item.price.currency}</span>
                                                <span className="value">{item.price.value}</span>
                                                <span className="duration">{item.price.duration}</span>
                                            </div>
                                            <h6>{item.saving}</h6>
                                        </div>
                                        <div className="price-body">
                                            <ul>
                                                <li>
                                                    <del>{item.feature_list.price.sale_price}</del>
                                                    <strong>{item.feature_list.price.base_price}</strong>
                                                </li>
                                                <li>{item.feature_list.feature1}</li>
                                                <li>{item.feature_list.feature2}</li>
                                            </ul>
                                            <div className="btn-wrap">
                                                <span></span>
                                                <a href={item.button.url} className="btn btn-sm">{item.button.text}</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Price  */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Price

Price.defaultProps = {
    classText: 'gradient-bg pt-120 pb-90'
}
