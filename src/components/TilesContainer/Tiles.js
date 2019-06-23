import React, { Component } from 'react'

class Tiles extends Component {
    render() {
        const { image, alt, caption, userName, userTime } = this.props;
        return (
            <>
                {/* <div className="col-sm-3"> */}
                    {/* <div className="col-sm-3" > */}
                        <img src={image} alt={alt} className="col-sm-3 responsive" />
                    {/* </div> */}
               
                <div className="col-sm-9">
                    <div className="offset-sm-1 col-sm-10 offset-sm-1">
                        <p className="tiles_caption">{caption}</p>
                        <span className="section_user">{userName}</span> <span className="section_user">|</span> <span className="section_user">{userTime}</span>
                    </div>
                </div>
            </>
            // </div>

        )
    }
}

export default Tiles
