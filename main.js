function createGameBoard(){
    let gameBoard = []
    for (let i=0; i <= 7; i++){
        for (let j=0; j<= 7; j++){
            const newSquare = [i,j]
            gameBoard.push(newSquare)
        }
    }
    return gameBoard
}

function knightMoves(start, end){
    const gameBoard = createGameBoard()
    let possibleMoves = []
    let newMove = [(start[0]+2), (start[1]-1)]
    possibleMoves.push(newMove)
    newMove = [(start[0]+2), (start[1]+1)]
    possibleMoves.push(newMove)
    newMove = [(start[0]-2), (start[1]+1)]
    possibleMoves.push(newMove)
    newMove = [(start[0]-2), (start[1]-1)]
    possibleMoves.push(newMove)
    newMove = [(start[0]+1), (start[1]+2)]
    possibleMoves.push(newMove)
    newMove = [(start[0]+1), (start[1]-2)]
    possibleMoves.push(newMove)
    newMove = [(start[0]-1), (start[1]+2)]
    possibleMoves.push(newMove)
    newMove = [(start[0]-1), (start[1]-2)]
    possibleMoves.push(newMove)

    for (let i=0; i < possibleMoves.length; i++){
        if (possibleMoves[i][0] < 0 || possibleMoves[i][0] > 7 || possibleMoves[i][1] < 0 || possibleMoves[i][1] > 7){
            possibleMoves.splice(i, 1)
            i--
        }
    }

    console.log(possibleMoves)
}

knightMoves([0,0])