import React, {Fragment} from 'react';
import PageWrapper from "../../components/PageWrapper";
import PageHeader from "../../components/PageHeader";
import WhyUs from '../../components/OrganicFood/WhyUs';
import OrganicFoodContent from "../Construction/ConstructionContent";
import OrganicFoodWork from "../OrganicFood/WhyUsContent";
import SidebarForBlog from "../SidebarForBlog";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileMenu from '../../components/MobileMenu';
import LoginRegister from '../../components/LoginRegister';

const OrganicFoodPage = ({sidebar_position, blog_type, sidebar}) => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../../assets/img/service/organicfood.jpeg')}
                title={'Organic Products.'}
                content={''}
            />

            {/* <PageWrapper classes={'blog-page-content-area sp-y'}>
                {sidebar === true && sidebar_position === 'left' ? <SidebarForBlog classes={'order-1 order-lg-0'}/> : null}

                <OrganicFoodContent blog_type={blog_type} cols={sidebar ? 'col-lg-9' : 'col-12'} classes={sidebar_position === 'left' ? 'order-0 order-lg-1' : null}/>

                {sidebar === true && sidebar_position === 'right' ? <SidebarForBlog/> : null}
            </PageWrapper> */}

            <WhyUs/>

            <h2 className='text-center mt-50 mb-30'>Our Products</h2>
            <PageWrapper className='mr-50 ml-50 mb-50'>
                {sidebar === true && sidebar_position === 'left' ? <SidebarForBlog classes={'order-1 order-lg-0'}/> : null}

                <OrganicFoodWork blog_type={blog_type} cols={sidebar ? 'col-lg-9' : 'col-12'} classes={sidebar_position === 'left' ? 'order-0 order-lg-1' : null}/>

                {sidebar === true && sidebar_position === 'right' ? <SidebarForBlog/> : null}
            </PageWrapper>
            <div className="mt-50 mb-30">
                <Footer/>
                <MobileMenu/>
                <LoginRegister/>
            </div>
        </Fragment>
    );
};

export default OrganicFoodPage;
