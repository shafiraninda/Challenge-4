let numbers=[20,30,40,50,60,70];

const biggest=(n)=>{
    let max=0;
    for(let i=0;i<=n.length;i++){
        if(n[i]>max){
            max=n[i];
        }
    }
    return max;
}
console.log(biggest(numbers));