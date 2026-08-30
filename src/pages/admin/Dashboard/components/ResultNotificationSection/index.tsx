import { theme } from '@/app/styles/theme';
import { useResultNotifications } from '@/pages/admin/Dashboard/hooks/useResultNotifications';
import { API_STAGE_LABEL, REQUEST_STATUS_LABEL } from '@/pages/admin/Dashboard/utils/labelMap';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { SectionHeading } from '@/shared/components/SectionHeading';
import { Text } from '@/shared/components/Text';
import { formatDateTime } from '@/shared/utils/dateUtils';
import * as S from './index.styled';
import type { ResultNotificationRequest } from '@/pages/admin/Dashboard/types/dashboard';

type Props = {
  clubId: number;
};

export const EMPTY_MESSAGE = '아직 결과를 발송한 기록이 없습니다.';
export const ERROR_MESSAGE = '발송 현황을 불러오지 못했습니다.';

const formatCost = (cost: number) => `${cost.toLocaleString('ko-KR')}원`;

const ResultNotificationRow = ({ request }: { request: ResultNotificationRequest }) => {
  const unsettled = request.pending + request.accepted;

  return (
    <S.Tr>
      <S.Td>{formatDateTime(request.requestedAt)}</S.Td>
      <S.Td>{API_STAGE_LABEL[request.stage]}</S.Td>
      <S.Td>
        <S.StatusBadge isProcessing={request.requestStatus === 'PROCESSING'}>
          {REQUEST_STATUS_LABEL[request.requestStatus]}
        </S.StatusBadge>
      </S.Td>
      <S.Td align='right'>{request.total}</S.Td>
      <S.Td>
        <S.CountList>
          <S.Count tone='sent'>성공 {request.sent}</S.Count>
          <S.Count tone='failed'>실패 {request.failed}</S.Count>
          <S.Count tone='unknown'>확인불가 {request.unknown}</S.Count>
          {unsettled > 0 && <S.Count tone='pending'>대기 {unsettled}</S.Count>}
        </S.CountList>
      </S.Td>
      <S.Td align='right'>
        {request.sms + request.lms > 0
          ? `${request.sms + request.lms}건 · ${formatCost(request.estimatedCost)}`
          : '-'}
      </S.Td>
    </S.Tr>
  );
};

/**
 * 결과 발표 요청은 접수 후 채널별로 비동기 발송되므로, 요청 단위로 성공·실패·확인불가 수를 보여준다.
 * 발송 건수는 지원자 수가 아니라 채널별 작업 수다.
 */
export const ResultNotificationSection = ({ clubId }: Props) => {
  const { data, isPending, isError } = useResultNotifications(clubId);

  const renderBody = () => {
    if (isPending) {
      return <LoadingSpinner />;
    }

    if (isError || !data) {
      return (
        <S.Notice>
          <Text size='sm' color={theme.colors.textSecondary}>
            {ERROR_MESSAGE}
          </Text>
        </S.Notice>
      );
    }

    if (data.requests.length === 0) {
      return (
        <S.Notice>
          <Text size='sm' color={theme.colors.textSecondary}>
            {EMPTY_MESSAGE}
          </Text>
        </S.Notice>
      );
    }

    return (
      <S.TableWrapper>
        <S.Table>
          <S.TableHead>
            <tr>
              <S.Th>요청 시각</S.Th>
              <S.Th>전형</S.Th>
              <S.Th>상태</S.Th>
              <S.Th align='right'>발송 건수</S.Th>
              <S.Th>전달 결과</S.Th>
              <S.Th align='right'>문자 · 예상비용</S.Th>
            </tr>
          </S.TableHead>
          <tbody>
            {data.requests.map((request) => (
              <ResultNotificationRow key={request.requestId} request={request} />
            ))}
          </tbody>
        </S.Table>
      </S.TableWrapper>
    );
  };

  return (
    <S.Container>
      <S.Header>
        <SectionHeading>결과 발송 현황</SectionHeading>
        <Text size='sm' color={theme.colors.textSecondary}>
          발송 건수는 지원자 수가 아닌 채널별 발송 작업 수입니다.
        </Text>
      </S.Header>
      {renderBody()}
    </S.Container>
  );
};
