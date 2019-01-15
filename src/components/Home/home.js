import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CSVReader from 'react-csv-reader'
import Paper from '@material-ui/core/Paper';
import Sample_Output from '../../sample_output.png';

const paper_style = {
  padding: '20px',
  backgroundColor: '#f2f2f2'
};

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
      <Paper zDepth={3} style ={paper_style}>
        <Typography variant='h3' align='center' gutterBottom>
         Apple Music Year Wrapped
         </Typography>
         <img src={window.location.origin + '/folder_layout.png'} style={{marginLeft: 'auto',
         marginRight: 'auto',
         height: '50%',
         width: '50%'}} />

        <CSVReader
          cssClass="csv-reader-input"
          label="Select your 'Apple Music Play Activity.csv' file"
          onFileLoaded={this.props.updatePlayData}
          onError={this.logError}
          inputId="ObiWan"
          inputStyle={{color: 'red'}}
          />
      </Paper>

      <Paper style={paper_style}>
      <Typography variant='body1' gutterBottom>
       After a few seconds you will recieve your Stats Wrapped!
       </Typography>
        <img src={Sample_Output} style={{marginLeft: 'auto',
        marginRight: 'auto',
        height: '50%',
        width: '50%'}}/>
      </Paper>
    </div>
    );
  }
}
export default Home;
