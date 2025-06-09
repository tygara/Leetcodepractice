/*
  Determine if a 9x9 sudoku board is valid. Only the filled cells need to be validated according to
  the following rules:

  1.) Each row must contain the digits 1-9 without repetition
  2.) Each column must contain the digits 1-9 without repeition
  3.) Each of the nine 3x3 sub boxes of the grid must contain the digits 1-9 no repetition
  
  * A Sudoku board (partially filed) could be vaild but is not necessarily solveable.
  * Only the filled cells needs to be validated according to the mentioned rules.


Example 1:

[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"] Output = true

Example 2:
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]] Ouput = false

Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. 
             Since there are two 8's in the top left 3x3 sub-box, it is invalid.

const boxIndex = Math.floor(row / 3)  * 3 + Math.floor(col / 3);
*/
// const valid = (board) => {
//   const seen = new Set();
//
//   for(let row = 0; row < 9; row++) {
//     for (col = 0; col < 9; col++) {
//       const value = board[row][col];
//       if(value === '.${row}-${col}`)') continue;
//       const rowKey = `row-${row}-${value}`;
//       console.log(rowKey)
//       const colKey = `col-${col}-${value}`;
//       console.log(colKey)
//       const boxKey = `box-${Math.floor(row / 3)}-${Math.floor(col / 3)}-${value}`;
//       console.log(boxKey)
//       console.log('BREAK')
//       console.log('-----------')
//       if(seen.has(rowKey)) {
//         console.log('Duplicate rowKey:', rowKey);
//         console.log(`----------${value}-${row}-${col}`);
//         return false;
//       }
//       if(seen.has(colKey)) {
//         console.log('Duplicate colKey:', colKey);
//         console.log(`----------${value}-${row}-${col}`);
//         return false;
//       }
//       if(seen.has(boxKey)) {
//         console.log('Duplicate boxKey:', boxKey);
//         console.log(`----------${value}-${row}-${col}`);
//         return false;
//       }
//       seen.add(rowKey);
//       seen.add(colKey);
//       seen.add(boxKey);
//     }
//   }
//   return true;
// };

// Init a new set 
// Init a row loop
// Init a col loop
// Init value to store board[row][col]
// Init rowKey to row-value
// Init colKey to col-value
// Check to see if seen has
// - rowKey | colKey | boxKey
// - if any of these are true we return false
// - This means that we have duplicates and 
// if none are true we want to
// - add.(rowKey)
// - add.(colKey)
// - add.(boxKey)
// close with return statement true meaning we have reached the end of the 9x9 square

const valid = (board) => {
  const seen = new Set();

  for(let row = 0; row < 9; row++) {
    for(let col = 0; col < 9; col++) {
      const value = board[row][col]

      if(value === '.') continue
      
      const rowKey = `row-${row}-${value}`;
      console.log(rowKey);

      const colKey = `col${col}-${value}`;
      console.log(colKey);

      const boxKey = `box-${Math.floor(row / 3) * 3 + Math.floor(col / 3)}-${value}`;
      console.log(boxKey);
      console.log(' ')

      if(seen.has(rowKey)) {
        console.log(`Duplicate:`, `${value}-${row}-${col}`)
        return false
      }

      if(seen.has(colKey)) {
        console.log(`Duplicate:`, `${value}-${row}-${col}`)
        return false 
      }

      if(seen.has(boxKey)) {
        console.log(boxKey)
        console.log(`Duplicate:`, `${row}-${col}-${value}`)
        return false
      }

      seen.add(rowKey)
      seen.add(colKey)
      seen.add(boxKey)
    }
  }
  return true
};

// [0,0][0,1][0,2]
// [1,0][1,1][1,2]
// [2,0][2,1][2,2]

const board1 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]


console.log(valid(board1));
