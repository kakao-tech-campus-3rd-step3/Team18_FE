import styled from '@emotion/styled';
import _ from 'lodash';
import { FiSearch } from 'react-icons/fi';

const InputWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  border: 'none',
  borderRadius: '50px',
  padding: '16px 28px',
  backgroundColor: theme.colors.bg,
  boxSizing: 'border-box',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    padding: '14px 24px',
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '12px 20px',
    borderRadius: '40px',
  },
}));

const Input = styled.input(({ theme }) => ({
  flex: 1,
  border: 'none',
  outline: 'none',
  fontSize: theme.font.size.base,
  backgroundColor: 'transparent',

  '::placeholder': {
    color: theme.colors.textSecondary,
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: theme.font.size.sm,
  },
}));

const SearchIcon = styled(FiSearch)(({ theme }) => ({
  marginLeft: '12px',
  fontSize: '20px',
  color: theme.colors.textSecondary,
  flexShrink: 0,

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: '18px',
    marginLeft: '8px',
  },
}));

type Props = {
  onChangeSearch: (s: string) => void;
};

export function ClubSearchInput({ onChangeSearch }: Props) {
  const handleSearchText = _.debounce((text) => onChangeSearch(text), 200);
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
