class ReadImg {
    constructor(filename) {
        this.filename = filename;
        this.loadFromDisk () //初始化从硬盘中加载
    }
    display () {
        console.log('display..' + this.filename)
    }
    loadFromDisk () {
        console.log('loading..' + this.filename)
    }
}
class ProxyImg {
    constructor(filename) {
        this.reaLimg = new ReadImg(filename)
    }
    display () {
        this.reaLimg.display()
    }
}

// test 
let proxyImg = new ProxyImg('1.png')
ProxyImg.display()