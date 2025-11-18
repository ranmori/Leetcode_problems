

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let container;
        let max=0
    let pointA= 0
    let pointB= height.length-1;
    while(pointA<pointB){
       let min =Math.min(height[pointA],height[pointB] )
       container = (pointB-pointA)* min
        max=Math.max(max,container)
        if(min===height[pointA ]){
            pointA++
        }else{
            pointB --
        }
        
    }
    return max;
    
};
