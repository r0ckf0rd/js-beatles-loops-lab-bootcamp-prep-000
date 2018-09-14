//The Beatles Play

function theBeatlesPlay(musicianArray, instrumentArray) {
  var playsArray = []
  for (var i = 0; i < musicianArray.length; i++) {
  playsArray[i] = `${musicianArray[i]} plays ${instrumentArray[i]}`
  }
  return playsArray
}


