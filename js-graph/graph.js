const graph={
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

const depthFirstPrint=(graph,source)=>{
    const stack=[source];

    while (stack.length>0){
        const current =stack.pop();
        console.log(current);

        for (let neighbor of graph[current]){
            stack.push(neighbor)
        }
    }
};

const depthFirstPrint2=(graph,source)=>{
    console.log(source)
    for (let neighbor of graph[source]){
        depthFirstPrint2(graph,neighbor)
    }
}

depthFirstPrint2(graph,'a')
