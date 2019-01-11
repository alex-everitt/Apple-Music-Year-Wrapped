import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from '../../wrapped_background.jpg';

const box_style = {
  padding: '30px'
};

const paper_style = {
  padding: '30px',
  backgroundImage: `url(${Image})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

const text_style = {
  color: 'white'
};

class Wrapped extends Component {
  constructor(props){
    super(props)
    this.state = {
      playData : props.playData,
      topSongs : [],
      topArtists : []
    }
  }

  render() {
    console.log(this.props.totalPlaytime)
    var topDivs = []
            for (let index = 0; index < 10; index++) {
              if(index === 0){
                let div = <Grid container spacing={8} key={index}>
                <Grid item xs ={4}>
                    <Typography variant='h2' align='left' gutterBottom style={text_style}>
                     {Math.floor(this.props.totalPlaytime)}
                     </Typography>
                </Grid>
                <Grid item xs ={4}>
                    <Typography variant='subtitle1' align='left' gutterBottom style={text_style}>
                     {index+1}. {this.props.topSongs[index]} ({this.props.topSongPlays[index]} plays)
                     </Typography>
                </Grid>
                <Grid item xs ={4}>
                    <Typography variant='subtitle1' align='left' gutterBottom style={text_style}>
                     {index+1}. {this.props.topArtists[index]} ({this.props.topArtistPlays[index]} plays)
                     </Typography>
                </Grid>
              </Grid>
              topDivs.push(div)
              }
              else{
                  let div = <Grid container spacing={8} key={index}>
                  <Grid item xs ={4}>

                  </Grid>
                  <Grid item xs ={4}>
                      <Typography variant='subtitle1' align='left' gutterBottom style={text_style}>
                       {index+1}. {this.props.topSongs[index]} ({this.props.topSongPlays[index]} plays)
                       </Typography>
                  </Grid>
                  <Grid item xs ={4}>
                      <Typography variant='subtitle1' align='left' gutterBottom style={text_style}>
                       {index+1}. {this.props.topArtists[index]} ({this.props.topArtistPlays[index]} plays)
                       </Typography>
                  </Grid>
                </Grid>
                topDivs.push(div)
              }
              //topDivs.push(div)
    }

    return (
      <div style={box_style}>
        <Paper style={paper_style}>
          <Grid id="top-row" container spacing={8}>
            <Grid item xs ={12}>
                  <Typography variant='h3' align='center' gutterBottom style={text_style}>
                   Your 2018 Wrapped
                   </Typography>
            </Grid>
          </Grid>

          <Grid id="header-row" container spacing={8}>
          <Grid item xs ={4}>
            <Typography variant='h6' align='center' gutterBottom style={text_style}>
              I Listened To
            </Typography>
          </Grid>
            <Grid item xs ={4}>
                  <Typography variant='h6' align='center' gutterBottom style={text_style}>
                   Your Top Songs
                   </Typography>
            </Grid>
            <Grid item xs ={4}>
                  <Typography variant='h6' align='center' gutterBottom style={text_style}>
                   Your Top Artists
                   </Typography>
            </Grid>
          </Grid>

          {topDivs}


        </Paper>
      </div>
    );
}

    // <Grid id="info-row" container spacing={8}>
    //   <Grid item xs ={4}>
    //         <Typography variant='subtitle1' align='left' gutterBottom>
    //          {this.props.topSongs[1]} ({this.props.topSongPlays[1]} plays)
    //          {this.props.topSongs[2]} ({this.props.topSongPlays[2]} plays)
    //
    //          </Typography>
    //   </Grid>
    //   <Grid item xs ={4}>
    //         <Typography variant='subtitle1' align='left' gutterBottom>
    //          {this.props.topArtists[0]} ({this.props.topArtistPlays[0]} plays)
    //          {this.props.topArtists[1]} ({this.props.topArtistPlays[1]} plays)
    //          </Typography>
    //   </Grid>
    //   <Grid item xs ={4}>
    //
    //   </Grid>
    // </Grid>

  }
//}
export default Wrapped;
