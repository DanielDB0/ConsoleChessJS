/*
  console.log('Hello World!')
  const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
  })
  let texto = `- Hello
  - `
  
  readline.question(texto, (resposta) => {
      if(resposta.toLowerCase() === 'hello'){ 
          texto = `- How Are You? 
  - `
          readline.question(texto, (resposta1) => {
              if(resposta1.toLowerCase() === "i'm good" || resposta1.toLowerCase() === "i'm fine"){
                  console.log('- cool')
                  readline.close();
              }
              else{
                  console.log('- bad')
                  readline.close();
              }
          })
      }
      else{
          console.log('*Conversa encerrada*')
          readline.close();
      }
  });
*/

// const div = [
//     `+-----------------------------------------------+`, 
//     `|     |     |     |     |     |     |     |     |`,
//     `|-----+-----+-----+-----+-----+-----+-----+-----|`
// ] 
// console.log(div[0])
// for(let i = 0; i < 7; i++){
//     console.log(div[1])
//     console.log(div[2])
// }
// console.log(div[1])
// console.log(div[0])

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

let VisualBoard = `Chess|  A  |  B  |  C  |  D  |  E  |  F  |  G  |  H  |
`
VisualBoard += `-----+-----------------------------------------------+
`
for(let i = 1; i < 8; i++){
    VisualBoard += `  ${9 - i}  |     |     |     |     |     |     |     |     |
-----|-----+-----+-----+-----+-----+-----+-----+-----|
`
}
VisualBoard += `  1  |     |     |     |     |     |     |     |     |
`
VisualBoard += `-----+-----------------------------------------------+ `
console.log()

for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
        VisualBoard = VisualBoard.replace('     ', ` ${i+1},${j+1} `)
    }
}
console.log(VisualBoard)

