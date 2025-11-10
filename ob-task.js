// // first task 
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(colors['golden rod'])


// // 2nd task 

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car['parssenger capacity'] = 5;
// console.log(car)


// // 3th task 


// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// console.log(student.physics.marks)




// // 4th task 

// let students = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// console.log(Object.keys(students).length)



// 5th task 
// let myObjects = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// }
// // console.log(myObject)
// const myObjectss = Object.keys(myObjects)
// // console.log(myObjectss)

// for (const myObject of myObjectss){
//     console.log(myObject,'|',myObjects[myObject],myObjects[myObject().length])
// }


// let myDetails = {
//     name: 'Al Amin',
//     age: 80,
//     villave: 'Fatepur',
//     isStudent: true,
// }

// let myArrays = Object.keys(myDetails)
// // console.log(myArray)
// for (const myArray of myArrays) {
//     console.log(myArray, '|', myDetails[myArray], typeof myDetails[myArray])
// }



// let str = 'I am learning JavaScript'
// let count = 0;

// for (let a of str){
//    if(a === 'a'){
//     count++
//    }
// }
// console.log(count)

let str = "Al Amin loves JavaScript";
let count = 0;
let countA = 0;
let counTotal = 0;
// let strr = 

for (let a of str){
    if (a === 'a'){
        count++
    }
    else if(a === 'A'){
        countA++
    }
    // else if( a === 'a' || a === 'A'){
    //     counTotal++
    //     // console.log(counTotal)
    // }
}
console.log(count)
console.log(countA)



