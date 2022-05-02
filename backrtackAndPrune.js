const sheaths=[
    ['A','B','C'],
    ['C','D'],
    ['D','C'],
    ['C','E','F']
]
console.log(sheaths)
const cleanRepeatingStrands=(sheaths)=>{
    for(let i=1;i<sheaths.length;i++){
        for(let j=i-1;j>=0;j--){
            let rev=sheaths[j].slice().reverse()
            //console.log(sheaths[i],sheaths[j],rev)
            if(sheaths[i].length>0){
                if(isArrayEqual(sheaths[i],rev)){
                    console.log(`repeating segments ${sheaths[i]} and ${sheaths[j]}`)
                    sheaths[i]=[]
                }
            }
        }
    }
    console.log(sheaths)
}

const isArrayEqual=(array1,array2)=>{
    return (array1.length == array2.length) && array1.every(function(element, index) {
        return element === array2[index]; 
    });
}
cleanRepeatingStrands([...sheaths])
