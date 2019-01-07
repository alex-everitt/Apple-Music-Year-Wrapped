import React, { Component } from 'react';
// import './App.css';

import FileReader from './components/FileReader/fileReader.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count : 0,
      playData : []
    }
      this.handlePlayData = this.handlePlayData.bind(this)
  }

  handlePlayData = (data) => {
    console.log("New data set has been loaded")
    this.setState({playData: data})
    //console.log(this.state.playData[5])

    var aggregatedByArtist = []// {}
    var aggregatedBySong = []
    var total_playtime_ms = 0.0

    for(var i=0;i<data.length;i++){
      var artist_already_exists = false
      var song_already_exists = false
      var playback_timestamp = new Date(data[i]["end_time"])

          if(playback_timestamp.getFullYear() === 2018){
            var playTime = Math.abs(parseFloat(data[i]["time_played"]))

            if( !isNaN(playTime)){
              total_playtime_ms = total_playtime_ms + playTime

              for(var j=0;j<aggregatedByArtist.length;j++){//Check if this artist has been previously added to the data base
                if(aggregatedByArtist[j][0] === data[i]["artist_name"]){
                  aggregatedByArtist[j][1] = aggregatedByArtist[j][1] + 1
                  artist_already_exists = true
                }
              }

              if(artist_already_exists === false){
                aggregatedByArtist.push([data[i]["artist_name"], 1])
              }

              for(var j=0;j<aggregatedBySong.length;j++){//Check if this artist has been previously added to the data base
                var name = data[i]["song_name"] + " by " + data[i]["artist_name"]
                if(aggregatedBySong[j][0] === name){
                  aggregatedBySong[j][1] = aggregatedBySong[j][1] + 1
                  song_already_exists = true
                }
              }
              if(song_already_exists === false){
                var name = data[i]["song_name"] + " by " + data[i]["artist_name"]
                aggregatedBySong.push([name, 1])
              }
              //data[i]["artist_name"]
              // if (data[i]["artist_name"] in aggregatedByArtist){
              //   aggregatedByArtist[data[i]["artist_name"]] = aggregatedByArtist[data[i]["artist_name"]] + 1
              // }
              // else{
              //   aggregatedByArtist.push([data[i]["artist_name"], 1]) //[data[i]["artist_name"]] = 1
              // }
          }
        }
    }
    //console.log(aggregatedByArtist["03 Greedo"])
    //console.log(total_playtime)
    //var total_playtime_mins = total_playtime /(1000*60)
    aggregatedByArtist = aggregatedByArtist.sort(function(a,b){
      if(a[1]>b[1]) return -1
      if(a[1]<b[1]) return 1
      return 0
      //return a[1] - b[1]
    })
    aggregatedBySong = aggregatedBySong.sort(function(a,b){
      if(a[1]>b[1]) return -1
      if(a[1]<b[1]) return 1
      return 0
      //return a[1] - b[1]
    })
    var total_playtime_min = total_playtime_ms /(1000*60)
    var playback_hours = total_playtime_min / 60
    console.log(playback_hours)
    console.log("You listened to: " + total_playtime_min + " minutes of music this year")
    console.log(aggregatedByArtist)
    console.log(aggregatedBySong)

  }

  render() {
    return (
          <div>
          <h1> Apple Music 2018 Playback Stats Wrapped</h1>
            <FileReader updatePlayData = {this.handlePlayData}/>
          </div>
    );
  }
}

export default App;
