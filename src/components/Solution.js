import React from 'react'
import Loading from './Loading'
import Title from './Title'

function Solution({data, classText}) {

    let publicUrl = process.env.PUBLIC_URL + '/'

    if(!data) {
        return <Loading />
    }
    return (
        <section className={`${classText} solution`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="solution-img d-none d-xl-block">
                            <img src={publicUrl + data.images.mainImg.url} alt={publicUrl + data.images.mainImg.alt} />
                            <img src={publicUrl + data.images.man.url} alt={publicUrl + data.images.man.alt} className="s_man" />
                            <img src={publicUrl + data.images.woman.url} alt={publicUrl + data.images.woman.alt} className="s_woman" />
                        </div>
                        <div className="solution-img-responsive d-xl-none">
                            <img src={publicUrl + data.images.fullImg.url} alt={publicUrl + data.images.fullImg.alt} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="solution-content">
                            <Title title={data.title} subtitle={data.desc} classText="style--two title-shape" />

                            {
                                data.items.map((item, index) => {
                                    return (
                                        <div key={index} className="single-solution media align-items-center">
                                            <div className="img">
                                                <img src={publicUrl + item.img.url} alt={item.img.alt} />
                                            </div>
                                            <div className="content media-body">
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solution

Solution.defaultProps = {
    classText: 'layer section-bg pt-120 pb-120'
}