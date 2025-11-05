

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
     
     let seen= new Set()   
    while(n!==1 && !seen.has(n)){
        seen.add(n)
        let sum=0
        
        for(let digit of String(n)){
            sum+= Number(digit)**2
        }
        n=sum
        
    }
    
    return n===1
    
}
