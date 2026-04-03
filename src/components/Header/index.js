import Logo from './Logo'
import Navbar from './Navbar/Navbar'
import HeaderConfig from './HeaderConfig'
import React, { useEffect, useState } from 'react';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    const sticky = () => {
        setIsSticky(window.scrollY >= 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => window.removeEventListener('scroll', sticky);
    }, []);

    return (
        <header className={`header-area ${isSticky ? 'sticky' : ''}`}>
            <div className="container">
                <div className="header-inner">

                    {/* Logo */}
                    <div className="header-left">
                        <Logo />
                    </div>

                    {/* Navbar */}
                    <div className="header-center d-none d-lg-flex">
                        <Navbar />
                    </div>

                    {/* Right Side */}
                    <div className="header-right">
                        <HeaderConfig />
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;