import { Text } from '@/shared/components/Text';
import styled from '@emotion/styled';

type Props = {
  invalid?: boolean;
  message?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const UnderlineInputField = ({ invalid, message, ...props }: Props) => {
  return (
    <>
      <Input invalid={invalid} {...props} />
      {message && (
        <Text size={'xs'} color={invalid ? '#fa342c' : '#b0b3ba'}>
          {message}
        </Text>
      )}
    </>
  );
};

const Input = styled.input<Pick<Props, 'invalid'>>(({ theme, invalid }) => ({
  width: '100%',
  border: 'none',
  borderBottom: `1px solid ${theme.colors.gray300}`,
  fontSize: theme.font.size.sm,
  padding: '7.5px 12px',
  flex: 1,
  textAlign: 'center',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  marginBottom: '0.3rem',

  '&:focus': {
    outline: 'none',
    borderBottom: `1px solid ${theme.colors.primary}`,
  },

  '&::placeholder': {
    color: theme.colors.gray400,
  },

  borderColor: invalid ? theme.colors.error : theme.colors.gray200,
}));
