let binarySearch=(arr,key)=>{
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let middle=Math.floor((right+left)/2)
        console.log(left,right,middle)
        if(arr[middle]==key) {
            return middle+1;
        }
        if(key<arr[middle]){
            right=middle-1;
        }
        else{
            left=middle+1
        }
    }
    return -1
}
console.log(binarySearch([1,2,3,4,5,6,7,10],10));
