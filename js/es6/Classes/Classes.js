//js 클래스
class User {
    constructor({username, lastName, email, password}) {
        this.username = username;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    sayHello = () => {
        console.log(`Hello, my name ${this.username}`)
    }

    getProfile() {
        console.log(`${this.username} ${this.email} ${this.password}`)
    }

    updatePassword(newPassword, currnetPassword) {
        if (currnetPassword === this.password) {
            this.password = newPassword
            console.log("변경된 비밀번호 : " + newPassword)
        } else {
            console.log("바꿀 수 없음")
        }
    }
}

//this는 클래스 전체를 가르킨다.
//js 인스턴스
// const user = new User(`wonho`)
const user = new User({username: "wonho", lastName: "serrano", email: "cn@fe", password: "1234"})

console.log(user.updatePassword("sadf", "1234"))

//js에서도 상속 extends가능하다.
//자식 클래스에서 생성자를 생성하면 부모 생성자를 사용할 수 없다.
//자식에서 생성자를 만들경우 super()를 사용하면 부모의 생성자를 사용할 수 있다.
class Admin extends User {
    constructor({username, lastName, email, password, superAdmin, isActive}) {
        console.log(superAdmin)
        super({username, lastName, email, password});
        this.superAdmin = superAdmin
        this.isActive = isActive
    }

    deleteWebsite() {
        console.log("삭제합니다")
    }
}

//{}대괄호 유의할것
const adminUser = new Admin({
    username: "wonho",
    lastName: "serrano",
    email: "cn@fe",
    password: "1234",
    superAdmin: "true",
    isActive: true
})

console.log("관리자 : " + adminUser.superAdmin)

//숫자 카운팅 클래스
class Counter {
    constructor({initialNumber = 0, counterId, plusId, minusId}) {
        this.count = initialNumber;
        this.counter = document.getElementById(counterId)
        this.plusId = document.getElementById(plusId)
        this.minusId = document.getElementById(minusId)
        this.addEventListeners()
    }

    addEventListeners() {
        this.plusId.addEventListener('click', event => {
            this.increase()
            this.repaintCount()
        });
        this.minusId.addEventListener('click', event => {
            this.decrease()
            this.repaintCount()
        });
    }

    increase() {
        this.count = this.count + 1;
    }

    decrease() {
        this.count = this.count - 1;
    }

    repaintCount() {
        this.counter.innerHTML = this.count;
        // this.counter.innerText
    }

}

new Counter({counterId: "count", plusId: "add", minusId: "minus"})
