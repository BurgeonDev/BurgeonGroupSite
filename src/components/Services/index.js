import React from 'react';
import SectionTitle from '../UI/SectionTitle'
import ServiceItem from  './ServiceItem'
import ServicesData from '../../data/Services/services'

import serviceTopBg from '../../assets/img/service/service-bg.jpg'

function Services({classes}) {
    return (
        <div className={`service-area-wrapper ${classes}`}>
            <div className="service-area-top" style={{backgroundImage: `url("${serviceTopBg}")`}}>
                <div className="container">
                    <div className="row">
                        <div className="text-center">
                            <SectionTitle title="Your Trusted Partner in Infrastructure, Mobility, and Digital Innovation." heading="Burgeon Group stands at the intersection of reliable construction, seamless travel experiences, and transformative technology. We don’t just manage projects; we build ecosystems that empower communities and businesses to thrive." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-content-area">
                <div className="container">
                    <div className="row mtn-30">
                        {
                            ServicesData.map(service=>(
                                <ServiceItem key={service.id} id={service.id} title={service.title} text={service.shortDesc} thumb={service.thumb}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;