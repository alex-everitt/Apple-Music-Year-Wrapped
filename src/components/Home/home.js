import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CSVReader from 'react-csv-reader'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      playData : []
    }
  }

  logError = (err) =>{
    console.log(err)
  }

  render() {
    return (
      <div>
        <Typography variant='display1' align='center' gutterBottom>
         Apple Music 2018 Playback Stats Wrapped
         </Typography>

        <CSVReader
          cssClass="csv-reader-input"
          label="Select your 'Apple Music Play Activity.csv' file"
          onFileLoaded={this.props.updatePlayData}
          onError={this.logError}
          inputId="ObiWan"
          inputStyle={{color: 'red'}}
      />
    </div>
    );
  }
}
export default Home;
