import styled from '@emotion/styled';
import type { ApplicationStage } from '@/pages/admin/Dashboard/types/dashboard';

type Props = {
  value: ApplicationStage;
  onChange: (value: ApplicationStage) => void;
};

export const StageToggle = ({ value, onChange }: Props) => {
  return (
    <Container>
      <Slider isInterview={value === '면접'} />
      <ToggleButton isActive={value === '서류'} onClick={() => onChange('서류')}>
        서류
      </ToggleButton>
      <ToggleButton isActive={value === '면접'} onClick={() => onChange('면접')}>
        면접
      </ToggleButton>
    </Container>
  );
};

const Container = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  minWidth: '20rem',
  height: 'auto',
  border: `1px solid ${theme.colors.gray300}`,
  borderRadius: theme.radius.lg,
  overflow: 'hidden',
  cursor: 'pointer',
}));

const Slider = styled.div<{ isInterview: boolean }>(({ isInterview, theme }) => ({
  position: 'absolute',
  top: 0,
  left: isInterview ? '50%' : '0',
  width: '50%',
  height: '100%',
  border: `1.5px solid ${theme.colors.primary}`,
  borderRadius: theme.radius.lg,
  boxSizing: 'border-box',
  transition: 'left 0.3s ease-in-out',
  zIndex: 1,
}));

const ToggleButton = styled.button<{ isActive: boolean }>(({ isActive, theme }) => ({
  flex: 1,
  padding: '0.65rem',
  fontSize: '1.125rem',
  fontWeight: '500',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 2,
  color: isActive ? theme.colors.primary : theme.colors.textSecondary,
  transition: 'color 0.3s ease-in-out',

  '&:focus': {
    outline: 'none',
  },
}));
