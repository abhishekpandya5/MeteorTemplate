import React, { Component } from 'react'

class SectionHeading extends Component {
    render() {
        const { heading, headingStyle } = this.props;
        return (
            <div className="col-sm-12 outline">
                <div className="col-sm-4 section">
                    <h5 className={headingStyle}>{heading}</h5>
                </div>
                <div className="offset-sm-4 col-sm-4 section mob_links ">
                    <ul className="section_links">
                        <li className="switched section_li">WORLD</li>
                        <li className="section_li">PEOPLE</li>
                        <li className="section_li">FOOD</li>
                        <li className="section_li">ANIMALS</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default SectionHeading;
