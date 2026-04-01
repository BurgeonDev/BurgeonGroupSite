import React,{Fragment} from 'react';
import socialNetworks from '../../data/SocialNetworks/socials'

const ContactInfo = () => {
    return (
        <Fragment>
            <div className="widget-item m-0">                
                            <address>
                                The Binary, Business Bay, Dubai, UAE <br/>
                                Office 349, Street 01, i-9/3, Islamabad, Pakistan<br/>
                                https://burgeon-grp.com <br/>
                                +92-333-134-2525 || +971-52727-0895<br/>
                                info@burgeon-grp.com
                            </address>
            </div>
            <div className="member-social-icons mt-30">
                {
                    socialNetworks.map(social=>(
                        <a key={social.id} href={`https://${social.networkName}.com/${social.username}`} target="_blank" rel="noopener noreferrer">
                            <i className={`fa fa-${social.networkName}`}/>
                        </a>
                    ))
                }
            </div>
        </Fragment>
    );
};

export default ContactInfo;