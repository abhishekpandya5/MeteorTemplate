import React, { Component } from 'react';

export class BannerItems extends Component {
    render() {
        const {alt, style, title, titleStyle, views, caption, userName, userTime} = this.props;
        return (
            <div key={alt} style={{ background: style }} className="col-sm banner_container">
                <div className="banner_img_desp">
                    <span className="banner_title" id={titleStyle}>{title}</span>
                    <span className="banner_views"><i className="fas fa-eye"></i>&nbsp;{views}</span>
                    <p className="banner_caption">{caption}</p>
                    <span>{userName}</span> | <span>{userTime}</span>
                </div>
            </div>
        )
    }
}

export default BannerItems;
