import { Heading, Stack } from "@chakra-ui/react";
import { useGetCategoriesQuery } from "./categoriesSlice";

export const CategoriesList = () => {
  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery();

  let content;

  if (isLoading) {
    content = <h3>Loading...</h3>;
  } else if (isSuccess) {
    content = (
      <Stack>
        {categories.map((category) => (
          <Heading size={"lg"} key={category.id}>
            {category.name}
          </Heading>
        ))}
      </Stack>
    );
  } else if (isError) {
    content = <h3>Failed to fetch categories: {error}</h3>;
  }

  return (
    <div>
      <h3>Categories</h3>
      {content}
    </div>
  );
};
