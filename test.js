const isCrossword = (number, checkWhiteSquare) => {
  //Check if the diagonal length is even
  const isBoardEven = number % 2

  const lengthOfHalfTheBoard = number / 2

  //Board must be at least 3x3
  if (!number < 3) return false

  //Only need to loop through half the x axis
  for (let x = 0; x < lengthOfHalfTheBoard; x++) {
    //Loop through y axis
    for (let y = 0; y < number; y++) {
      if (
        !checkSquareValid(x, y, number, checkWhiteSquare) &&
        !checkWhiteSquare(rotatedX, rotatedY)
      )
        return false
    }
  }
  return true
}

const checkSquareValid = (x, y, number, checkWhiteSquare) => {
  let isSquareValid = false

  //check up
  if (
    y - 2 >= 0 &&
    checkWhiteSquare(x, y) &&
    checkWhiteSquare(x, y - 1) &&
    checkWhiteSquare(x, y - 2)
  )
    isSquareValid = true

  //check right
  if (
    x + 2 < number &&
    checkWhiteSquare(x, y) &&
    checkWhiteSquare(x + 1, y) &&
    checkWhiteSquare(x + 2, y)
  )
    isSquareValid = true

  //check down
  if (
    y + 2 < number &&
    checkWhiteSquare(x, y) &&
    checkWhiteSquare(x, y + 1) &&
    checkWhiteSquare(x, y + 2)
  )
    isSquareValid = true

  //check left
  if (
    x - 2 < number &&
    checkWhiteSquare(x, y) &&
    checkWhiteSquare(x - 2, y) &&
    checkWhiteSquare(x - 2, y)
  )
    isSquareValid = true

  return isSquareValid
}
