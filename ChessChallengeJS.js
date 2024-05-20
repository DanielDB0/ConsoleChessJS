//console.log('Hello World!')

/* Pieces
 |  A     B     C     D     E     F     G     H  | 0
-+-----------------------------------------------+ 
8|  R  |  N  |  B  |  Q  |  K  |  B  |  N  |  R  | 1
 |-----+-----+-----+-----+-----+-----+-----+-----|
7|  p  |  p  |  p  |  p  |  p  |  p  |  p  |  p  | 2
 |-----+-----+-----+-----+-----+-----+-----+-----|
6|     |     |     |     |     |     |     |     | 3
 |-----+-----+-----+-----+-----+-----+-----+-----|
5|     |     |     |     |     |     |     |     | 4
 |-----+-----+-----+-----+-----+-----+-----+-----| 
4|     |     |     |     |     |     |     |     | 5
 |-----+-----+-----+-----+-----+-----+-----+-----| 
3|     |     |     |     |     |     |     |     | 6
 |-----+-----+-----+-----+-----+-----+-----+-----|
2|  p  |  p  |  p  |  p  |  p  |  p  |  p  |  p  | 7
 |-----+-----+-----+-----+-----+-----+-----+-----|
1|  R  |  N  |  B  |  Q  |  K  |  B  |  N  |  R  | 8
-+-----------------------------------------------+
0   1    2      3     4     5     6     7     8
*/

/* ChessBoard
[
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []]
]
*/

let DarkPieces = [[],[]]
let WhitePieces = [[],[]]
const MajorPieces = [null, 'R','N','B','Q','K','B','N','R']
const letras = ['    A ', ' B ', ' C ', ' D ', ' E ', ' F ', ' G ', ' H ']
let VisualBoard = `Chess|  A  |  B  |  C  |  D  |  E  |  F  |  G  |  H  |
-----+-----------------------------------------------+
`
let ChessBoard = []

let MoveCounter = 1

//geração inicial do tabuleiro

function GenerateChessBoard(){
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

    for(let i = 1; i < 8; i++){
        VisualBoard += `  ${9 - i}  |     |     |     |     |     |     |     |     |
-----|-----+-----+-----+-----+-----+-----+-----+-----|
`
    }
    VisualBoard += `  1  |     |     |     |     |     |     |     |     |
`
    VisualBoard += `-----+-----------------------------------------------+ `
    
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            VisualBoard = VisualBoard.replace('     ', ` ${i+1},${j+1} `)
        }
    }
}
GenerateChessBoard()

function ModifyChessBoard(){
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            ChessBoard[i+1][j+1] = `[ ]`
            for(let k = 0; k < 8; k++){
                if(DarkPieces[0][k + 1][0] === i+1 && DarkPieces[0][k + 1][1] === j+1){
                    ChessBoard[i+1][j+1] = `(P)`
                }
                else if(WhitePieces[0][k + 1][0] === i+1 && WhitePieces[0][k + 1][1] === j+1){
                    ChessBoard[i+1][j+1] = `[P]`
                }
                else if((WhitePieces[1][k + 1][1] === i+1 && WhitePieces[1][k + 1][2] === j+1)){
                    ChessBoard[i+1][j+1] = `[${WhitePieces[1][k + 1][0]}]`
                }
                else if(DarkPieces[1][k + 1][1] === i+1 && DarkPieces[1][k + 1][2] === j+1){
                    ChessBoard[i+1][j+1] = `(${DarkPieces[1][k + 1][0]})`
                }
            }
        }
    }
    for(let i = 0; i < 9; i++){
        console.log(`${ChessBoard[i].join(' ')}
        `)
    }
    console.log(`
${DarkPieces[0].join(' - ')} 
${WhitePieces[0].join(' - ')}`)
            
    console.log(`
${DarkPieces[1].join(' - ')} 
${WhitePieces[1].join(' - ')}`)

for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
        VisualBoard.replace(` ${i+1},${j+1} `, ` ${ChessBoard[i+1][j+1]} `)
    }
}
}

//definindo a posição inicial das peças
for(let i = 0; i < 9; i++){
    DarkPieces[0].push([])
    DarkPieces[0][i].push(2, i, 0)
    WhitePieces[0].push([])
    WhitePieces[0][i].push(7, i, 0)
    DarkPieces[1].push([])
    DarkPieces[1][i].push(MajorPieces[i], 1, i)
    WhitePieces[1].push([])
    WhitePieces[1][i].push(MajorPieces[i], 8, i)
}
DarkPieces[0][0] = 'DarkPieces '
WhitePieces[0][0] = 'WhitePieces'
DarkPieces[1][0] = 'DarkPieces '
WhitePieces[1][0] = 'WhitePieces'

console.log()

ModifyChessBoard()

let lin = [0, 0], col = [0, 0]
console.log(VisualBoard)


let pieceMoved, isPawnMoved, isMoveACastling, invalidMove = false, isAMajorPieceMoved

console.log()

