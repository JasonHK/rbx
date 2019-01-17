import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic, HelpersProps } from "../../base";

export type MenuListItemModifierProps = Partial<{
  active: boolean;
  menu: React.ReactNode;
}>;

export type MenuListItemProps = HelpersProps & MenuListItemModifierProps;

export const MenuListItem = forwardRefAs<MenuListItemProps, "a">(
  ({ active, className, menu, ...rest }, ref) => (
    <li>
      <Generic
        className={classNames({ "is-active": active }, className)}
        ref={ref}
        {...rest}
      />
      {menu}
    </li>
  ),
  { as: "a" },
);

MenuListItem.displayName = "Menu.List.Item";
MenuListItem.propTypes = {
  active: PropTypes.bool,
  menu: PropTypes.node,
};