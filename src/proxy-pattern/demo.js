let start = {
    name : '张xx',
    age:25,
    phone:'13900001111'
}
//经纪人
let agent = new Proxy(start, {
    get: function(target,key) {
        if(key ==='phone') {
            //返回经纪人电话
            return '16899997777'
        }
        if(key ==='price' ) {
            //明星报价， 经纪人报价
            return  120000
        }
        return target[key]
    },
    set: function(target,key,value) {
        if(key === 'customPrice') {
            if(val < 100000) {
                //最低10w
                throw new Error ('价格太低')
            }else {}
            target[key] = val
            return true
        }
    }
});

// test 

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)