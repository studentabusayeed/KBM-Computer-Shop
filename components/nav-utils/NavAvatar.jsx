'use client'
import { Dropdown, Avatar, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarContent } from "@nextui-org/react";

const NavAvatar = () => {
  return (
        <Dropdown>
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="success"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="dashbaord">Dashboard</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        
  );
};

export default NavAvatar;