import React from 'react';
import './Footer.css';
import logo2 from '../../../images/image/logo.png'


const Footer = () => {
    return (
        <div className='main-footer-container'>
            <footer className='footer-container'>
                <div className='logo-img'>
                    <img src={logo2} alt="" />
                </div>
                <div className='info-container'>
                    <div className='info'>
                        <p>About Online Food</p>
                        <p>Read Our Blog</p>
                        <p>Sign Up To Deliver</p>
                        <p>Add Your Restaurant</p>
                        
                    </div>
                    <div className='info'>
                        <p>Get Help</p>
                        <p>Read FAQs</p>
                        <p>View All Cities</p>
                        <p>Restaurant Near Me</p>
                        
                    </div>
                    
                </div>
                <p>Copyright &copy; 2022 Janaswasti Chakma</p>
            </footer>
            <div className='footer-policy'>
                <p>Privacy Policy</p>
                <p>Term of Use</p>
                <p>Pricing</p>
            </div>
            <div className='copyright-text'>
            <p >Copyright &copy; 2022 Janaswasti Chakma</p>
            </div>
            
        </div>
    );
};

export default Footer;