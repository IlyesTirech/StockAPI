import React from 'react';
import styled from 'styled-components';

function Search({ onChangeHandler }) {
  return (
    <StyledSearch>
      <input
        type='text'
        placeholder='      Search..'
        onChange={onChangeHandler}
      />
    </StyledSearch>
  );
}

export default Search;

const StyledSearch = styled.div`
  input {
    display: block;
    width: 100%;
    padding: 1rem;
    outline: none;
    background-color: #b9b9b9;
    border: none;
    margin-top: 10px;
  }
`;
