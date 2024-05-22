// 8. 로컬스토리지 사용하기
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

// 8-1. user 데이터를 로컬스토리지에 저장하세요.
localStorage.setItem("user", JSON.stringify(user));

// 8-2. 로컬스토리지에 저장된 데이터(user)를 조회한 후 콘솔에 출력해보세요.
const userObj = JSON.parse(localStorage.getItem("user"));
console.log(userObj);

// 8-3. 조회한 로컬 스토리지 데이터의 나이를 30으로 변경 후 다시 로컬 스토리지에 저장해보세요.
user.나이 = 30;
localStorage.setItem("user", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user")));

// 8-4. 조회한 로컬 스토리지의 데이터(user)를 삭제하는 코드를 작성하는 코드를 작성해보세요.
//      그리고 다시 user 데이터 조회 후 null이 출력되는지 확인하세요.
localStorage.removeItem("user", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user")));

// 1. 아래 API 문서를 확인하고, 게시물 목록을 조회하여 콘솔에 출력해보세요.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
