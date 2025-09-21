import styled from '@emotion/styled';

type InputProps = {
  width?: string;
  height?: string;
  padding?: string;
};

const Input = styled.input<InputProps>(({ theme, width, height, padding }) => ({
  borderRadius: '10px',
  border: `1px solid ${theme.colors.gray200}`,
  backgroundColor: theme.colors.gray100,
  width: width || '100%',
  height: height || '30px',
  padding: padding || '0 10px',

  textAlign: 'left',
}));

export default Input;
