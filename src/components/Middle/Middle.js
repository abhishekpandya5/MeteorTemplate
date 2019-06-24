import React, { Component } from 'react';
import { section_data, card_data, images } from '../Data';
import Section from '../Section/Section';
import CardContainer from '../CardContainer/CardContainer';
import TilesContainer from '../TilesContainer/TilesContainer';
import SectionHeading from '../Section/SectionHeading';
import TilesListContainer from '../TilesContainer/TilesListContainer';
import Social from '../Social/Social';
import PopularPosts from '../PopularPosts/PopularPosts';

class Middle extends Component {
    render() {
        return (
            <div className="middle_container">
                <div className="container">
                    <div className="row middle_component">
                        <div className="col-sm-7 left_parent">
                            <div className="col-sm-12">
                                <Section
                                    heading={section_data[0].heading}
                                    headingStyle={section_data[0].headingStyle}
                                    title={section_data[0].title}
                                    titleStyle={section_data[0].titleStyle}
                                    views={section_data[0].views}
                                    caption={section_data[0].caption}
                                    userName={section_data[0].userName}
                                    userTime={section_data[0].userTime}
                                    description={section_data[0].description}
                                    image={section_data[0].image}
                                />
                            </div>


                            <div className="col-sm-12 card_container mobile_card">
                                <div className="col-sm-6 card_left">
                                    <CardContainer
                                        heading={card_data[0].heading}
                                        headingStyle={card_data[0].headingStyle}
                                        title={card_data[0].title}
                                        titleStyle={card_data[0].titleStyle}
                                        views={card_data[0].views}
                                        caption={card_data[0].caption}
                                        userName={card_data[0].userName}
                                        userTime={card_data[0].userTime}
                                        description={card_data[0].description}
                                        image={card_data[0].image}
                                    />
                                </div>
                                <div className="col-sm-6 card_right">
                                    <CardContainer
                                        heading={card_data[1].heading}
                                        headingStyle={card_data[1].headingStyle}
                                        title={card_data[1].title}
                                        titleStyle={card_data[1].titleStyle}
                                        views={card_data[1].views}
                                        caption={card_data[1].caption}
                                        userName={card_data[1].userName}
                                        userTime={card_data[1].userTime}
                                        description={card_data[1].description}
                                        image={card_data[1].image}
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <Section
                                    heading={section_data[1].heading}
                                    headingStyle={section_data[1].headingStyle}
                                    title={section_data[1].title}
                                    titleStyle={section_data[1].titleStyle}
                                    views={section_data[1].views}
                                    caption={section_data[1].caption}
                                    userName={section_data[1].userName}
                                    userTime={section_data[1].userTime}
                                    description={section_data[1].description}
                                    image={section_data[1].image}
                                />
                            </div>
                            <div className="col-sm-12 tiles_main_container">
                                {/* <div className="col-sm-6 tiles_container"> */}
                                <TilesContainer />
                                {/* </div> */}
                            </div>
                            <div className="col-sm-12">
                                <SectionHeading
                                    heading={section_data[2].heading}
                                    headingStyle={section_data[2].headingStyle}
                                />
                                <div className="col-sm-12 card_without_heading">
                                    <div className="col-sm-6 card_left">
                                        <CardContainer
                                            heading={card_data[2].heading}
                                            headingStyle={card_data[2].headingStyle}
                                            title={card_data[2].title}
                                            titleStyle={card_data[2].titleStyle}
                                            views={card_data[2].views}
                                            caption={card_data[2].caption}
                                            userName={card_data[2].userName}
                                            userTime={card_data[2].userTime}
                                            image={card_data[2].image}
                                        />
                                    </div>
                                    <div className="col-sm-6 card_right ">
                                        <CardContainer
                                            heading={card_data[3].heading}
                                            headingStyle={card_data[3].headingStyle}
                                            title={card_data[3].title}
                                            titleStyle={card_data[3].titleStyle}
                                            views={card_data[3].views}
                                            caption={card_data[3].caption}
                                            userName={card_data[3].userName}
                                            userTime={card_data[3].userTime}
                                            image={card_data[3].image}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12 card_without_heading">
                                    <div className="col-sm-6 card_left">
                                        <CardContainer
                                            heading={card_data[4].heading}
                                            headingStyle={card_data[4].headingStyle}
                                            title={card_data[4].title}
                                            titleStyle={card_data[4].titleStyle}
                                            views={card_data[4].views}
                                            caption={card_data[4].caption}
                                            userName={card_data[4].userName}
                                            userTime={card_data[4].userTime}
                                            image={card_data[4].image}
                                            description={card_data[4].description}
                                        />
                                    </div>
                                    <div className="col-sm-6 card_right ">
                                        <TilesListContainer />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <SectionHeading
                                    heading={section_data[3].heading}
                                    headingStyle={section_data[3].headingStyle}
                                />
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qvl7kG82EfI" title="video" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>


                                <div className="col-sm-12 section_data">
                                    <div className="col-sm-4">
                                        <span id={section_data[3].titleStyle}>{section_data[3].title}</span>
                                        <span className="banner_views"><i className="fas fa-eye"></i>&nbsp;{section_data[3].views}</span>
                                    </div>
                                    <div className="offset-sm-1 col-sm-10 offset-sm-1">
                                        <p className="banner_caption section_caption">{section_data[3].caption}</p>
                                        <span className="section_user">{section_data[3].userName}</span> <span className="section_user">|</span> <span className="section_user">{section_data[3].userTime}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 tiles_main_container">
                                {/* <div className="col-sm-6 tiles_container"> */}
                                <TilesContainer />
                                {/* </div> */}
                            </div>
                        </div>

                        <div className="col-sm-4 right_parent">
                            <Social />
                            <div className="col-sm-10 popular_post" >
                                <h5 className="post_heading">Popular Post</h5>
                                <PopularPosts />
                                <div className="col-sm-12 post_list">
                                    <TilesListContainer />
                                </div>
                            </div>
                            {images.map(e => (
                                <div key={e.key} className="col-sm-10 img_container" style={{ background: e.style }}>
                                    <div className="offset-sm-1 col-sm-10 offset-sm-1 img_text">
                                        <h3 className="img_heading">{e.caption}</h3>
                                        {/* <img src={e.logo} alt="insta logo" className="col-sm-4" /> */}
                                        <p className="img_para">{e.text}</p>
                                    </div>
                                </div>
                            ))}


                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Middle;
