var tracer = new Array2DTracer('图表');
var logger = new LogTracer('控制台');
var k = Array1D.random(10, 1, 999);
var D = [
    k,
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
tracer._setData(D);
