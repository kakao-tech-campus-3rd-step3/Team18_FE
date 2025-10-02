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

export const UserInfoWrapper = styled.div(({ theme }) => ({
  width: '48rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  borderBottom: `1px solid ${theme.colors.gray200}`,
  paddingBottom: '3rem',
}));

export const FormField = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const FormRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: '2.5rem',
  width: '100%',
  '& > *': {
    flex: '1 1 0',
    minWidth: 0,
  },
});

export const Label = styled.label(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontWeight: theme.font.weight.medium,
}));

const FlexColumn = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const QuestionWrapper = styled(FlexColumn)({
  width: '48rem',
  gap: '3rem',
});

export const ChoiceFormFiled = styled(FlexColumn)({
  gap: '1rem',
});

export const FormContainer = styled.main({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem',
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
