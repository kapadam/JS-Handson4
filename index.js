// 1
const Find_Prod = (array, N) => 
{
  let product=1;
 for(let i=0;i<array.length;i++){
   product=product*array[i];
 }
   return product;  

};
// 2
const Find_Sum = (array, N) => 
{
  let sum=0;
  for(let i=0;i<array.length;i++){
    sum=sum+array[i];
  }
  return sum;

};
// 3
const findCount = (N, K, Arr) => 
{
  let count=0;
    for(let i=0;i<Arr.length;i++){
      if(Arr[i]===K){
        count++;
      }
    }
    return count;
};
// 4
const findEvenOdd = (N, Arr) => 
{
    let B=[];
    let even=0;
    let odd=0;
    for(let i=0;i<Arr.length;i++){
      if(Arr[i]%2===0){
        even=even+Arr[i];
      }
      else{
        odd=odd+Arr[i];
      }
    }
    B.push(even);
    B.push(odd);
    return B;
};
// 5
const Find_Num = (array,N,M) => 
{
  for(let i=0;i<array.length;i++){
    if(M===array[i]){
      return "YES"
    }
  }
  return "NO"
};
// 6
const highAge = (N, Arr) => 
{
  let arr=[];
    for(let i=0;i<N;i++){
      if(Arr[i]>=18){
      arr.push(Arr[i]);
      }
    }
    return arr;
};
// 7
const Inc_Arr = (array,N) => 
{
  let arr;
  for(let i=0;i<array.length;i++){
    arr=array[i]+1;
    console.log(arr);
  }

};
// 8
const isAllPass = (N, Arr) => 
{
   let count=0;
   for(let i=0;i<Arr.length;i++){
     if(Arr[i]>=32){
       count+=1;
     }
   }
   if(count==N){
     return "YES";
   }
   else{
     return "NO";
   }
};
// 9
function Unique_Shirts (arr,N) {
    let count=0;
    let check;
    for(let i=0;i<N;i++){
      check=false;
      for(let j=0;j<N;j++){
        if(i!=j && arr[i]===arr[j]){
          check=true;
          break;
        }
      }
      if(check===false){
        count++;
      }
    }
    return count;
  }
//   10
function arrayMin(arr) {
    let min=arr[0];
   for(let i=0;i<arr.length;i++){
     
     if(arr[i]<min){
       min=arr[i];
     }
   }
   return min;
 
 }
 
 function arrayMax(arr) {
   let max=0;
 for(let i=0;i<arr.length;i++){
   if(arr[i]>max){
     max=arr[i];
   }
 }
 return max;
 }