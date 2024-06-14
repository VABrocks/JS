// let button=document.getElementById('myButton');

// button.addEventListener('click',function(){
//     console.log(this)
// });

// function showGlobalThis(){
//     console.log(this)
// }

// function Task(title){
//     this.title=title;
//     this.isCompleted=false;
// }

// let myTask = new Task("Buy groceries");
// console.log(myTask.title);

// function outerFunction(){
//     let outerVariable="I am outside";
//     function innerFunc(){
//         let innerVar="i am inside";
//         console.log("Inner Variable");
//         console.log("Outer Varuable");
//     }
//     innerFunc();
// }
// outerFunction();

// let button=document.getElementById('myButton');

// button.addEventListener('click',function(){
// a=createCounter();
// console.log(a)
// });
// function createCounter(){
//     let count=0;
//     count++;
//     return count;
// }

// let button=document.getElementById('myButton');

// button.addEventListener('click',function(){
// a=createCounter();
// console.log(a)
// });


// ***************
// *****Doubt*****
// ***************



// function createCounter(){
//     let count=0;
//     return function() {
//         count++;
//         return count;
//     };
// }
// let create=createCounter();
// console.log(create())
// console.log(create())
// console.log(create())
// console.log(create())

// function greet(name){
//     return `Hello, ${name}!`
// }
// function callWithGreeting(name,func){
//     console.log(func(name))
// }
// callWithGreeting("Kabir",greet);

// function greet(name){
//     return `Hello ${name}`
// }
// function higher_order(name,time,func){
//     time=parseInt(time);
//     if (time>0 && time<12){
//         return greet(name)+" Good Morning"
//     }
//     if (time>12 && time<17){
//         return greet(name)+" Good Afternoon"
//     }
//     if (time>17 && time<20){
//         return (greet(name)+" Good Evening")
//     }
//     if (time<=20 && time>=20){
//         return greet(name)+" Good Evening"
//     }
    
// }
// A=higher_order("vivek",14,greet())
// console.log(A)

