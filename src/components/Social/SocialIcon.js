import React, { Component } from 'react';

class SocialIcon extends Component {
    render() {
        const { image, alt, heading, text, cls} = this.props;
        return (
            // <div className="col-sm-4 social_container">
            //     <div className="social_circle">
            //     <i class={this.props.class}></i>
            //     </div>
            // </div>
            <div className="col-sm-3 social_box" id={cls}>
                <img src={image} alt={alt} className="col-sm-5"/>
                <p className="social_format">{heading}</p>
                <p className="social_format social_text">{text}</p>
            </div>
        )
    }
}

export default SocialIcon;
