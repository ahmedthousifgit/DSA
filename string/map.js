var areOccurrencesEqual = function(s) {
    let mapy = new Map()
    for(let i=0;i<s.length;i++){
        let val = s.charAt(i);
        let freq = map.get(val);
        map.set(val, freq ? freq +1 :1 )
    }
    let set = new Set()
    for ([, val] of map){
        set.add(val);
    }
    return set.size ===1
};