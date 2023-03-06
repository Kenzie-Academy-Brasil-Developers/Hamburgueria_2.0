import { MdSearch } from 'react-icons/md';

import { useContext } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { pageBuyContext } from '../../../providers/CartContext';

const SearchForm = () => {
  const { tSearch, hSearch, hChange } =
    useContext(pageBuyContext);

  return (
    <StyledSearchForm onSubmit={hSearch}>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        value={tSearch}
        onChange={hChange}
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
