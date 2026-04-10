import React from 'react';
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer-area sp-bottom">
            <div className="container">
                <div className="row mtn-40">
                    <div className="col-lg-4 order-4 order-lg-0">
                        <div className="widget-item">
                            <div className="about-widget">
                            <Link to="/" className="logo" style={{color:"black"}}>
                Burgeon Group
                </Link>

                                <Text>
                                    A business group serving industries like construction, technology, travel and organic products.
                                </Text>

                                <Text classes="copyright-txt">
                                    &copy; {new Date().getFullYear()} Burgeon Group. All Rights Reserved.
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Pages">
                            <List classes="widget-list">
                                <LI><Link to={`${process.env.PUBLIC_URL + "/construction"}`}>Construction</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/organic-food"}`}>Organic Food</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/technology"}`}>Technology</Link></LI>
                                <LI><Link to={`https://travel.burgeon-grp.com`}>Travel</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/contact"}`}>Contact us</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Policies">
                            <List classes="widget-list">
                                <LI><Link to={`${process.env.PUBLIC_URL + "/privacy-policy"}`}>Privacy Policy</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/refund-return-policy"}`}>Refund Return Policy</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/terms&conditions"}`}>Terms and Conditions</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/service-policy"}`}>Service Policy</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    {/* <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Social Links">
                            <List classes="widget-list">
                                <LI><Link to="/" target={'_blank'}>Facebook</Link></LI>
                                <LI><Link to="/" target={'_blank'}>Twitter</Link></LI>
                                <LI><Link to="/" target={'_blank'}>Dribbble</Link></LI>
                                <LI><Link to="/" target={'_blank'}>Instagram</Link></LI>
                            </List>
                        </Widget>
                    </div> */}

                    <div className="col-md-4 col-lg-4">
                        <Widget title="Contact Us">
                            <address>
                                The Binary, Business Bay, Dubai, UAE <br/>
                                Office 349, Street 01, i-9/3, Islamabad, Pakistan<br/>
                                https://burgeon-grp.com <br/>
                                +92-333-134-2525 || +971-52727-0895
                            </address>
                        </Widget>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;