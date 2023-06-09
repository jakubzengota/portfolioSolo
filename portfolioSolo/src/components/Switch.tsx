import { useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

function Switch() {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    if (!isToggled) {
        document.documentElement.setAttribute('data-theme', 'second');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
  };

  return (
    <div className="darkModeContainer">
      <SunIcon />
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
      <MoonIcon />
    </div>
  );
}
export default Switch;
