import React from "react";
import { shallow } from "enzyme";

import List from "./List";

jest.mock('axios');

describe("test jest.fn", () => {
  it("fn should be call", () => {
    const fn = jest.fn();
    shallow(<List loadData={fn} />);
    expect(fn).toBeCalled();
  });
});

describe("test jest.mock", () => {
  it("fn should be call", async () => {
    expect.assertions(4);

    const spyLoadPost = jest.spyOn(List.prototype, 'loadUserName')
    const wrapper = shallow(<List loadData={() => {}} />);

    expect(wrapper.find('.username').text()).toEqual('')
    // 1 执行this.loadUserName方法
    // 2 等待异步请求执行完成后断言结果
    const instance = wrapper.instance()
    const data = await instance.loadUserName()
    expect(data).toEqual('tom');
    expect(wrapper.find('.username').text()).toEqual('tom')

    expect(spyLoadPost).toBeCalled();
  });
});

describe("test jest.spyOn", () => {
  it("fn should be call", () => {
    const spyFunction = jest.spyOn(List.prototype, "componentDidMount");

    shallow(<List loadData={() => {}} />);
    expect(spyFunction).toBeCalled();
  });

  it('handleClick should be call', () => {
    const spyHandleClick = jest.spyOn(List.prototype, 'handleClick')
    const wrapper = shallow(<List loadData={() => {}} />);

    // 调用组件方法的方式

    // 方式1：触发含有handleClick事件绑定的元素
    // 结果：断言成功 有效
    wrapper.find('button').simulate('click')
    expect(wrapper.state().items.length).toEqual(3)

    // 方式2：通过wrapper.instance()获取组件的实例，然后通过组件实例调用方法
    // 结果：断言成功 有效
    const instance = wrapper.instance()
    instance.handleClick()
    expect(wrapper.state().items.length).toEqual(4)

    expect(spyHandleClick).toBeCalled();
  })
});
