import "../CSS/navigationbar.css";
import React, { useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiCalendar2Line,
  RiFolder2Line,
  RiUserFollowLine,
  RiPlantLine,
  RiStackLine,
  RiUserUnfollowLine,
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";

function Sidebars() {
  const [collapsed, setCollapsed] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const handleMouseEnter = () => {
    setCollapsed(false);
  };

  const handleMouseLeave = () => {
    setCollapsed(true);
  };

  return (
    <div>
      <Sidebar
        className={`app ${toggled ? "toggled" : ""}`}
        style={{ height: "100%", position: "absolute" }}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      >
        <main>
          <Menu>
            {collapsed ? (
              <MenuItem icon={<FiChevronsRight />} onClick={handleCollapsedChange}></MenuItem>
            ) : (
              <MenuItem suffix={<FiChevronsLeft />} onClick={handleCollapsedChange}>
                <div style={{padding: "9px",fontWeight: "bold",fontSize: 14,letterSpacing: "1px",}}>
                  Duranc Welcomes You!..
                </div>
              </MenuItem>
            )}
            <hr />
          </Menu>
          <Menu>
            <MenuItem icon={<RiHome4Line />}>Home</MenuItem>
            <SubMenu label={"Dashboard"} icon={<RiTeamLine />}>
              <MenuItem icon={<RiUserFollowLine />}>Platform Applications{" "}</MenuItem>
              <MenuItem icon={<RiUserUnfollowLine />}>Master Service Providers</MenuItem>
              <MenuItem icon={<RiCalendar2Line />}>Products</MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Health"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}>Device Health</MenuItem>
              <MenuItem icon={<RiPlantLine />}>Recordings</MenuItem>
              <MenuItem icon={<RiPlantLine />}>Recording Status</MenuItem>
            </SubMenu>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default Sidebars;





