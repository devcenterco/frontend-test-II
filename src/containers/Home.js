import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import spotifyLogo from '../assets/images/spotify.png';
import giphyLogo from '../assets/images/giphy.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="home">
        <div className="content">
          <div className="intro">
            <p>Welcome, kindly click on any of the icons to navigate</p>
          </div>
          <div className="nav_items">
            <ul>
              <li>
                <Link to="/spotify">
                  <img src={ spotifyLogo } alt="Spotify" />
                </Link>
              </li>
              <li>
                <Link to="/giphy">
                  <img src={ giphyLogo } alt="Giphy" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
