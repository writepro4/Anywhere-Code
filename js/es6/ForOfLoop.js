const people = ["name", "name2", "name3", "name4"];

for (let i = 0; i < 20; i++) {
    // console.log("coding");
}

//첫번째 인자는 배열 안에 들어있는 값,
//두번째는 index 번호
//세번째는 배열 전체 정보를 줌
const addHeart = (a, b, c) => {
    // console.log(a, b, c)
};

// people.forEach(people => console.table(people));

for (const friend of people) {
    // console.log(friend);
}

//문자열도 반복할 수 있다.
for (const letter of "Helloo this is very looooong") {
    // console.log(letter);
}

//특정 문자를 찾고 멈추는 함수
//문자열,배열, 다양하게 적용가능하다.
for (const friend of people) {
    if (friend === "name3") {
        break;
    } else {
        console.log(friend)
    }
}