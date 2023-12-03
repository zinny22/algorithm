const solution = (n) => {
    const result = [];
    const array = Array(n).fill().map((v,i)=>i+1);
    
    for(let i = 0; i < n; i++ ){
        if(array[i] % 2 !== 0){
            result.push(array[i])
        }
    }
    
    return result;
}