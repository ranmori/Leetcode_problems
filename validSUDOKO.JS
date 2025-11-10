/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // make a set for all 
    let row= Array.from({length:9}, ()=> new Set())
    let col= Array.from({length:9}, ()=> new Set())
    let boxes= Array.from({length:9}, ()=> new Set())
    // loop through each row
    for(let i=0; i<9;i++)
    {
        // loop through each col
        for(let j=0; j<9;j++){
            // val
            let val= board[i][j];
            // base case
            if(val===".") continue;
            // figure out the 3*3
            // the tricky part 
            // 9 subboxes and there is 3 rows and cols in each 
            // why multiply by 3 each band contains 3 boxes 

            let box = Math.floor(i/3)*3 + Math.floor(j/3)
            // if all has duplicates return flase 
            if(row[i].has(val) || col[j].has(val) || boxes[box].has(val)){
                return false
            }
            // keep building the set
            row[i].add(val);
        col[j].add(val);
        boxes[box].add(val)
        }
        
    }
    // no duplicates yeey!!!!
    return true;
    
};
