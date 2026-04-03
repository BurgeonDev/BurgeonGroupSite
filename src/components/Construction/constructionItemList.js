import React from 'react';
import {Link} from "react-router-dom";

const BlogItemList = (props) => {
    const blogURL = `/blog/${props.title.split(' ').join('-').toLocaleLowerCase()}?id=${props.id}`;
    return (
        <div className="blog-item">
            <div className="row align-items-center">
                <div className='col-4 col-sm-4 col-md-4'>
                    <figure className="blog-thumb">
                        <img
                                src={require('../../assets/img/' + props.thumb)}
                                alt={props.title}
                        />
                    </figure>
                </div>

                <div className="col-md-7">
                    <div className="blog-content">
                        <h2 className="h5">{props.title}</h2>
                        <p>{props.excerpt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogItemList;