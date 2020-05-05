//더 보기 좋은 코드를 만들기 위하여 나왔다.
//then이 불필요하게 너무 많다.

//await은 then과 같은 역활을 한다.
//resolve되든 reject되든 상관없이 끝나면 실행
const getMovies = async () => {
    try {
        const [movies, upcoming] = await Promise.all([
            fetch("https://yts.am/api/v2/list_movies.json"),
            fetch("https://yts.am/api/v2/list_upcoming.json")
        ])
        const json = await response.json()
        console.log(json)
        //await안에서 일어난 에러만 잡는게 아니라
        //await밖까지 에러를 잡아냄
    } catch (e) {
        console.log("에러남")
    } finally {
        console.log("we are done!")
    }
}

getMovies();

//Parallel