function testDec() {
    return function (target) {
        target.isDec = isDec
    }
}

@testDec(false)
class Demo {

}
alert(Demo.isDec)