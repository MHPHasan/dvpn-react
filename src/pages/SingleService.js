import React, { useContext, useState } from 'react'
import { DataContext } from '../context'
import PageTitle from '../components/PageTitle'
import { FaPlay } from 'react-icons/fa';
import Loading from '../components/Loading';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import ModalVideo from 'react-modal-video'
import Accordion from "react-bootstrap/Accordion";
import Counter from '../components/Counter';
import Price from '../components/Price';
import Navbar from '../components/Navbar';

function SingleService() {

    const context = useContext(DataContext);
    const { serviceDetails, counter, price, footer } = context.allData
    const { handleSearch, handleOffcanvas } = context;

    const [isOpen, setOpen] = useState(false)

    if(!serviceDetails) {
        return <Loading />
    }
    return (
        <>
            <Navbar handler={{handleSearch, handleOffcanvas}} />
            <PageTitle pageName="Services Details" />
            <section className="service-details pt-120 pb-120">
                <Container>
                    <Row className="align-items-center mb-5">
                        <Col lg={6}>
                            {/* Video Wrapper */}
                            <div className="video-wrap">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="ni5hRK1ehzk" onClose={() => setOpen(false)} />
                                <button className="video-btn style--two" onClick={()=> setOpen(true)}>
                                    <span><FaPlay /></span>
                                </button>
                            </div>
                            {/* End Video Wrapper */}
                        </Col>
                        <Col lg={6}>
                            <div className="content pl-lg-3 pl-0">
                                {/* Section Title */}
                                <div className="section-title style--two text-left mb-4">
                                    <h2>{serviceDetails.title}</h2>
                                    <p>{serviceDetails.desc}</p>
                                </div>
                                {/* End Section Title */}

                                <div className="btn-wrap">
                                    <span></span>
                                    <a href={serviceDetails.btn.url} className="btn">{serviceDetails.btn.text}</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="content pb-2">
                                <h2>{serviceDetails.howItWorks.title}</h2>
                                <p>{serviceDetails.howItWorks.desc}</p>
                            </div>


                            <Accordion className="mb-4" defaultActiveKey="0">
                                <div>
                                    <Accordion.Toggle variant="link" eventKey="0">
                                        <h3>{serviceDetails.accordion.one.title}</h3>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <p>{serviceDetails.accordion.one.desc}</p>
                                    </Accordion.Collapse>
                                </div>

                                <div>
                                    <Accordion.Toggle variant="link" eventKey="1">
                                        <h3>{serviceDetails.accordion.two.title}</h3>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <p>{serviceDetails.accordion.two.desc}</p>
                                    </Accordion.Collapse>
                                </div>

                                <div>
                                    <Accordion.Toggle variant="link" eventKey="2">
                                        <h3>{serviceDetails.accordion.three.title}</h3>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <p>{serviceDetails.accordion.three.desc}</p>
                                    </Accordion.Collapse>
                                </div>

                                <div>
                                    <Accordion.Toggle variant="link" eventKey="3">
                                        <h3>{serviceDetails.accordion.four.title}</h3>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <p>{serviceDetails.accordion.four.desc}</p>
                                    </Accordion.Collapse>
                                </div>
                            </Accordion>


                            {/* Service List */}
                            <div className="content">
                                <h2>{serviceDetails.serviceList.title}</h2>
                                <ul className="service-list">
                                    {
                                        serviceDetails.serviceList.listItems.map((item, index) => {
                                            return <li key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                            </div>
                            {/* End Service List */}

                        </Col>
                    </Row>
                </Container>
            </section>
            <Counter data={counter} />
            <Price data={price} classText="pt-120 pb-90" styleFour="true" />
            <Footer data={footer} />
        </>
    )
}

export default SingleService
