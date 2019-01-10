import React, { Component } from 'react';

import ReactFileReader from 'react-file-reader';

class FileReader extends Component {
  constructor(props){
    super(props)
    this.state = {
      count : 0
    }
    this.fileHandler = this.fileHandler.bind(this)
  }

  fileHandler = (files) => {
  //Recieve and process the file passed via html
    //console.log("File recieved")
    let file = files[0]
    let reader = new window.FileReader();
    reader.readAsText(file)

    reader.onloadend =  () =>{
      var data = []
      var lines = reader.result.split('\n')

        for (var i=1;i< lines.length;i++){
          var line = lines[i].split(',')
          var entry = {
            "end_time" : line[1],
            "song_name": line[2],
            "artist_name": line[3],
            "container": line[4],
            "time_played": line[6],
            "song_duration": line[7],
            "end_reason": line[9],
            "playback_source":line[22]
          }
          data.push(entry)
        }
        //console.log("File parsed successfully")
        //console.log(data[5])
        this.props.updatePlayData(data)
    }
  }

  render() {
    return (
      <ReactFileReader fileTypes={".csv"} handleFiles={this.fileHandler}>
        <button className='btn'>Upload</button>
      </ReactFileReader>

    );
  }
}
export default FileReader;
