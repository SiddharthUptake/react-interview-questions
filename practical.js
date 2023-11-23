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

