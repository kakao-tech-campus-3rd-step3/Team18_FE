import { Button } from '@/shared/components/Button';
import * as S from './index.styled';

type Props = {
  clubId: number;
};

export const RecruitClosedSection = ({ clubId }: Props) => {
  return (
    <S.Container>
      <S.Logo src='/assets/logo.png' alt='Dongari-um 로고' />
      <S.Message>지금은 지원 기간이 아니에요.</S.Message>
      <S.SubText>모집이 시작되면 동아리 상세 페이지에서 다시 지원할 수 있어요.</S.SubText>
      <Button to={`/clubs/${clubId}`} width='15rem'>
        동아리 상세로 돌아가기
      </Button>
    </S.Container>
  );
};
