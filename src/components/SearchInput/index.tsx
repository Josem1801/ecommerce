import React from 'react';
import { FiSearch } from 'react-icons/fi';
import SearchContainer from './styles';

interface SearchInputProps {
  width?: number;
  margin?: string;
}
export default function SearchInput({ width, margin }: SearchInputProps) {
  return (
    <SearchContainer width={width} margin={margin}>
      <input type="text" placeholder="Search for product..." />
      <button type="submit">
        <FiSearch />
      </button>
    </SearchContainer>
  );
}
SearchInput.defaultProps = {
  width: 406,
  margin: '0px',
};
