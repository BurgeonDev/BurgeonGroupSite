import React from 'react';
import {Link} from 'react-router-dom'

function BlogItem(props) {
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
                <div className="blog-content">
                    <h2 className="h5">{props.title}</h2>
                    <p>{props.excerpt}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;