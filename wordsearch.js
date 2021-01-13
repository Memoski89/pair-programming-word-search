const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    } 
    let backwardsHor =[]

    for(let b = horizontalJoin.length-1; b >= 0; b-- ) {
        backwardsHor.push(horizontalJoin[b])
            for (p of backwardsHor){
                if(p.includes(word)) return true;
            
            }
            
        }
    
    let verticalWord = transpose(letters);
    const verticalJoin = verticalWord.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    let backwardsVer =[]
    for(let v = verticalJoin.length - 1; v >= 0; v --){
        backwardsVer.push(verticalJoin[v])
        for(q of backwardsVer){
            if(p.includes(word)) return true
        }
    }
    

    // const backwardsHorizontalJoin = letters.map(ls => ls.join(''))

       return false;
};

// const wordSearch = function(matrix) {
//     return matrix[0].map((col, index) => matrix.map((row)=> row[index]))
    
//     };


const transpose = function(matrix) {
    const newMatr = [];
    for (let x = 0; x < matrix[0].length; x++) { // this is looping through the values of the first array
      newMatr.push([]); // pushing to new array obj when out of for loop below
      for (let y = 0; y < matrix.length; y++){ 
        newMatr[x].push(matrix[y][x]) // pushes the values to the new key
      }
    }
    return newMatr;
  };

module.exports = wordSearch