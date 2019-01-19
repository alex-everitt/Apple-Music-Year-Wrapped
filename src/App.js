import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './App.css';

import Home from './components/Home/home.js';
import Results from './components/Results/results.js';

//This is the outermost parent component, it calls the "Home" page component if data hasn't been uploaded
  //If data has been uploaded, it calls the "Results" component which calculates stats and outputs the Wrapped banner
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      playData : []
    }
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
