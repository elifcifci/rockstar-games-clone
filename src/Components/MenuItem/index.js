import React, { useRef } from "react";
import SearchInput from "./SearchInput";
import { menuItems } from "../../Constants/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { generalIcons } from "../../Constants/generalIcons";
import { MenuItemContainer } from "./styles";
import { colors } from "../../Styles/globalStyles";

export default function MenuItem({ pageTitle, isOpen, toggle }) {
  const svgNeeds = [generalIcons[1].viewBox, generalIcons[1].path];
  const carouselWidth = useRef();
  // const [width, setWidth] = useState(770);

  // useEffect(() => {
  //   setWidth(carouselWidth.current.scrollWidth + 17);
  // }, [isOpen]);

  const navbarMenuConfig = {
    open: {
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        delay: 0.2,
      },
    },
    closed: {
      x: -770,
      y: 0,
      transition: {
        type: "tween",
        delay: 0.2,
      },
    },
  };

  const menuItemConfig = {
    initial: { color: colors.white },
    animate: { color: colors.secondary },
  };

  let createMenuItem = menuItems[0].map((item) => {
    return (
      <Link
        to={item.link}
        className="list-item"
        key={item.title}
        onClick={toggle}
      >
        <motion.span
          className={
            item.title === pageTitle ? "list-link active-page" : "list-link"
          }
          initial="initial"
          whileHover="animate"
          variants={menuItemConfig}
        >
          {item.title}
          {item.isIconVisible && (
            <svg className="list_icon" viewBox={svgNeeds[0]}>
              <path d={svgNeeds[1]} />
            </svg>
          )}
        </motion.span>
      </Link>
    );
  });

  return (
    <MenuItemContainer
      ref={carouselWidth}
      variants={navbarMenuConfig}
      title="Site"
    >
      {isOpen && <div className="toggle-back-drop" onClick={toggle} />}
      <SearchInput />
      <div className="menu-list">{createMenuItem}</div>
    </MenuItemContainer>
  );
}
