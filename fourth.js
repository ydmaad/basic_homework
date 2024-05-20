// 1. 배열과 객체 만들기
//    다음 사진과 같이 3명의 이름, 나이, 성별에 대한 정보가 존재합니다.
//    다음의 정보를 배열과 객체를 활용하여 하나의 변수에 담고,
//    해당 변수를 console.log로 출력하세요.
console.log("1.---------------");
let people = [
  {
    name: "철수",
    age: 30,
    gender: "남자",
  },
  {
    name: "짱구",
    age: 10,
    gender: "남자",
  },
  {
    name: "유리",
    age: 20,
    gender: "여자",
  },
];
console.log(people);

// 2. 문제1에서 만든 데이터를 html에 보여주기
console.log("2.---------------");
const peopleCardContainer = document.querySelector(".cardContainer");

people.forEach(function (people) {
  let peopleCard = `<div class="cardContainer">
                    <h3>내 이름은 ${people.name}입니다.</h3>
                    <h3>내 나이는 ${people.age}살 입니다.</h3>
                    <h3>내 성별은 ${people.gender}입니다.</h3>
                    <h3>=============================</h3>                 
                    </div>`;
  peopleCardContainer.insertAdjacentHTML("beforeend", peopleCard);
});

// 3. find 메소드
//    문제1에서 만든 객체들의 배열을 활용하여
//    성별이 여자인 데이터를 한 명 찾아 콘솔에 출력해보세요.
console.log("3.---------------");

const 여자는_누구 = people.find(function (people) {
  return people.gender === "여자";
});
console.log(여자는_누구);

// 4. filter 메소드
//    문제1에서 만든 객체들의 배열을 활용하여
//    성별이 남자인 데이터를 필터링하여 콘솔에 출력해보세요.
console.log("4.---------------");
const 남자는_누구 = people.filter(function (people) {
  return people.gender === "남자";
});
console.log(남자는_누구);

// 5. map 연습 문제
// 문제1에서 만든 객체들의 배열을 활용하여
// 모든 데이터의 나이에 10을 더한 새로운 배열을 콘솔에 출력해보세요.
console.log("5.---------------");
const 십년후 = people.map(function (people) {
  return {
    name: people.name,
    age: people.age + 10,
    gender: people.gender,
  };
});
console.log(십년후);
console.log(people);

// 6. sort 연습 문제
//    문제1에서 만든 객체들의 배열을 활용하여
//    나이순으로 정렬해보세요. (내림차순으로 정렬)
console.log("6.---------------");
let 펼치기 = [...people];
const 내림차순으로 = 펼치기.sort(function (a, b) {
  return b.age - a.age;
});
console.log(내림차순으로);
console.log(people);

// 7. destructuring (구조 분해 할당) 문법 활용 예시
console.log("7.---------------");
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
const { 이름, 나이, 주소 } = user;
console.log(이름);
console.log(나이);
console.log(주소);
