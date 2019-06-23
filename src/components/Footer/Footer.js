import React, { Component } from 'react';
import footer_logo from '../../assets/footer_logo.png';
import { footer_data } from '../Data';
import twitter_logo from '../../assets/Footer/twitter.png';
import fb_logo from '../../assets/Footer/fb.png';
import icon_logo from '../../assets/Footer/icon.png';
import insta_logo from '../../assets/Footer/insta.png';
import pinterest_logo from '../../assets/Footer/pinterest.png';

class Footer extends Component {
    render() {
        return (
            <div className="col-sm-12 footer">
                <div className="wrapper">
                    <div className="footer_nav">
                        <div className="col-sm-2 footer_logo">
                            <img src={footer_logo} alt="footer_logo" />
                        </div>

                        <div className="offset-sm-1 col-sm-7 footer_ul">
                            <ul className="footer_links">
                                <li>Business</li>
                                <li>Investing</li>
                                <li>Technology</li>
                                <li>Entrepreneurs</li>
                                <li>Op/ed</li>
                                <li>Leadership</li>
                                <li>Lifestyle</li>
                                <li>Lists</li>
                            </ul>
                        </div>
                        <div className="offset-sm-1 col-sm-1 lang">
                            <select>
                                <option>English</option>
                                <option>German</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-sm-12 footer_text">
                        <div className="col-sm-4 footer_data">
                            {footer_data[0].text}
                            <div className="col-sm-9 footer_social">
                                <a href="http://www.twitter.com"><img src={twitter_logo} alt="twitter" /></a>
                                <a href="http://www.facebook.com"><img src={fb_logo} alt="facebook" /></a>
                                <a href="http://www.google.com"><img src={icon_logo} alt="icon" /></a>
                                <a href="http://www.instagram.com"><img src={insta_logo} alt="instagram" /></a>
                                <a href="http://www.pinterest.com"><img src={pinterest_logo} alt="pinterest" /></a>
                            </div>
                        </div>
                        <div className="col-sm-8 footer_list">
                            <div className="col-sm">
                                <ul>
                                    <li>Business</li>
                                    <li>Culture</li>
                                    <li>Gadgets</li>
                                    <li>Future</li>
                                    <li>Startups</li>
                                </ul>
                            </div>
                            <div className="col-sm">
                                <ul>
                                    <li>Stars</li>
                                    <li>Screen</li>
                                    <li>Binge</li>
                                    <li>Culture</li>
                                    <li>Media</li>
                                </ul>
                            </div>
                            <div className="col-sm">
                                <ul>
                                    <li>45</li>
                                    <li>Congress</li>
                                    <li>Security</li>
                                    <li>he Nine</li>
                                    <li>Trumpmerica</li>
                                </ul>
                            </div>
                            <div className="col-sm">
                                <ul>
                                    <li>Video</li>
                                    <li>Video news</li>
                                    <li>Feature shows</li>
                                    <li>HLN</li>
                                    <li>TV shows</li>
                                    <li>TV schedule</li>
                                    <li>Faces of CNN Worldwide</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="offset-sm-7 col-sm-5 copyright">{footer_data[0].copyright1}</p>
                    <p className="offset-sm-9 col-sm-3">{footer_data[0].copyright2}</p>
                    <p className="col-sm-3 footer_logo_name">
                        <span className="footer_span">meteor &nbsp;</span>International Edition +
                    </p>
                    <div className="offset-sm-3 col-sm-9">
                        <ul className="footer_services">
                            <li>Terms and Conditions</li>
                            <li>Privacy Statement</li>
                            <li>Market Data</li>
                            <li>AdChoices</li>
                            <li>Newslatter</li>
                            <li>Help</li>
                            <li>About Us</li>
                            <li>Meteor Newssource</li>
                            <li>Terms</li>
                            <li>Site Map Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
