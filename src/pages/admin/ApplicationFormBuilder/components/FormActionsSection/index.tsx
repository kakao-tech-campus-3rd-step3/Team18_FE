import styled from '@emotion/styled';
import { Button } from '@/shared/components/Button';

type Props = {
  onCancel: () => void;
  onSave: () => void;
};

export const ApplicationFormActionsSection = ({ onCancel, onSave }: Props) => {
  return (
    <Layout>
      <Button variant='outline' onClick={onCancel}>
        취소
      </Button>
      <Button onClick={onSave}>저장하기</Button>
    </Layout>
  );
};

const Layout = styled.div(({ theme }) => ({
  display: 'flex',
  gap: '1.5rem',
  width: '100%',
  marginTop: '1rem',

  '& > *': {
    width: 'auto',
    flex: '1 1 0',
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gap: '1rem',
    marginTop: '0.5rem',
  },
}));
