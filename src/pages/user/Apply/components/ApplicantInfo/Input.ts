import styled from '@emotion/styled';

type InputProps = {
  width?: string;
  height?: string;
  padding?: string;
};

export const TextInput = styled.input<InputProps>(({ theme, width, height, padding }) => ({
  borderRadius: '10px',
  border: `1px solid ${theme.colors.gray200}`,
  backgroundColor: theme.colors.gray100,
  width: width || '100%',
  height: height || '30px',
  padding: padding || '0 10px',
  textAlign: 'left',
}));

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

export const TextAreaInput = styled.textarea<InputProps>(({ theme, width, height, padding }) => ({
  borderRadius: '10px',
  border: `1px solid ${theme.colors.gray200}`,
  backgroundColor: theme.colors.gray100,
  width: width || '100%',
  height: height || '30px',
  padding: padding || '10px 10px',
  textAlign: 'left',
}));
