import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@/shared/components/Button';

const ClubInfoSidebarSection: React.FC = () => {
  return (
    <SidebarContainer>
      <InfoItem>회장 이름: 홍길동</InfoItem>
      <InfoItem>연락처: 010-1234-5678</InfoItem>
      <InfoItem>동방 위치: 123호</InfoItem>
      <InfoItem>모집 기간: 9/1 ~ 9/30</InfoItem>
      <InfoItem>정기 모임: 매주 월요일</InfoItem>
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
