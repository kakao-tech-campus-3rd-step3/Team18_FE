import styled from '@emotion/styled';
import _ from 'lodash';
import { FiSearch } from 'react-icons/fi';

const InputWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '30%',
  border: `1px solid ${theme?.colors?.border}`,
  borderRadius: theme?.radius?.md,
  padding: '10px 10px',
  backgroundColor: '#fff',
}));

const Input = styled.input(({ theme }) => ({
  flex: 1,
  border: 'none',
  outline: 'none',
  fontSize: theme?.font?.size?.base,
}));

const SearchIcon = styled(FiSearch)({
  marginRight: '8px',
  color: '#666',
});

type Props = {
  onChange: (s: string) => void;
};

export function ClubSearchInput({ onChange }: Props) {
  const handleSearchText = _.debounce((text) => onChange(text), 200);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchText(e.target.value);
  };

  return (
    <InputWrapper>
      <Input onChange={handleChange} placeholder='동아리를 검색하세요.' />
      <SearchIcon />
    </InputWrapper>
  );
}
