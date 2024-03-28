module.exports = {
    test: function() {
        return 1;
    },
    addTwo: function(p1, p2) { //addition
        return p1 + p2;
    },
    multTwo: function(p1, p2) { //multiplication
        return p1 * p2;
    },
    subTwo: function(p1, p2) { //subtraction
        return p1 - p2;
    },
    divTwo: function(p1, p2) { //division
        if (p2 == 0) {
            return 0;
        }
        else {
            return p1 / p2;
        }   
    },
    expTwo: function(p1, p2) { //exponentiation
        return Math.pow(p1, p2);
    }
}