import React, { Component } from 'react'

class CardContainer extends Component {
    render() {
        const { title, titleStyle, views, caption,
            userName, userTime, description, image, alt } = this.props;
        return (
            <>
                <div className="col-sm-12" >
                    <img src={image} alt={alt} className="col-sm-12" />
                </div>
                <div className="col-sm-12 section_data">
                    <div className="col-sm-7">
                        <span id={titleStyle}>{title}</span>
                        <span className="banner_views"><i className="fas fa-eye"></i>&nbsp;{views}</span>
                    </div>
                    <div className="offset-sm-1 col-sm-10 offset-sm-1">
                        <p className="banner_caption section_caption">{caption}</p>
                        <span className="section_user">{userName}</span> <span className="section_user">|</span> <span className="section_user">{userTime}</span>
                        <p className="section_des">{description}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default CardContainer;
