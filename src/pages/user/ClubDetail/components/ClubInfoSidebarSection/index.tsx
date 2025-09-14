import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@/shared/components/Button';
import { mockClubDetail } from '../mock';

const ClubInfoSidebarSection: React.FC = () => {
  const { 
    presidentName,
    presidentPhoneNumber,
    location,
    recruitStart,
    recruitEnd,
    regularMeetingInfo,
    recruitStatus
  } = mockClubDetail;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  };

  return (
    <SidebarContainer>
      <InfoItem>회장 이름: {presidentName}</InfoItem>
      <InfoItem>연락처: {presidentPhoneNumber}</InfoItem>
      <InfoItem>동방 위치: {location}</InfoItem>
      <InfoItem>
        모집 기간: {formatDate(recruitStart)} ~ {formatDate(recruitEnd)}
      </InfoItem>
      <InfoItem>정기 모임: {regularMeetingInfo}</InfoItem>
      <InfoItem>모집 상태: {recruitStatus}</InfoItem>
      <Button to='/'>지원하기</Button>
      <Notice>지원 시 유의사항이 여기에 들어갑니다.</Notice>
    </SidebarContainer>
  );
};

export default ClubInfoSidebarSection;

const SidebarContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  padding: '16px',
  borderRadius: theme.radius.md,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}));

const InfoItem = styled.div(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.textPrimary,
}));

const Notice = styled.div(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
}));
