### 笔记
---


##### `snapshot`快照测试
使用流程：
1. 使用`react-test-renderer`的`renderer`调用`create`方法对组件进行加工
2. 调用加工后组件的`toJSON`方法并得到一个`tree`（这个`tree`应该就是快照的样子了，所有下面可以对其进行断言）
3. 将`tree`与初始快照进行对比`expect(tree).toMatchSnapshot()`


##### `jest.fn`


##### `jest.mock`


##### `jest.spyOn`


##### `enzyme`