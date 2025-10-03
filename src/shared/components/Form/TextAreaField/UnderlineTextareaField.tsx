import styled from '@emotion/styled';
import { Text } from '@/shared/components/Text';
import { useEffect, useRef } from 'react';

type Props = {
  invalid?: boolean;
  message?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const UnderlineTextareaField = ({ invalid, message, ...props }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [props.value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    adjustHeight();
    props.onChange?.(e);
  };

  return (
    <>
      <Input ref={textareaRef} invalid={invalid} {...props} onChange={handleChange} />
      {message && (
        <Text size={'xs'} color={invalid ? '#fa342c' : '#b0b3ba'}>
          {message}
        </Text>
      )}
    </>
  );
};

const Input = styled.textarea<Pick<Props, 'invalid'>>(({ theme, invalid }) => ({
  width: '100%',
  border: 'none',
  borderBottom: `1px solid ${theme.colors.gray300}`,
  fontSize: theme.font.size.sm,
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  marginBottom: '0.3rem',
  textAlign: 'left',
  padding: '0.25rem 0',
  lineHeight: 1.5,
  minHeight: '1.5em',
  resize: 'none',
  overflow: 'hidden',
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
