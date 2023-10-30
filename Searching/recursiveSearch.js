const binarySearch=(arr,key)=>{
    return search(arr,key,0,arr.length-1)
}
const search=(arr,key,left,right)=>{
    if(left>right) return -1;
    let middle = parseInt(left+right/2)
    if(arr[middle]===key) return middle+1
    if(key<arr[middle]) return search(arr,key,left,middle-1)
    if(key>arr[middle]) return search(arr,key,middle+1,right)
}
console.log(binarySearch([1,2,3,4,5],3))