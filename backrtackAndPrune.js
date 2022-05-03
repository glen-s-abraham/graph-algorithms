const sheaths=[
    ['A','B','C'],
    ['C','D'],
    ['D','E'],
    ['E','F'],
    ['F','E','D','C','G','H'],
    ['H','I']
]
const branchedVertices = ['C']

const cleanRepeatingStrands=(sheaths)=>{
    pairs = []
    for(let i=0;i<sheaths.length;i++){
        let segments = sheaths[i]
        while(sheaths[i].length>1){
            let v1=segments.shift()
            let v2 = segments[0]
            pairs.push([v1,v2])
        }
    } 
    for(let i=pairs.length-1;i>0;i--){
        for(let j=i-1;j>=0;j--){
            if(
                isArrayEqual(pairs[i],pairs[j].slice().reverse())||
                isArrayEqual(pairs[i],pairs[j])
            ){
                console.log(pairs[i],pairs[j])
                console.log(getIndexOfPair(pairs,pairs[j]))
                pairs.splice(getIndexOfPair(pairs,pairs[i]),1)
            }    
        }
    }
    console.log(pairs)
}


const isArrayEqual=(array1,array2)=>{
    return (array1.length == array2.length) && array1.every(function(element, index) {
        return element === array2[index]; 
    });
}

const getIndexOfPair=(array,pair)=>{
    for(let i=0;i<array.length;i++)
        if(isArrayEqual(array[i],pair))
            return i
    return -1
}
cleanRepeatingStrands([...sheaths])



