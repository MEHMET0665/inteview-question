function maxProduct(arr, n)
{
       
    // if size is less than
    // 3, no triplet exists
    if (n < 3)
        return -1;
   
    // will contain max product
    let max_product = Number.MIN_VALUE;
   
    for (let i = 0; i < n - 2; i++)
        for (let j = i + 1; j < n - 1; j++)
            for (let k = j + 1; k < n; k++)
                max_product = Math.max(max_product,
                          arr[i] * arr[j] * arr[k]);
   
    return max_product;
}
   
 
// Driver Code
 
        let arr = [ 10, 3, 5, 6, 20 ];
        let n = arr.length;;
   
        let max = maxProduct(arr, n);
        console.log(max)