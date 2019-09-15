### 自动化测试工具`jest`笔记
---


##### `snapshot`快照测试
使用流程：
1. 使用`react-test-renderer`的`renderer`调用`create`方法对组件进行加工
2. 调用加工后组件的`toJSON`方法并得到一个`tree`（这个`tree`应该就是快照的样子了，所有下面可以对其进行断言）
3. 将`tree`与初始快照进行对比`expect(tree).toMatchSnapshot()`


##### 为什么需要`mock`
- 捕获函数调用情况
- 设置函数返回值
- 改变函数的内部实现


##### `jest.fn`
注意：所创建的`mock`函数可以设置返回值，定义内部实现或返回`Promise`。

基本使用实例：
1. 创建一个`mock`函数
```
let mockFn = jest.fn();
```
2. 调用这个`mock`函数
```
let result = mockFn(1, 2, 3);
```
3. 对`mock`函数的返回值进行断言
```
// 断言mockFn的执行后返回undefined
expect(result).toBeUndefined();
// 断言mockFn被调用
expect(mockFn).toBeCalled();
// 断言mockFn被调用了一次
expect(mockFn).toBeCalledTimes(1);
// 断言mockFn传入的参数为1, 2, 3
expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
```


##### `jest.mock`
使用场景：
创建一个替身对象，代替真实的对象

基本使用：
1. mock掉指定模块
```
jest.mock('axios');
```
2. 实现需要mock的模块，在当前测试文件坐在的目录下创建__mocks__文件夹，创建需要被`mock`的目标模块，如下就`mock`了`axios`模块个`get`方法
```
export default {
  get: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('tom')
      }, 1000)
    })
  }
}
```
3. 执行一些操作，以便`mock`的目标被执行
```
const instance = wrapper.instance()
const data = await instance.loadUserName()
```
4. 断言结果
```
expect(data).toEqual('tom');
```


##### `jest.spyOn`
基本使用：
1. 指定对象和需要监听的方法
```
const getSpy = jest.spyOn(axios, 'get')
```
2. 运行目标对象
```
shallow(<App />)
```
3. 对间谍函数进行断言
```
expect(getSpy).toBeCalled()
```

使用场景：
检测`react`生命周期函数是否实际的执行


##### `enzyme`
`enzyme`是一个测试工具，提供一些测试方法配合`jest`让我们能够更方便的编写测试用例
(enzyme Introduction)[https://airbnb.io/enzyme/]

安装流程：
1. 安装依赖包
```
npm install --save-dev enzyme enzyme-adapter-react-16
```
2. 启动设置
在`src`目录下新建配置文件`setupTests.js`编写如下配置
```
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
```

`shallow mount render`




<!-- expect.assertions(1); -->
<!-- 确保在异步的测试用例中，有一个断言会在回调函数中被执行，否则测试失败 -->