// 3. 현재 브라우저 스크롤 시 수직으로 얼마나 스크롤 됐는지 출력되도록 코드를 작성해보세요.
window.addEventListener("scroll", function () {
  console.log(scrollY);
});

console.log("--------------------");

// 4. 1부터 10까지 숫자를 for문을 활용하여 출력해보세요.
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("--------------------");

// 5. 1부터 20까지 숫자 중 짝수만 출력하도록 코드를 작성해보세요.
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.log("--------------------");

// 6. 3초 후에 “3초 후에 출력되는 텍스트입니다.” 라는 콘솔로그가 출력되도록 코드를 작성해보세요.
setTimeout(function () {
  console.log("3초 후에 출력되는 텍스트입니다.");
}, 3000);

console.log("--------------------");
