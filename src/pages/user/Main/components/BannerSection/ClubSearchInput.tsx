import styled from '@emotion/styled';
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

export default function ClubSearchInput() {
  return (
    <InputWrapper>
      <Input placeholder='동아리를 검색하세요.' />
      <SearchIcon />
    </InputWrapper>
  );
}
