import BlogData from '../../data/About/work.json'
import React, {Fragment, useState} from 'react';
import Pagination from "../../components/Pagination";
import BlogItem from "../../components/Construction/constructionItems";
import BlogItemList from "../../components/Construction/constructionItemList";

const BlogContent = (props) => {
    return (
        <div className={props.cols + ' ' + props.classes}>
            <Fragment>
                <div className={`blog-content-wrapper ${props.blog_type === 'list' && 'blog-list'}`}>
                    <div className="row mtn-30">
                        {
                            props.blog_type === 'list' ? (
                                <div className={'col-12'}>
                                    {
                                        BlogData.map(blog => (
                                            <BlogItemList
                                                key={blog.id}
                                                id={blog.id}
                                                thumb={blog.thumb}
                                                title={blog.title}
                                                excerpt={blog.excerpt}
                                                postBy=''
                                                date={blog.publishDate}
                                            />
                                        ))
                                    }
                                </div>
                            ) : (
                                BlogData.map(blog => (
                                    <BlogItem
                                        key={blog.id}
                                        id={blog.id}
                                        cols={props.cols === 'col-12' ? 'col-md-6 col-lg-4' : 'col-md-6'}
                                        thumb={blog.thumb}
                                        title={blog.title}
                                        excerpt={blog.excerpt}
                                        postBy=""
                                        date={blog.publishDate}
                                    />
                                ))
                            )
                        }
                    </div>
                </div>

                {/* <Pagination
                    paginate={paginate}
                    totalPosts={state.posts.length}
                    currentPage={state.currentPage}
                    postsPerPage={state.postsPerPage}
                /> */}
            </Fragment>
        </div>
    );
}

export default BlogContent;