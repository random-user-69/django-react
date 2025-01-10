import { Box, Button, Flex, Group, Heading, Input } from "@chakra-ui/react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchValue, setSearch } from "@/features/search/searchSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearchValue);

  return (
    <Box py={2} px={4}>
      <Flex align={"center"} gapX={10}>
        <Heading size={"2xl"}>DJRCommerce</Heading>
        <Group attached flexGrow={1}>
          <Input
            placeholder="Search for products"
            variant={"subtle"}
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
          <Button colorPalette={"blue"}>Search</Button>
        </Group>
        <ul>
          <Button>
            <Link to="/signup">Signup/Login</Link>
          </Button>
        </ul>
      </Flex>
    </Box>
  );
};
