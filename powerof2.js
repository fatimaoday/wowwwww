function funn(num){

    let x=1;

    while(x < num){
        x=x*2;
    }
    return (x/2);

}

let number=9080;

let boo = number-funn(number)
let result = (boo*2)+1

console.log(result);
