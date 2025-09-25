import styled from '@emotion/styled';

type OptionInputProps = {
  type: 'checkbox' | 'radio';
};

export const OptionInput = styled.input<OptionInputProps>(({ theme, type }) => ({
  appearance: 'none',
  width: '16px',
  height: '16px',
  border: `2px solid ${theme.colors.gray400}`,
  borderRadius: type === 'radio' ? '50%' : '4px',
  cursor: 'pointer',
  '&:checked': {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
}));
