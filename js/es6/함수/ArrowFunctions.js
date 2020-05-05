//익명 함수.
const var1 = function () {
    return 1;
}
console.log("익명 함수 값: " + var1());

const names = ["첫번", "두번"];

//map은 각각의 아이템마다 함수를 호출하는 기능
const hearts = names.map(function (item) {
    return item + "heart";
})

console.log("일반 익명 함수 : " + hearts);

//argument하나만 있을 경우엔 ()가 필요없다.
const hearts2 = names.map((item) =>
   item +  "heart"
)

//this를 사용하고 싶다면 화살표함수로는 사용하지 못함

console.log("화살표 함수 : " + hearts2);
