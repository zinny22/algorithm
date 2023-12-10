const solution = (price) => {
    let discount;
    
    if(100000 <= price && price < 300000){
        discount = price * 0.05;
    } else if(300000 <= price && price < 500000){
        discount = price * 0.1
    } else if(price >= 500000){
        discount = price * 0.2
    } else {
        discount = 0 
    }
    
    return Math.floor(price - discount)
}