function Moves(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    readline.question('Enter your Move: ', (Move) => {
        const isOdd = MoveCounter % 2 === 1
        for(let i = 0; i < 8; i++){
            switch (Move[0]){
                case 'O':
                    isMoveACastling = true
                    break
                case letras[i].trim().toLowerCase():
                    isPawnMoved = true;
                    break
                case MajorPieces[i]:
                    isAMajorPieceMoved = true
                    break
                default:
                    isMoveACastling = false
                    isPawnMoved = false;
                    isAMajorPieceMoved = false
            }

            switch (Move.length){
                //check
                case 2:
                    if(isPawnMoved){
                        lin[1] = (9 - Number(Move[1]))
                        col[1] = i+1;
                        for(let j = 0; j < 8; j++){
                            const isItAWhiteValidMove = (WhitePieces[0][j+1][1] === col[1]) && ((WhitePieces[0][j+1][0] - lin[1]) === 1 || ((WhitePieces[0][j+1][0] - lin[1]) === 2 && (WhitePieces[0][j+1][2] === 0))) && ChessBoard[WhitePieces[0][j+1][0] - 1][j+1] === `[ ]`                          
                            const isItADarkValidMove = (DarkPieces[0][j+1][1] === col[1]) && ((lin[1] - DarkPieces[0][j+1][0]) === 1 || ((lin[1] - DarkPieces[0][j+1][0]) === 2 && (DarkPieces[0][j+1][2] === 0))) && ChessBoard[DarkPieces[0][j+1][0] + 1][j+1] === `[ ]`
                            if(isOdd && isItAWhiteValidMove){
                                WhitePieces[0][j+1][0] = lin[1]
                                WhitePieces[0][j+1][2]++
                                invalidMove = false
                                break
                                
                            }
                            else{
                                if(!isOdd && isItADarkValidMove){
                                    DarkPieces[0][j+1][0] = lin[1]
                                    DarkPieces[0][j+1][2]++
                                    invalidMove = false
                                    break
                                }
                                else{
                                    invalidMove = true
                                }
                            }  
                        }
                        break
                    }
                    break
                case 3:
                    break
                case 4:
                    if(isPawnMoved){
                        for(let j = 0; j < 8; j++){
                                lin[1] = (9 - Number(Move[3]))
                                col[1] = i+1;

                                console.log()
                                console.log(j +' -')
                                console.log(col[1])
                                console.log(DarkPieces[0][j+1][1])
                                console.log(col[1])

                                console.log()
                                console.log(DarkPieces[0][j+1][0])
                                console.log(lin[1] + 1)

                            //*const isTheMoveADarkPawnCapture = Move[1] === 'x' && 

                            /*
                            +---+---+---+
                            |(P)|   |(P)|  y - 1   y = WhitePieces[0][j+1][0]  (x, y) = [P]
                            +---+---+---+          x = WhitePieces[0][j+1][1]
                            |   |{P}|   |  y       
                            +---+---+---+
                             x-1  x  x+1
                            */
                            /**if(isTheMoveADarkPawnCapture){
                                console.log(true)
                            }
                            else{
                                console.log(false)
                            }*/
                        }
                    }
                    break
                case 5:
                    break
                case 6:
                    break
                case 7:
                    break
                default:
                    invalidMove = true;
                    

            }

            if(Move[0] === MajorPieces[i+1]){
                pieceMoved = Move[Move.indexOf(MajorPieces[i+1])]
                console.log(pieceMoved)
                break
            }

        }

        ModifyChessBoard()

        if(invalidMove === false){
            MoveCounter++
        }
        else{
            console.log()
            console.log('Invalid Move')
            console.log()
        }

        if(Move[0].toLowerCase() === 'l'){
            console.clear()
            readline.close();
        }
        else{
            readline.close();
            Moves()
        }
    })
}
Moves()
console.log()



/*
Lances Possíveis de peões:
    lances simples:
        - cl (2) - concluído
        - cxcl (4)
    Promoções:
        - cl=P (4)
        - cxcl=P (6)
    Xeques e Mates:
        - cl+ (3)
        - cxcl+ (5)
        - cl=P+ (5)
        - cxcl=P+ (7)
        - cl# (3)
        - cxcl# (5)
        - cl=P# (5)
        - cxcl=P# (7)

Lances Possíveis de Peças:
    Lances Simples:
        - Pcl (3)
        - Pxcl (4)
        - Pcxcl (5)
        - Plxcl (5)
    Xeques e Mates:
        - Pcl+ (4)
        - Pxcl+ (5)
        - Pcxcl+ (6)
        - Plxcl+ (6)
        - Pcl# (4)
        - Pxcl# (5)
        - Pcxcl# (6)
        - Plxcl# (6)

Lances especiais com outra Notação:
    Roque curto:
        - O-O (3)
    Roque Longo:
        - O-O-O (5)
    Xeques e Mates:
        - O-O+ (4)
        - O-O-O+ (6)
        - O-O# (4)
        - O-O-O# (6)

    Notações com
        3:
            4:
                - cl+
                - cl#
                - Pcl
                - O-O
        4:
            7:
                - cl=P
                - cxcl
                - Pxcl
                - Pcl+
                - Pcl#
                - O-O+
                - O-O#
        5:
            9:
                - cxcl+
                - cl=P+
                - cxcl#
                - cl=P# 
                - Pcxcl
                - Plxcl
                - Pxcl+
                - Pxcl#
                - O-O-O
        6:
            7:
              - O-O-O#
              - O-O-O+
              - Pcxcl#
              - Pcxcl#
              - Plxcl+
              - Plxcl+
              - cxcl=P
        7:
            1:
              - cxcl=P# 
*/
