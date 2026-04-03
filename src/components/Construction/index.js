import React from 'react';
import SectionTitle from "../UI/SectionTitle";
import BlogItem from "./constructionItems";
import constructionData from '../../data/Construction/construction.json';

function Blog() {
    return (
        <div className="blog-area-wrapper sm-top">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <SectionTitle title="OUR BLOG" heading="Latest update <br> from our blog post"/>
                    </div>
                </div>

                <div className="row mtn-35">
                    {
                        constructionData.slice(0,4).map(blog =>(
                            <BlogItem key={blog.id} id={blog.id} title={blog.title} excerpt={blog.excerpt} postBy={blog.author.name} date={blog.publishDate}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Blog;