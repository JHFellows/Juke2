import React, {Component} from 'react';
import Artists from "./Artists";
import axios from 'axios';


export default class Artist extends Component {
  constructor(props){
    super(props);
    this.state = {
      artist: {}
    };
    //console.log("PROPS", props)

  }

  componentDidMount () {
    const artistId = this.props.routeParams.artistId
    // const selectArtist = this.props.selectArtist
    console.log(artistId)
      axios.get(`/api/artists/${artistId}`)
      .then(res => res.data)
      .then(artist => this.setState({artist: artist}));

    // selectArtist(artistId);
  }

  render(){
    console.log(this.state.artist)
    return (
    <div>
      <h3>{this.state.artist.name}</h3>
      <h4>ALBUMS</h4>
      <h4>SONGS</h4>
    </div>
  )
  }

}
