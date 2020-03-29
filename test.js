let MatrixA = [[8,3],[2,4],[3,6]]
let MatrixB= [[1,2,3],[4,6,8]] 
let MatrixC= [[20,34,48],[18,28,38],[27,42,57]] 

function dispaly(m){
    for (let i=0;i<m.length;i++){
        console.log(' '+m[i].join(' ')+'\r\n');
    }
}

dispaly(MatrixA)
dispaly(MatrixB)
dispaly(MatrixC)

function Multiply(MatrixA,MatrixB){
    let aNumRow = MatrixA.length;
    let aNumcol = MatrixA[0].length;
    let bNumRow = MatrixB.length;
    let bNumcol = MatrixB[0].length;
    let Matrix= new Array(aNumRow)
    for(let r=0;r<aNumRow.length;r++){
        Matrix[r]= new Array(bNumcol)
        for(let c=0;c<bNumcol.length;c++){
            Matrix[r][c]=0
            for(let i=0;i<aNumcol.length;i++){
                Matrix[r][c] += MatrixA[r][i] * MatrixB[i][c];
            }
        }
    }
    return Matrix;
}
dispaly(Multiply(MatrixA,MatrixB))