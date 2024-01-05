function fibonacci(n){
    const fib =[0,1]
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2]  //O(n)
    }
    return fib
}
console.log(fibonacci(5));