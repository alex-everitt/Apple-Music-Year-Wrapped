import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Background from '../../wrapped_background.jpg';
import Album_Art from '../../wrapped_album_art.png';

import CardMedia from '@material-ui/core/CardMedia'

import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const box_style = {
  padding: '30px',
  height: '100%'
};

const paper_style = {
  padding: '10px',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%'
};

const text_style = {
  color: 'white'
};

const header_style = {
  color: 'black',
  backgroundColor: 'white',
  fontStyle: 'italic'
};

class Wrapped extends Component {
  constructor(props){
    super(props)
    this.state = {
      playData : props.playData,
      topSongs : [],
      topArtists : [],
      imageUrl:""
    }
  }

  render() {
    console.log(this.props.totalPlaytime)
    var songDivs = []
    var artistDivs = []
            for (let index = 0; index < 10; index++) {
              let songDiv= <ListItem>
                    <ListItemText disableTypography
                    primary={<Typography type="body1" style={{ color: '#FFFFFF' }}>{index+1}. {this.props.topSongs[index]} ({this.props.topSongPlays[index]} plays)</Typography>} />
             </ListItem>

             let artistDiv= <ListItem>
                   <ListItemText disableTypography
                   primary={<Typography type="body1" style={{ color: '#FFFFFF' }}>{index+1}. {this.props.topArtists[index]} ({this.props.topArtistPlays[index]} plays)</Typography>} />
            </ListItem>

              songDivs.push(songDiv)
              artistDivs.push(artistDiv)
              }
     var imageURL = "url('"+this.state.imageURL+"')";

    var image_style = {
      marginLeft: 'auto',
      marginRight: 'auto',
      height: '50%',
      width: '50%',
      backgroundImage: `url(${Album_Art})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    };

    return (
      <div style={box_style}>
        <Paper zDepth={3} style={paper_style}>
        <Grid id="top-row" container spacing={8} justify='center' alignItems="center" direction="column">
          <Grid item xs ={8}>
                <Typography variant='h3' align='center' gutterBottom style={header_style}>
                 Your 2018 Wrapped
                 </Typography>
          </Grid>
        </Grid>

        <Grid id="header-row" justify='center'container spacing={2}>
          <Grid item xs ={5}>
            <Typography variant='h4' align='center' gutterBottom style={text_style}>
              I Listened To
            </Typography>
            <Typography variant='h4' align='center' gutterBottom style={text_style}>
             {Math.floor(this.props.totalPlaytime)}
             </Typography>
             <Typography variant='h6' align='center' gutterBottom style={text_style}>
              minutes of music
              </Typography>

              <Paper style={image_style}>
              </Paper>

          </Grid>

          <Grid item xs ={4}>
                <Typography variant='h4' align='center' gutterBottom style={text_style}>
                 Your Top Songs
                 </Typography>
                 <List >
                  {songDivs}
                 </List>

          </Grid>

          <Grid item xs ={3}>
                <Typography variant='h4' align='center' gutterBottom style={text_style}>
                 Your Top Artists
                 </Typography>
                 <List >
                  {artistDivs}
                 </List>
          </Grid>
        </Grid>

        </Paper>
      </div>
    );
}

  }
//}
export default Wrapped;
