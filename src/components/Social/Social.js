import React, { Component } from 'react';
import { social_data } from "../../components/Data";
import SocialIcon from './SocialIcon';

class Social extends Component {
    render() {
        return (
            <div className="col-sm-12 social_container">
                {
                    social_data.map(e => (
                        <SocialIcon
                            key={e.alt}
                            image={e.image}
                            cls={e.cls}
                            alt={e.alt}
                            heading={e.heading}
                            text={e.text}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Social;
