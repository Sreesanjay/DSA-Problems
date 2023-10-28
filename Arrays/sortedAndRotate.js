let count =(string)=>{
    let arr = string.split('');
    let obj = {};
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]]>=1){
            obj[arr[i]]++;
        }else{
            obj[arr[i]] = 1
        }
    }
    return obj
}
console.log(count('aaccbbaa'))