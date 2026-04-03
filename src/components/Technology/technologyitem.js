import React from 'react';
import {Link} from 'react-router-dom'

function TechnologyItem(props) {
    const blogURL = `/blog/${props.title.split(' ').join('-').toLocaleLowerCase()}?id=${props.id}`;
    return (
        <div className={props.cols ? props.cols : 'col-6 col-sm-6 col-md-3'}>
            <div className="blog-item">
                {
                    props.thumb ? (
                        <figure className="blog-thumb">
                                <img src={require('../../assets/img/' + props.thumb)} alt={props.title} />
                        </figure>
                    ) : null
                }
                <h2 className="h5 mt-10 text-black text-center strong">{props.title}</h2>
            </div>
        </div>
    );
}

export default TechnologyItem;