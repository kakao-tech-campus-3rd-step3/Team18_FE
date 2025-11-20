import styled from '@emotion/styled';
import { Text } from '@/shared/components/Text';

type Props = {
  invalid?: boolean;
  message?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const OutlineInputField = ({ invalid, message, ...props }: Props) => {
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
  border: `1px solid ${theme.colors.border}`,
  borderRadius: theme.radius.md,
  fontSize: theme.font.size.base,
  padding: '8px 12px',
  lineHeight: 1.6,
  resize: 'vertical',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  boxSizing: 'border-box',

  '&:focus': {
    outline: 'none',
    borderColor: theme.colors.primary,
  },

  '&::placeholder': {
    color: theme.colors.textSecondary,
  },

  borderColor: invalid ? theme.colors.error : theme.colors.gray200,
}));
