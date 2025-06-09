const isValidSudoku = (board) => {
  const seenSet = new Set();

  for(let row = 0; row < 9; row++) {
     for(let col = 0; col < 9; col++) {
      const value = board[row][col];

      if(value === '.') continue

      const rowKey = `row-${row}-${value}`
      const colKey = `col${col}-${value}`
      const boxKey = `box${Math.floor(row / 3) * 3 + Math.floor(col / 3)}-${value}`

      if(seenSet.has(rowKey)) {
        console.log(rowKey)
        console.log(`${row}-${col}-${value}`)
        return false 
      }

      if(seenSet.has(colKey)) {
        console.log(colKey)
        console.log(`${row}-${col}-${value}`)
        return false 
      }

      if(seenSet.has(boxKey)) {
        console.log(boxKey)
        console.log(`${row}-${col}-${value}`)
        return false 
      }

      seenSet.add(rowKey)
      seenSet.add(colKey)
      seenSet.add(boxKey)
    }
  }
  return true
};
