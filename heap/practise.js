function lastVisitedInteger(words){
    let prevCount =0
    for(let i=0;i<words.length;i++){
        if(words[i]==='prev'){
            return words[i-1]
            prevCount += 1
        }
        if(words[i]==='prev' && prevCount>1){
            k= [words[i-1],words[i-2]] = [words[i-2],words[i-1]] 
            return k-1 
        }
    }
}