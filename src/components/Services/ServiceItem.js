import React from 'react';
import {Link} from "react-router-dom";

function ServiceItem(props) {
    const serviceURL = props.link || `/service/${props.title.split(' ').join('-').toLowerCase()}?id=${props.id}`;
    const isExternal = Boolean(props.external);
    return (
        <div className="col-sm-6 col-lg-3">
            <div className="service-item">
                <figure className="service-thumb">
                    {isExternal ? (
                        <a href={serviceURL} target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/img/' + props.thumb)} alt={props.title}/>
                        </a>
                    ) : (
                        <Link to={`${process.env.PUBLIC_URL + serviceURL}`}>
                            <img src={require('../../assets/img/' + props.thumb)} alt={props.title}/>
                        </Link>
                    )}

                    <figcaption className="service-txt">
                        <h5>{props.title}</h5>
                    </figcaption>
                </figure>
                <div className="service-content">
                    <div className="service-content-inner">
                        <h5>
                            {isExternal ? (
                                <a href={serviceURL} target="_blank" rel="noopener noreferrer" className="stretched-link">{props.title}</a>
                            ) : (
                                <Link to={`${process.env.PUBLIC_URL + serviceURL}`} className="stretched-link">{props.title}</Link>
                            )}
                        </h5>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceItem;