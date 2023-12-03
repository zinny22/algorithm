function solution(left, right) {
    let a = []
    let answer = 0;
    
    for(let i = left; i <= right; i++){
        for(j = 1; j<= i; j++ ){
            if(i % j === 0 ) a.push(j)
        }
        if(a.length % 2 === 0){
             answer += i 
        } else {
             answer -= i 
        }
        a = []
    }
    return answer

}