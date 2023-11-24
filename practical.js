// Basic:

// 1
function func1(){
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
           console.log(i);
        }, 2000);
    }
}

func1()

// 2
let x = {} , y = {name: "siddharth"} , z = {names: "soni"}

x[y] = {names: "john"};
x[z] = {name: "doe"}

console.log(x[y])




// 3 
// in this you have to find that which number has a highest occurrence 
// Question const arr = [ 1,2,3,1,1,2]
// answer : Highest number occurrence : 1 & occurrence : 3
            
const arr = [1, 2, 3, 1, 3];
const count = {};

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (count[element]) {
        console.log(element)
        count[element] += 1;
    } else {
        count[element] = 1;
    }
}

console.log(count);


// OR



const count2 = arr.reduce((acc, element) => {
    acc[element] = (acc[element] || 0) + 1;
    return acc;
}, {});

console.log(count);
