import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Link from "./Link";

describe("test snapshot", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Link />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("changes the class when hovered", () => {
    const component = renderer.create(
      <Link page="http://www.facebook.com">Facebook</Link>
    );
    
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree = component.toJSON()
    tree.props.onMouseEnter();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree = component.toJSON()
    tree.props.onMouseLeave();
    expect(tree).toMatchSnapshot();
  });
});
