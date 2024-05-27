let y=null
console.log(typeof(y));


let y1="8";
let y2=8;
if(y1==y2)
    console.log("equal");
else
   console.log("Not equal");

let y3="8";
let y4=8;
   if(y1===y2)
       console.log("equal");
   else
      console.log("Not equal");

///for in loop
let object={
    name:"nagajaswanth",
    rollno:21,
    class:"cse-a"
} 
for (let ele in object){
    console.log(ele+" key "+object[ele]+" Value");
}  
function factorial(n){
      let res=1;
      for(let i=1;i<=n;i++){
        res*=i
      }
      return res;
}  
console.log(factorial(4)); 

function greet(){
    console.log("Hi");
}
let ans=greet()
console.log(typeof greet);
console.log(greet)
let copy=object;
object.rollno=31
copy.rollno=22


console.log(copy);
let array1=[1,32];
let array2=["hi","hello"];
let s=[array1,array2]
console.log(s);


   