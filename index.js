function superbowlWin(record){
    // console.log(record)
    const foundSeason = record.find(function(season){
        return season.result === "W"
    })
    if(foundSeason){
    return foundSeason.year
    }
}
//if found season exists then we will return found season ^
