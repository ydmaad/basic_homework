// 7. id가 counter인 태그에 0이라는 숫자가 존재합니다.
// setInterval을 이용하여 1초에 1씩 카운트되게 만든 후,
// 카운트가 5가 되면 “종료”라는 콘솔로그가 출력되게 만들보세요.
// 단, clearInterval을 통해 카운트 5가 되면 현재 setInterval 함수를 종료해야 합니다.
const timer = document.querySelector("#counter");

let count = Number(timer.textContent);

const intervalId = setInterval(function () {
  if (count < 5) {
    count = count + 1;
    timer.textContent = count;
  } else {
    clearInterval(intervalId);
  }
  console.log(timer.textContent);
}, 1000);

// 왜 5가 두번 될까요.....??
