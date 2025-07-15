import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClickLink }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} onClick={onClickLink} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
