
//Write a function to rotate the given array by k times
// input : array=[1,2,3,4,5,6] k=3 => [4,5,6,1,2,3]

var arr=[1,2,3,4,5,6]


function rotate(arr,k)
  let newArr=arr.slice(k)
  for (i=0; i<k;i++){  
      newArr.push(arr[i])
        
    }
    return newArr;
    
   
}console.log(rotate(arr,3))