import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bgColor={"Red"}>
      <Flex color={"white"} fontWeight={"700"} justifyItems={"center"}>
        <Image
          src="https://thesouledstore.ae/cdn/shop/files/logo.gif?v=1673249256&width=250"
          alt="Logo"
          color={"white"}
          h={"7vh"}
        ></Image>
        <Flex>
          <Spacer
            h={"10"}
            _hover={{ backgroundColor: "white", color: "red" }}
            p={1}
          >
            <Link to={"/men"}>
              <p>MEN</p>
            </Link>
          </Spacer>
          <Spacer
            h={"10"}
            p={1}
            _hover={{ backgroundColor: "white", color: "red" }}
          >
            <Link to={"/women"}>WOMEN</Link>
          </Spacer>
        </Flex>

        <Spacer>CONTACT US</Spacer>
        <Spacer>DOWNLOAD APP</Spacer>
      </Flex>
    </Box>
  );
};

export default Navbar;
