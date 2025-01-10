import React from "react";
import { useSelector } from "react-redux";
import { selectSearchValue } from "../search/searchSlice";
import { useDebounce } from "@/hooks/useDebounce";

export const withSearch = (WrappedComponent) => {
  return (props) => {
    const searchSelector = useSelector(selectSearchValue);
    const search = useDebounce(searchSelector);
    return <WrappedComponent {...props} search={search} />;
  };
};
