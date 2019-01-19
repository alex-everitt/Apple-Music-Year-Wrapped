import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CSVReader from 'react-csv-reader'
import Paper from '@material-ui/core/Paper';
import Sample_Output from '../../sample_output.png';

const home_paper_style = {
  padding: '20px',
  backgroundColor: '#f2f2f2'
};
//This component serves as the landing page
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
      <Paper style ={home_paper_style}>
        <Typography variant='h3' align='center' gutterBottom>
         Apple Music Year Wrapped
         </Typography>
         1. Download your Apple Music Usage Data from https://privacy.apple.com/<br/>
         <img src={window.location.origin + '/folder_layout.png'} style={{marginLeft: 'auto',
         marginRight: 'auto',
         maxHeight: '30%',
         maxWidth: '60%'}} />

        <CSVReader
          cssClass="csv-reader-input"
          label="2. Select your 'Apple Music Play Activity.csv' file"
          onFileLoaded={this.props.updatePlayData}
          onError={this.logError}
          inputId="ObiWan"
          inputStyle={{color: 'red'}}
          />
      </Paper>

      <Paper style={home_paper_style}>

       3. After a few seconds you will recieve your Stats Wrapped!<br/>

        <img src={Sample_Output} style={{marginLeft: 'auto',
        marginRight: 'auto',
        maxHeight: '30%',
        maxWidth: '60%'}}/>
      </Paper>
    </div>
    );
  }
}
export default Home;
