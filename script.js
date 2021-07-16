
//Given an array of element, return the lenght  of the largest subbarray where all its elements are distrinct elements
var arr=[5,1,3,5,2,3,4,1]
var subArr=[]
for (i in arr){
  
  let arr1=arr.slice(i)
 
  
    if (!subArr.includes(arr[i])){
        subArr.push(arr[i])
        
    }
    
   
}console.log('the longest of subarray with distrinct element',subArr.length,'and subarr is',subArr)