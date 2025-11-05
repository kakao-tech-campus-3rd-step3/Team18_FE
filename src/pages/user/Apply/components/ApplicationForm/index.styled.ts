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
  boxSizing: 'border-box',
  width: '48rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  borderBottom: `1px solid ${theme.colors.gray200}`,
  paddingBottom: '3rem',

  '@media (max-width: 48rem)': {
    width: '100%',
  },
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
  boxSizing: 'border-box',
  width: '48rem',
  gap: '3rem',

  '@media (max-width: 48rem)': {
    width: '100%',
  },
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: selected ? 'white' : theme.colors.gray800,
  border: `1px solid ${theme.colors.gray300}`,
  borderRadius: '6px',
  width: '100px',
  height: '30px',
  transition: 'background-color 0.15s, color 0.15s',
  '&:hover': {
    backgroundColor: selected ? theme.colors.primary300 : theme.colors.gray200,
  },
}));

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const DateText = styled.span(({ theme }) => ({
  textAlign: 'center',
  width: '100px',
  padding: '10px 0 20px 0',
  fontWeight: theme.font.weight.bold,
  fontSize: theme.font.size.sm,
}));

export const AutoSaveIndicator = styled.span(({ theme }) => ({
  position: 'fixed',
  top: '1.25rem',
  right: '1.875rem',
  fontSize: '0.8125rem',
  color: theme.colors.textSecondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.375rem',
  zIndex: 1000,
  backgroundColor: 'white',
  width: '10rem',
  padding: '0.375rem 0.75rem',
  borderRadius: '0.25rem',
}));

export const ActionButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;
