//Object_Destructuring.js 객체 값을 받아올때에 매우 간편하게 분리할 수 있다.

//오브젝트 변수
const setting = {
    notification: {
        follow: true,
        alerts: true,
        unfollow: false
    },
    color: {
        thema: "dark"
    }
};

//es6 객체에 담긴 정보 가져오는 방법.
const {
    color: {thema},
    //만약 찾는 값이 없다면 = 형식으로 기본값을 설정할 수 있음.
    // notification: {follow = `안녕`},
    //notification이라는 값 자체가 없다면 빈 오브젝트를 반환한다.
    notification: {alerts = `하이`} = {}
} = setting;

// {}안에 담긴게 변수명이 됨.
const {
    notification
} = setting;

// console.table(setting);
// console.log(thema);
// console.log(follow);

console.log("만약에 값이 아예 없다면 : " + alerts);