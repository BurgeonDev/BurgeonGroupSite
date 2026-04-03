import React, {Fragment} from 'react';
import PageWrapper from "../../components/PageWrapper";
import PageHeader from "../../components/PageHeader";
import WhyUs from '../../components/Construction/whyUs'
import BlogContent from "./ConstructionContent";
import BlogWhyUs from "./WhyUsContent";
import SidebarForBlog from "../SidebarForBlog";
import Header from '../../components/Header';

const BlogPage = ({sidebar_position,blog_type,sidebar}) => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../../assets/img/blog/construction-1-scaled.jpg')}
                title={'Construction Division'}
                content={''}
            />

            <PageWrapper classes={'blog-page-content-area sp-y'}>
                {sidebar === true && sidebar_position === 'left' ? <SidebarForBlog classes={'order-1 order-lg-0'}/> : null}

                <BlogContent blog_type={blog_type} cols={sidebar ? 'col-lg-9' : 'col-12'} classes={sidebar_position === 'left' ? 'order-0 order-lg-1':null}/>

                {sidebar === true && sidebar_position === 'right' ? <SidebarForBlog/> : null}
            </PageWrapper>

            <WhyUs/>

            <h2 className='text-center mt-50 mb-30'>Our Latest Work</h2>
            <PageWrapper className='mr-50 ml-50 mb-50'>
                {sidebar === true && sidebar_position === 'left' ? <SidebarForBlog classes={'order-1 order-lg-0'}/> : null}

                <BlogWhyUs blog_type={blog_type} cols={sidebar ? 'col-lg-9' : 'col-12'} classes={sidebar_position === 'left' ? 'order-0 order-lg-1':null}/>

                {sidebar === true && sidebar_position === 'right' ? <SidebarForBlog/> : null}
            </PageWrapper>
        </Fragment>
    );
};

export default BlogPage;