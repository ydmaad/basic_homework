// 문제 2번
document.querySelector(".btn").addEventListener("click", function (){
    console.log("눌런");
    document.querySelector(".title").textContent = "제.목.이.아.니.다.";
});


// 문제 3번
function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(24, 57));


// 문제 4번
function isEvenOrOdd(num){
    if (num % 2 === 0) {
        console.log("짝수입니다")
    } else {
        console.log("홀수입니다")
    }
}
isEvenOrOdd(27);
isEvenOrOdd(90);


// 문제 5번
const person = {
    name: "병수",
    age: 20,
};

function list({name, age}){
    console.log(`이름 : ${name}
나이 : ${age}`);
}

list(person);