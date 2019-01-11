import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper'
import Calculator from '../Calculator/calculator'
import Wrapped from '../Wrapped/wrapped'

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
    //will have many state variables that will be used to determine what will be rendered,
      //inside of componentDidMount we will call the methods to calculate stuff and set the state variables
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

// <Paper>
//   <div class="row">
//       <div class="col-sm-12">
//           <Typography variant='display2' align='center' gutterBottom>
//            Your 2018 Wrapped
//            </Typography>
//       </div>
//   </div>
//     <div class="row">
//       <div class="col-sm-6">
//       Your top song is {this.state.topSongs[1]}
//       </div>
//       <div class="col-sm-6">
//       Your top artist is {this.state.topArtists[0]}
//       </div>
//     </div>
// </Paper>
export default Results;
