import React from 'react';
import { Router, Route, hashHistory, IndexRedirect, Link } from 'react-router';
import Artists from './Artists';

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;
  

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <a href="#" onClick={deselectAlbum}>ALBUMS</a>
        </h4>
      </section>
        <section>
          <h4 className="menu-item">
            <Link to='/artists'>ARTISTS</Link>
          </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
