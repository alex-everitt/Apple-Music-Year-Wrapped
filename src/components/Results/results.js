import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper'
import Calculator from '../Calculator/calculator'
import Wrapped from '../Wrapped/wrapped'

//This component uses the methods of the "Calculator" object to determine important stats
  //and then uses that info to generate the Wrapped banner
class Results extends Component {
  constructor(props){
    super(props)
    this.state = {
      playData : props.playData,
      topSongs: [],
      topSongPlays: [],
      topArtists: [],
      topArtistPlays: [],
      totalPlaytime: []
    }
  }
  componentDidMount(){
    console.log("New data set has been loaded")
    var data
    data = this.state.playData

    Calculator.getWrappedStats(data, results =>{
      this.setState({
        topSongs: results.topSongs,
        topSongPlays: results.topSongPlays,
        topArtists: results.topArtists,
        topArtistPlays: results.topArtistPlays,
        totalPlaytime: results.total_playtime
      })
    })

  }


  render() {
    if(this.state.topSongs == null || this.state.topSongs.length < 1){
      return(
        <Paper>
          <Typography variant='display2' align='center' gutterBottom>
           Data is loading...
           </Typography>
         </Paper>
      )
    }

    return (
      <Wrapped topSongs={this.state.topSongs} topSongPlays={this.state.topSongPlays} topArtists={this.state.topArtists} topArtistPlays={this.state.topArtistPlays} totalPlaytime={this.state.totalPlaytime}>
      </Wrapped>
    );
  }
}

export default Results;
