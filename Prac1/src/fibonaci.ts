const fibonaci = (n:number):number[] => {
    if (n==1){
        return [1];
    }
    if (n==2){
        return [1,1];
    }
    
    let arr:number[] = fibonaci(n-1);
    arr.push(arr[n-2]+arr[n-3]);
    return arr;
}

console.log(fibonaci(10).reduce((cur,res)=> {
    return cur+=res;
},0));