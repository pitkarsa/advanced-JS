// console.log("hello");
// setTimeout(()=> console.log("done1"), 500);

// for (let i=1; i<= 100; i++){
//     setTimeout(()=> console.log("done2"),100);
// }
// let count=0;
// let id=setInterval(()=>{
//     console.log("hello");
//     count++;
//     if (count==5){
//         clearInterval(id);
//     }
// }, 1000);

// const a =[1,2,3,34,9];
// console.log(typeof(a));// object NOT ARRAY

// for(let i=0; i<5; i++){
//     setTimeout(()=>console.log(i), 500);
// }

// setTimeout(()=>{
//      for(var i=0;i<5;i++){
//         console.log(i);
//      }
// },1000);

// console.log(this); // window

// function fun1(){
//     console.log(this);// window
// }

// const fun2 = function(){
//     console.log(this);// window
// }

// fun1();
// fun2();

// const object1 = {
//     val:10,
//     fun1: function(){
//         console.log(this);
//     },
//     fun2: ()=> console.log(this)
// }

// object1.fun1();  
// object1.fun2(); 

function testThis(){
    console.log("Displaying this: ");
    console.log(this);// refers to window object
}
testThis();
// literals
const mistry ='answer';

const testObj = {
    val:10,
    fun1: function() {},
    fun2() {},
    fun3: ()=> {},
    // mystery:30 // console.log(testObj.mistry); // 30
    [mistry] : 30 //console.log(testObj.mistry); // undefined
    //above is referred as dynamic property syntax
}

// console.log(testObj.mistry); // 30
// console.log(testObj.mistry); // undefined
// console.log(testObj.answer);// 30

// // accessing the properties 
// console.log(testObj.val); //10
// console.log(testObj['val']); //10
// console.log(testObj[mistry]); // 30 

// use of dynamic property syntax
for (let el of [10,20]){
    console.log(el);//prints 10, 20
}

for (let el in [10,20]){
    console.log(el); // prints 0,1
}

obj = {
    val1: 11,
    val2: 12
}
for (let e in obj){
    console.log(e); // prints val1, val2
}
for(let key in obj){
    // console.log(obj.e);// error, as it searches for key 'e'
    console.log(obj[key]);//prints 11 and 12
}

const PI = Math.PI; 

shape = {
    name:'circle',
    radius:10,
    // PI:PI // value PI refers to const PI defined on line 96.
    // However, when the key and value are same, then we can use SHORTER PROPERTY SYNTAX  
    PI // This is similar to previous line
}
// accessing PI, we can use below for both the declarations shown above
console.log(shape.PI); 
