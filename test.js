const isCrossword = (number, checkWhiteSquare) => {

  //Board must be at least 5x5
  if (number < 5) return false

  const lengthOfHalfTheBoard = number / 2

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
