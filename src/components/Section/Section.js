import React, { Component } from 'react';
import SectionHeading from './SectionHeading';

class Section extends Component {
    render() {
        const { heading, headingStyle, title, titleStyle, views,
            caption, userName, userTime, description, image , alt} = this.props;
        return (
            <>
             {/* <div className="wrapper">
                 <div className="row section_component">
                    <div className="col-sm-7"> */}
                       <SectionHeading 
                            heading={heading}
                            headingStyle={headingStyle}
                       />
                        <div className="col-sm-12" >
                            <img src={image} alt={alt} className="col-sm-12 img-responsive" />
                        </div>  
                        <div className="col-sm-12 section_data">
                            <div className="col-sm-4">
                                <span id={titleStyle}>{title}</span>
                                <span className="banner_views"><i className="fas fa-eye"></i>&nbsp;{views}</span>
                            </div>
                            <div className="offset-sm-1 col-sm-10 offset-sm-1">
                                <p className="section_caption">{caption}</p>
                                <span className="section_user">{userName}</span> <span className="section_user">|</span> <span className="section_user">{userTime}</span>
                                <p className="section_des">{description}</p>
                            </div>
                        </div>
                    {/* </div>
            //      </div>
            //  </div> */}
            </>
        )
    }
}

export default Section;
