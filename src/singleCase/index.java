public class SingleObject {
    private SingleObject () {}
    //唯一被new
    private SingleObject instance = null
    //获取对象的唯一接口
    public SingleObject getInstance () {
        if(instance == null) {
            //只new 一次
            instance = new SingleObject()
        }
        return instance
    }
    //对象方法
    public void login(username,password) {
        System.out.println('login...')
    }
}

public class SingletonPatterDemo {
    public static void main(String[] args) {
        //获取唯一可用的对象
        SingleObject object = SingleObject.getInstance()
        object.login()
    }
}