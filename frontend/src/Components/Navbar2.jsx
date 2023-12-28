import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const Navbar2 = () => {
  return (
    <Flex justify={"space-evenly"} ml={"10"} backgroundColor={"white"}>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          backgroundColor={"white"}
          color={"gray"}
          _hover={{ color: "Red" }}
        >
          WINTERWEAR 23
        </MenuButton>
        <MenuList>
          <MenuItem>All Winterwears</MenuItem>
          <MenuItem>Hoodies</MenuItem>
          <MenuItem>Jackets</MenuItem>
          <MenuItem>OverSized Full Sleves</MenuItem>
          <MenuItem>Full-Sleves Shirts</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          backgroundColor={"white"}
          color={"gray"}
          _hover={{ color: "Red" }}
        >
          TOPWEAR
        </MenuButton>
        <MenuList>
          <MenuItem>All Winterwears</MenuItem>
          <MenuItem>Hoodies</MenuItem>
          <MenuItem>Jackets</MenuItem>
          <MenuItem>OverSized Full Sleves</MenuItem>
          <MenuItem>Full-Sleves Shirts</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          backgroundColor={"white"}
          color={"gray"}
          _hover={{ color: "Red" }}
        >
          BOTTOMWEAR
        </MenuButton>
        <MenuList>
          <MenuItem>All Winterwears</MenuItem>
          <MenuItem>Hoodies</MenuItem>
          <MenuItem>Jackets</MenuItem>
          <MenuItem>OverSized Full Sleves</MenuItem>
          <MenuItem>Full-Sleves Shirts</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          backgroundColor={"white"}
          color={"gray"}
          _hover={{ color: "Red" }}
        >
          SNEAKERS
        </MenuButton>
        <MenuList>
          <MenuItem>All Winterwears</MenuItem>
          <MenuItem>Hoodies</MenuItem>
          <MenuItem>Jackets</MenuItem>
          <MenuItem>OverSized Full Sleves</MenuItem>
          <MenuItem>Full-Sleves Shirts</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar2;
