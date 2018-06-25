function orderRectangles(matrix) {
    for (let index = 0; index < matrix.length; index++) {
        matrix[index] = {
            width: matrix[index][0],
            height: matrix[index][1],
            area: function () {
                return this.width * this.height;
            },
            compareTo(rectangle){
                let areaDiff = rectangle.area() - this.area();
                return areaDiff || rectangle.width - this.width;
            }
        };
    }
    return matrix.sort((a, b) => a.compareTo(b));
}

console.log(orderRectangles([[10, 5], [5, 12]]));