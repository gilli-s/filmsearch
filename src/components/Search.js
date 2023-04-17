import React, {useState} from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchInputChanges = (e) => {
      setSearchValue(e.target.value);
  }
};