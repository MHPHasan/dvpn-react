import React, { useContext } from 'react'
import { DataContext } from '../context'
import Banner from '../components/Banner'
import Feature from '../components/Feature';
import Solution from '../components/Solution';
import Service from '../components/Service';
import Price from '../components/Price';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import Loading from '../components/Loading';


function Home() {

    const context = useContext(DataContext);
    const { hero1, feature, solution, service, price, team, testimonial } = context.allData

    return (
        <>
            <Banner data={hero1} />
            <Feature data={feature} />
            <Solution data={solution} />
            <Service data={service} />
            <Price data={price} />
            <Team data={team} />
            <Testimonial data={testimonial} />
        </>
    )
}

export default Home
