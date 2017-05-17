import React from 'react';
import { Router, Route, IndexRedirect, Link } from 'react-router';

const Artists = (props) => {

const artists = props.artists;
console.log('artists', props);
const selectedArtist = props.selectArtist;

return (
    <div>
  <h3>Artists</h3>
    <div className="list-group">
    {
      artists && artists.map(artist => {
        return (
          <div className="list-group-item" key={artist.id}>
            {/* determine where to actually Link to later! */}
            <Link to="">{ artist.name }</Link>   
          </div>
        )    
      })
    }
  </div>
</div>
)
}

export default Artists;