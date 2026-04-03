import React from 'react';
import SectionTitle from "../UI/SectionTitle";
import TechnologyItem from "./technologyitem";
import Technologys from '../../data/Technology/technology';

function Technology() {
    return (
        <div className="technology-area-wrapper sm-top">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <SectionTitle title="OUR BLOG" heading="Latest update <br> from our technology post"/>
                    </div>
                </div>

                <div className="row mtn-35">
                    {
                        Technologys.slice(0,4).map(technology =>(
                            <TechnologyItem key={technology.id} id={technology.id} title={technology.title} excerpt={technology.excerpt} postBy={technology.author.name} date={technology.publishDate}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Technology;