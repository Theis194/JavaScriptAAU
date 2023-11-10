class Matrix {
    matrix = [];
    constructor(m, n, fill = 0) {
        this.m = m,
        this.n = n,
        this.init(fill);
    }

    init(fill) {
        if(fill != -1) {
            // Loop to initialize 2D array elements.
            for (let i = 0; i < this.m; i++) {
                this.matrix[i] = [];
                for (let j = 0; j < this.n; j++) {
                    this.matrix[i][j] = fill;
                }
            }
            return 0;
        }
        this.fillNumericly();
    }

    fillNumericly() {
        let h = 0;
        for (let i = 0; i < this.m; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < this.n; j++) {
                this.matrix[i][j] = h++;    
            }
        }
    }

    logMatrix() {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i]);
        }
        console.log("");
    }
}

function transpose(matrix) {
    let tempMatrix = [];
    for (let i = 0; i < matrix.n; i++) {
        tempMatrix[i] = [];
        for (let j = 0; j < matrix.m; j++) {
            tempMatrix[i][j] = matrix.matrix[j] [i];
        }
    }
    return tempMatrix;
}

function matrixMultiply(a, b) {
    let tempMatrix = new Matrix(a.m, b.n);
    if (a.n == b.m) {
        for (let i = 0; i < a.m; i++) {
            for (let j = 0; j < b.n; j++) {
                let sum = 0;
                for (let k = 0; k < b.m; k++) {
                    sum += (a.matrix[i][k] * b.matrix[k][j]);    
                }
                tempMatrix.matrix[i][j] = sum;
            }
        }
        return tempMatrix.matrix;
    }
    return("no");
}

let myMatrix = new Matrix(3, 2, -1);

let myMatrixT = new Matrix(2,3,1);

myMatrix.logMatrix();

myMatrixT.matrix = transpose(myMatrix);
myMatrixT.logMatrix();

let test = new Matrix(2,2,1);
test.matrix = matrixMultiply( myMatrix, myMatrixT);

test.logMatrix();