import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

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

export const UserInfoWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 60,
  padding: 40,
});

export const FormField = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const Label = styled.label(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontWeight: theme.font.weight.medium,
}));

export const QuestionWrapper = styled.div({
  width: '48rem',
  display: 'flex',
  flexDirection: 'column',
  gap: 60,
  padding: 40,
});

export const ChoiceFormFiled = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: 40,
  gap: 10,
});

export const FormContainer = styled.main({
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
  alignItems: 'center',
});

export const ErrorMessage = styled.span(({ theme }) => ({
  color: theme.colors.warning,
  fontSize: theme.font.size.xs,
  padding: 0,
}));

interface TimeSpanProps {
  selected?: boolean;
}

export const TimeSpan = styled.span<TimeSpanProps>(({ theme, selected }) => ({
  backgroundColor: selected ? theme.colors.primary200 : 'white',
  border: '1px solid ',
}));
