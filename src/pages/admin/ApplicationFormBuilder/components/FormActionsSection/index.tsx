import styled from '@emotion/styled';
import { Button } from '@/shared/components/Button';

type Props = {
  onCancel: () => void;
  onSave: () => void;
};

export const ApplicationFormActionsSection = ({ onCancel, onSave }: Props) => {
  return (
    <Layout>
      <Button variant='outline' width='4rem' onClick={onCancel}>
        취소
      </Button>
      <Button width='6rem' onClick={onSave}>
        저장하기
      </Button>
    </Layout>
  );
};

const Layout = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.5rem',
  width: '100%',
  marginTop: '1rem',

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    marginTop: '0.5rem',
  },
}));
