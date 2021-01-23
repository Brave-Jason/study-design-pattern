class jQuery {
    constructor(seletor) {
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(seletor))
        let len = dom ? dom.length : 0
        for (let i = 0; i <len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.seletor = seletor || ''
    }
    append() {

    }
    addClass() {

    }
    html() {

    }
}
window.$ = function (seletor) {
    return new jQuery(seletor)
}
//测试代码
var $p = $('p')
console.log($p)
console.log($p.addClass)