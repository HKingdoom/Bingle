var G = [ 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
];
var T = [ 
        [-1,-1],
        [ 0, 2],
        [-1,-1],
        [ 1, 4],
        [-1,-1],
        [ 3, 8],
        [-1, 7],
        [-1,-1],
        [ 6,10],
        [-1,-1],
        [ 9,-1]
];
var treeTracer = new DirectedGraphTracer( "树")._setTreeData ( G, 5 );
var arrayTracer = new Array1DTracer( "顺序")._setData ( new Array(T.length).fill( '-' ) );
var logger = new LogTracer ( "控制台");
