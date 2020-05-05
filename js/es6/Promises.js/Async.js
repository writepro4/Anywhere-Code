//resolve 값
//rejcet 에러
// const sexy = new Promise((resolve, reject) => {
//     // setTimeout(resolve, 3000, "yes you are")
//     //바로 실행
//     // resolve("yes you are")
//
//     //에러가 날 경우에
//     setTimeout(reject, 3000, "you are false")
// });

// console.log(sexy);

//3초 뒤에 1초마다 yes you are 를 실행
// setInterval(console.log, 1000, sexy);

//pormise가 끝나고 값을 어떻게 사용할건지
// then은 값이 정상적으로 출력됐을경우
// catch는 에러값이 나왔을 경우
// sexy
//     .then(result => console.log(result))
//     .catch(error => console.log(error))


//작업을 여러개 진행해야 할경우엔
const am = new Promise((resolve, reject) => {
    resolve(2);
});

//서로 연결되여있는 과정을 chaining이라고 표현
am.then(number => {
    console.log(number * 2);
    return number * 2
})
    //return으로 값을 넘겨야 다음 then에서 값을 받을 수 있다.
    .then(number => {
        console.log(number * 2)
        return number * 2
    })
    .then(number => {
        console.log(number * 2)
        return number * 2
    })

const tiemsTwo = (number) => number * 2;

am
    .then(tiemsTwo)
    //then이 작동할려면 return값이 있어야함.
    .then(tiemsTwo)
    .then(tiemsTwo)
    .then(tiemsTwo)
    .then(tiemsTwo)
    // .then(()=>{
    //     //에러 발생
    //     throw Error("something")
    // })
    .then(lastNumber => console.log("작동 종료 : " + lastNumber))
    //catch는 한번만 적어도 에러가 어디서에서 발생하든지 작동함.
    .catch(error => console.log(error));


const p1 = new Promise(resolve => {
    setTimeout(resolve, 1000, "First")
});

const p2 = new Promise(resolve => {
    setTimeout(resolve, 2000, "Second")
});

const p3 = new Promise(resolve => {
    setTimeout(resolve, 3000, "Third")
});

const p4 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "error입니다")
});

//then을 여러번 선언할 필요없이 all을 사용하면
//p1,p2,p3함수가 다 끝난후에 자동으로 실행되게 만들기 가능
const motherPromise = Promise.all([p1, p2, p3, p4]);

//똑같이 catch를 사용해 에러를 잡아낼 수 있다,
//전부 다 잘 작동되는지 확인하는데 유용하므로 기억해 둘것!!!!!
motherPromise
    .then(value => console.log(value))
    .catch(error => console.log(error));

//Promise Race
//가장 빨리 실행된 함수만 결과를 보여줌.
const racePromise = Promise.race([p1, p2, p3, p4]);

racePromise
    .then(value => console.log(value))
    .catch(error => console.log(error))

//.finally 무조건 마지막에 결과 실행값이 필요할때
const finallyVariable = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "finally")
})
    .then(value => console.log(value))
    .catch(error => console.log(error))
    .finally(() => console.log("im done"));

//Real world Promises
fetch("https://yts.am/api/v2/list_movies.json")
    .then(response => {
        console.log(response);
        return response.json()
    })
    .then(json => console.log(json))
    .catch(error => console.log("에러입니다. " + error));



