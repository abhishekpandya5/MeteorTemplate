import React, { Component } from 'react';
import { tiles_data } from '../Data';
import TilesList from './TilesList';

class TilesListContainer extends Component {

    render() {
        return (
            <>
                {
                    tiles_data.map((e, i) => {
                        return (
                            (i < tiles_data.length) ? <div className="col-sm-12 inside_tiles"key={e.alt}>
                                <TilesList
                                    image={e.image}
                                    alt={e.alt}
                                    caption={e.caption}
                                    userName={e.userName}
                                    userTime={e.userTime}
                                />
                            </div> : <div></div>
                        )

                    })

                }
            </>
        )
    }
}

export default TilesListContainer;
