
class Calculator{

  static getWrappedStats(data, callback){
    //method to calculate top artists, songs and play time

    var aggregatedByArtist = []
    var aggregatedBySong = []
    var total_playtime_ms = 0.0

    for(var i=0;i<data.length;i++){
      var artist_already_exists = false
      var song_already_exists = false
      var playback_timestamp = new Date(data[i][1])//end time

          if(playback_timestamp.getFullYear() === 2018){
            var playTime = Math.abs(parseFloat(data[i][6]))//playback duration

            if( !isNaN(playTime)){
              total_playtime_ms = total_playtime_ms + playTime

              for(var j=0;j<aggregatedByArtist.length;j++){//Check if this artist has been previously added to the data base
                if(aggregatedByArtist[j][0] === data[i][3]){
                  aggregatedByArtist[j][1] = aggregatedByArtist[j][1] + 1
                  artist_already_exists = true
                }
              }

              if(artist_already_exists === false){
                aggregatedByArtist.push([data[i][3], 1])
              }

              for(j=0;j<aggregatedBySong.length;j++){//Check if this artist has been previously added to the data base
                var name = data[i][2] + " by " + data[i][3]
                if(aggregatedBySong[j][0] === name){
                  aggregatedBySong[j][1] = aggregatedBySong[j][1] + 1
                  song_already_exists = true
                }
              }
              if(song_already_exists === false){
                name = data[i][2] + " by " + data[i][3]
                aggregatedBySong.push([name, 1])
              }

          }
        }
    }

    aggregatedByArtist = aggregatedByArtist.sort(function(a,b){
      if(a[1]>b[1]) return -1
      if(a[1]<b[1]) return 1
      return 0
    })
    aggregatedBySong = aggregatedBySong.sort(function(a,b){
      if(a[1]>b[1]) return -1
      if(a[1]<b[1]) return 1
      return 0
    })
    var total_playtime_min = total_playtime_ms /(1000*60)

    //remove the blank entry that may exist in each array
    var blankSongIndex = -5;
    var blankArtistIndex =-5;
    for(j=0;j<aggregatedBySong.length;j++){
      if(aggregatedBySong[j][0]===" by "){
        blankSongIndex = j
        break
      }
    }
    if(blankSongIndex !==-5){
      aggregatedBySong.splice(blankSongIndex, 1)
    }
    for(j=0;j<aggregatedByArtist.length;j++){
      if(aggregatedByArtist[j][0]===""){
        blankArtistIndex = j
        break
      }
    }
    if(blankArtistIndex !== -5){
      aggregatedByArtist.splice(blankArtistIndex, 1)
    }

    console.log("You listened to: " + total_playtime_min + " minutes of music this year")
    console.log(aggregatedByArtist)
    console.log(aggregatedBySong)
    var topArtists = []
    var topArtistPlays = []
    var topSongs = []
    var topSongPlays = []

    for(j = 0; j<10;j++){
      topArtists.push(aggregatedByArtist[j][0]);
      topArtistPlays.push(aggregatedByArtist[j][1]);

      topSongs.push(aggregatedBySong[j][0]);
      topSongPlays.push(aggregatedBySong[j][1]);
    }

    var results = {
      topSongs: topSongs,
      topSongPlays: topSongPlays,
      topArtists: topArtists,
      topArtistPlays: topArtistPlays,
      total_playtime: total_playtime_min
    }

    callback(results)
  }
}


export default Calculator;
