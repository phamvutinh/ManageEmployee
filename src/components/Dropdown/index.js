import React from "react";
import { Menu, Dropdown, Button } from "antd";
import "./style.scss";

function DropDown({ initValue, listDropdown, onClick, ...rest }) {
  const [value, setValue] = React.useState(initValue);
  const handleClick = (value) => {
    if (value) {
      setValue(value);
    }
    if (onClick) {
      onClick(value);
    }
  };

  React.useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  const menu = () => (
    <Menu>
      <Menu.Item onClick={() => handleClick()}>All</Menu.Item>
      {listDropdown?.length &&
        listDropdown.map((item, index) => (
          <Menu.Item onClick={() => handleClick(item.key)} key={item.key}>
            {item.key}
          </Menu.Item>
        ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomLeft">
      <Button className="dropdown" {...rest}>
        {value}
      </Button>
    </Dropdown>
  );
}

export default DropDown;
