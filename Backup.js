let DarkPieces = [[],[]]
let WhitePieces = [[],[]]

function GenerateChessBoard(){
    const letras = ['    A ', ' B ', ' C ', ' D ', ' E ', ' F ', ' G ', ' H ']
    let ChessBoard = []
    for(let i = 0; i < 9; i++){
        ChessBoard.push([])
        for(let j = 0; j < 9; j++){
            ChessBoard[i].push([`[ ]`])
            ChessBoard[0][j+1] = letras[j]
        }
        ChessBoard[i][0] = 9 - i + '  '
    }

    ChessBoard[0][0] = ''
    ChessBoard[0].pop()

    for(let i = 0; i < 9; i++){
        console.log(`${ChessBoard[i].join(' ')}
        `)
    }
}
GenerateChessBoard()

let lin = [0, 0], col = [0, 0]

const MajorPieces = [null, 'R','N','B','Q','K','B','N','R']

for(let i = 0; i < 9; i++){
    DarkPieces[0].push([])
    DarkPieces[0][i].push([2, i])
    WhitePieces[0].push([])
    WhitePieces[0][i].push([7, i])
    DarkPieces[1].push([])
    DarkPieces[1][i].push([MajorPieces[i], 1, i])
    WhitePieces[1].push([])
    WhitePieces[1][i].push([MajorPieces[i], 8, i])
}
DarkPieces[0][0] = ['DarkPieces ']
WhitePieces[0][0] = ['WhitePieces']
DarkPieces[1][0] = ['DarkPieces ']
WhitePieces[1][0] = ['WhitePieces']

console.log(`
${DarkPieces[0].join(' - ')} 
${WhitePieces[0].join(' - ')}`)
console.log(`
${DarkPieces[1].join(' - ')} 
${WhitePieces[1].join(' - ')}`)