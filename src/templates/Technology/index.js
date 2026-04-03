import React, {Fragment} from 'react';
import PageWrapper from "../../components/PageWrapper";
import PageHeader from "../../components/PageHeader";
import WhyUs from '../../components/Technology/whyUs';
import TechnologyContent from "./TechnologyContent";
import TechnologyPortfolio from "./TechnologyPortfolio";
import SidebarForBlog from "../SidebarForBlog";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileMenu from '../../components/MobileMenu';
import LoginRegister from '../../components/LoginRegister';

const TeamPage = ({sidebar_position,blog_type,sidebar}) => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../../assets/img/technology/technology.jpg')}
                title={'Technology Division'}
                content={''}
            />

            <PageWrapper classes={'blog-page-content-area mt-20'}>
                {sidebar === true && sidebar_position === 'left' ? <SidebarForBlog classes={'order-1 order-lg-0'}/> : null}

                <TechnologyContent blog_type={blog_type} cols={sidebar ? 'col-lg-9' : 'col-12'} classes={sidebar_position === 'left' ? 'order-0 order-lg-1':null}/>

                {sidebar === true && sidebar_position === 'right' ? <SidebarForBlog/> : null}
            </PageWrapper>

            <WhyUs/>

            <h2 className='text-center mt-50 mb-30'>Our Projects</h2>
            <PageWrapper className='mr-50 ml-50 mb-50'>
                {sidebar === true && sidebar_position === 'left' ? <SidebarForBlog classes={'order-1 order-lg-0'}/> : null}

                <TechnologyPortfolio blog_type={blog_type} cols={sidebar ? 'col-lg-9' : 'col-12'} classes={sidebar_position === 'left' ? 'order-0 order-lg-1':null}/>

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

export default TeamPage;