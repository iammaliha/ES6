//  node spread_rest_operator.js

//  let numbers =[30, 20, 40, 50,3000, 055, 09944]
// console.log(...number);

// let maxNumber = Math.max(...number);
// console.log(maxNumber);


// let maxNumber = Math.min(...number);
// console.log(minNumber);

let numbers2 = [...numbers,400,10,30];

numbers.push(300);
 console.log(numbers2)


 let students ={
     name : "Maliha",
     age :20
 }



 let students2 = {...students ,cgpa :"3.31"}

 students.someting = "test"
 console.log(students2)




// rest operator


function sum(a, b, c, ...restnumbers){
    console.log(restnumbers,"restnumbers");
let sum = 0;
for(let number of restnumbers){
    sum+=number;
}

    return a + b + c + sum;
}
console.log(sum(20, 30, 40, 69, 60, 69, 59, 90));


