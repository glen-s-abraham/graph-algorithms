const sheaths=[
    ['A','B','C'],
    ['C','D'],
    ['D','E'],
    ['E','F'],
    ['F','E','D','C','G','H'],
    ['H','I']
]
const branchedVertices = ['C']

const pairVerticesWithinSheeths=(sheath)=>{
    let _sheaths=[]
    sheath.forEach(sheath=>{
        let pairs=[]
        while(sheath.length>1){
            let v1=sheath.shift()
            let v2=sheath[0]
            pairs.push([v1,v2])
        }
        _sheaths.push(pairs)
    })
    return _sheaths
}

const cleanRepeatingStrands=(sheaths)=>{
    let pairs = []
    for(let i=sheaths.length-1;i>0;i--){
        for(let j=i-1;j>=0;j--){
            sheaths[i].forEach(iSegment=>{
                sheaths[j].forEach(jSegment=>{
                    if(isArrayEqual(iSegment,jSegment)||isArrayEqual(iSegment,jSegment.slice().reverse())){
                        console.log('repeating segment',iSegment)
                        let segmentIndex=getIndexOfPair(sheaths[i],iSegment)
                        sheaths[i].splice(segmentIndex,1)
                    }
                })
            })
        }
    }
    console.log(sheaths)
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


const pairedSheaths=pairVerticesWithinSheeths([...sheaths])
cleanRepeatingStrands([...pairedSheaths])
// console.log(pairedSheaths)



