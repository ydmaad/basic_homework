// 1. 클래스가 box인 div 태그 중 클릭된 div 태그에 clicked 클래스를 추가해보세요.
const containerBtn = document.querySelector("#container");

containerBtn.addEventListener("click", function (event) {
  const targetClassList = event.target.classList;
  console.log(targetClassList);
  if (!targetClassList.contains("box")) return;
  if (targetClassList.contains("clicked")) {
    targetClassList.remove("clicked");
  } else {
    targetClassList.add("clicked");
  }
});

// 2. 다음의 함수를 완성해보세요.
function getSquare(number) {
  // number의 제곱을 계산하여 반환하는 함수를 작성하세요.
  let result = number * number;

  return result;
}

const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)
