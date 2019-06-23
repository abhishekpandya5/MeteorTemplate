import React, { Component } from 'react'
import { banner } from '../Data';
import BannerItems from './BannerItems';

class Banner extends Component {
    render() {
        return (
            <div className="row">
                {
                    banner.map(e => (
                       <BannerItems
                            key={e.key}
                            style={e.style}
                            titleStyle={e.titleStyle}
                            title={e.title}
                            views={e.views}
                            caption={e.caption}
                            userName={e.userName}
                            userTime={e.userTime}
                       />
                    ))
                }
            </div>
        )
    }
}
export default Banner;