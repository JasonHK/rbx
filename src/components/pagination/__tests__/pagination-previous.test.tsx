import Enzyme from "enzyme";
import React from "react";

import { PaginationPrevious } from "../pagination-previous";

import { hasProperties, testGenericPropTypes } from "../../../__tests__/testing";

describe("PaginationPrevious component", () => {
  hasProperties(PaginationPrevious, {
    defaultProps: {
      as: "a",
      children: "Previous",
    },
  });

  it("should render as the default element", () => {
    const wrapper = Enzyme.shallow(<PaginationPrevious />);
    expect(wrapper.is("a")).toBe(true);
  });

  it("should render as a custom component", () => {
    const as = "span";
    const wrapper = Enzyme.shallow(<PaginationPrevious as={as} />);
    expect(wrapper.is(as)).toBe(true);
  });

  it("should forward ref", () => {
    const ref = React.createRef<HTMLAnchorElement>();
    // Enzyme owns outer ref: https://github.com/airbnb/enzyme/issues/1852
    const wrapper = Enzyme.mount(
      <div>
        <PaginationPrevious ref={ref} />
      </div>,
    );
    try {
      expect(ref.current).toBe(wrapper.find(".pagination-previous").instance());
    } finally {
      wrapper.unmount();
    }
  });

  it("should have bulma className", () => {
    const wrapper = Enzyme.shallow(<PaginationPrevious />);
    expect(wrapper.hasClass("pagination-previous")).toBe(true);
  });

  it("should preserve custom className", () => {
    const className = "foo";
    const wrapper = Enzyme.shallow(
      <PaginationPrevious className={className} />,
    );
    expect(wrapper.hasClass(className)).toBe(true);
  });

  describe("propTypes", () => {
    const { propTypes } = PaginationPrevious;
    testGenericPropTypes(propTypes);
  });
});