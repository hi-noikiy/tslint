var x1;
var x2 = x1;
var i;
var i2;
var x3 = i;
var x4 = i2;
var x5 = i2;

var C = (function () {
    function C() {
    }
    return C;
})();
var D = (function () {
    function D() {
    }
    return D;
})();

var x6 = new C();
var x7 = new D();

x6 = x7;
x6 = C;
C == D;
C == C;
