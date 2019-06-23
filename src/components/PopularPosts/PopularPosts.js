import React, { Component } from 'react';
import { popular } from '../Data';

class PopularPosts extends Component {
    render() {
        return (
            <>
            {
                popular.map(e => (
                    <div key={e.alt} style={{ background: e.style }} className="col-sm-12 postbox">
                        <div className="offset-sm-1 col-sm-10 offset-sm-1 post_desp">
                            <span className="post_title" id={e.titleStyle}>{e.title}</span>
                            <span className="post_views"><i className="fas fa-eye"></i>&nbsp;{e.views}</span>
                            <p className="post_caption">{e.caption}</p>
                            <span className="post_user">{e.userName} |</span> <span> {e.userTime}</span>
                        </div>
                    </div>
                ))
            }
            </>

        )
    }
}
export default PopularPosts;
