import { useGetProductsQuery } from "./productsSlice";
import { ProductCard } from "./ProductCard";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectSearchValue } from "../search/searchSlice";
import { useDebounce } from "@/hooks/useDebounce";

export const ProductsList = () => {
  const searchSelector = useSelector(selectSearchValue);
  const search = useDebounce(searchSelector);

  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery(search);

  let content;

  if (isLoading) {
    content = <h3>Loading...</h3>;
  } else if (isSuccess) {
    content = (
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products.map((product) => (
          <GridItem key={product.id}>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </Grid>
    );
  } else if (isError) {
    content = <h4>Error fetching products: {error}</h4>;
  }

  return (
    <Box px={4}>
      <Heading textAlign={"center"} my={6}>
        Product Catalog
      </Heading>
      {content}
    </Box>
  );
};
