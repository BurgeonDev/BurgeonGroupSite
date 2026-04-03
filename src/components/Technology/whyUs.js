import React, {useState} from 'react';
import {Link} from "react-router-dom";
import parse from "html-react-parser";
import Thumbnail from "../../components/UI/Thumbnail";
import Content from "../../components/UI/Content";
import aboutData from '../../data/Technology/translate-ideas.json';

const About = () => {

    const [about] = useState(aboutData);

    return (
        <div className="about-area-wrapper sm-top">
            <div className="container">
                <div className="row align-items-lg-center">
                    <div className="col-md-6 col-lg-5">
                        <Thumbnail classes="about-thumb" imgSrc={require('../../assets/img' + about.thumb)}/>
                    </div>

                    <div className="col-md-6 col-lg-7">
                        <Content classes="about-content">
                            <h6>{about.title}</h6>
                            <h2>{parse(about.heading)}</h2>
                            <span className="about-since">{about.since}</span>
                            <p>{parse(about.text)}</p>
                        </Content>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;