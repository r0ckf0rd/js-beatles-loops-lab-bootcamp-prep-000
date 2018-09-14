//The Beatles Play

function theBeatlesPlay(musicianArray, instrumentArray) {
  var playsArray = []
  for (var i = 0; i < musicianArray.length; i++) {
  playsArray[i] = `${musicianArray[i]} plays ${instrumentArray[i]}`
  }
  return playsArray
}


//John Lennon Facts
function johnLennonFacts(factsArray) {
  var excitedFactsArray = []
  for (var i = 0; i < factsArray.length; i++) {
    excitedFactsArray[i] = `${factsArray[i]}!!!`
  }
  return excitedFactsArray
}