class Node{
    constructor(position, distanceFromStart, path){
        this.position = position
        this.distanceFromStart = distanceFromStart
        this.neighbours = findPossibleMoves(position)
        this.path = path
    }
}


function findPossibleMoves(start){
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
    return possibleMoves
}



function knightMoves(start, end){
    const startNode = new Node (start, 0, [])
    const endNode = new Node (end, 0)
    const queue = []
    const visited = []
    const nodes = []
    queue.push(startNode)
    while (queue[0]){
        let currentNode = queue[0].position
        if (currentNode.toString() === end.toString()){
            break
        }
        for (const item of visited){
            if (item.toString() === currentNode.toString()){
                queue.shift()
            }
        }
        let possibleMoves = findPossibleMoves(currentNode)
        for (const move of possibleMoves){
            let distance = queue[0].distanceFromStart + 1
            if(nodes.filter(item => item.position.toString() === move.toString()).length === 0){
                let path = JSON.parse(JSON.stringify(queue[0].path))
                path.push(queue[0].position)
                const node = new Node(move, distance, path)
                queue.push(node)
                nodes.push(node)
            }
            }
        visited.push(currentNode)
        queue.shift()
    }
        output(nodes, end)
}

function output(nodes, end){
    let numMoves
    let path
    for (const node of nodes){
        if (node.position.toString() === end.toString()){
            numMoves = node.distanceFromStart
            path = node.path

        }
    }
    console.log(`You made it in ${numMoves} moves!`)
    console.log("Here's your path:")
    for (const square of path){
        console.log(square)
    }
    console.log(end)
}

knightMoves([0,0], [7,7])

