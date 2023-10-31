import { useState } from "react";
import "./header2.css";
import HeaderMiddle from "./Header";
import HeaderTop2 from "./HeaderTop2";

const Header2 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
        <HeaderTop2 toggle={toggle} setToggle={setToggle} />
        <HeaderMiddle />
    </header>
  );
};

export default Header2;
