var graphTracer = new UndirectedGraphTracer ('无向图');
var logger = new LogTracer ('控制台');
var G = [
	[0,1,0,0,1,0],
	[1,0,0,0,1,0],
	[0,0,0,1,0,0],
	[0,0,1,0,1,1],
	[1,1,0,1,0,0],
	[0,0,0,1,0,0]
];
graphTracer._setData (G);