import React, { FC } from 'react';
import store from '../../store/store';
import HeaderComponent from '../layout/HeaderComponent';
import { SearchInput } from "./style";
const SearchComponent: FC = () => {

  const handleChange = (text: string) => {
    store.setFilterText(text);
  };

  return (
    <HeaderComponent>
      <SearchInput
        onChangeText={handleChange}
        placeholder="Search"
        selectTextOnFocus={true}
        textAlign="center"
      />
    </HeaderComponent>
  );
};

export default SearchComponent;