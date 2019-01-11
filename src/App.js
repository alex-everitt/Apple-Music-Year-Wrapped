import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import Home from './components/Home/home.js';
import Results from './components/Results/results.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      playData : []
    }
      //this.handlePlayData = this.handlePlayData.bind(this)
  }

  render() {
    if(this.state.playData.length > 1){
      return (
        <div>

           <Results playData={this.state.playData}>
           </Results>
         </div>
       );
    }
    else{
      return (
            <div>
              <Home updatePlayData={data=>{
                this.setState({playData: data})
              }}>
              </Home>
            </div>
      );
    }

  }
}

export default App;
