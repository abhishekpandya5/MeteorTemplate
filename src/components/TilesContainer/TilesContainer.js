import React, { Component } from 'react';
import Tiles from './Tiles';
import { tiles_data } from '../Data';

class TilesContainer extends Component {
    render() {
        return (
            <>
                {tiles_data.map(e => (
                    <div key={e.alt} className="col-sm-6 inside_tiles">
                        <Tiles
                            image={e.image}
                            alt={e.alt}
                            caption={e.caption}
                            userName={e.userName}
                            userTime={e.userTime}
                        />
                    </div>
            
                    ))
                }
           </>
        )
    }
}

export default TilesContainer;
