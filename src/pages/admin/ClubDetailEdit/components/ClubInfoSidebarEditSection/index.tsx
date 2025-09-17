import styled from '@emotion/styled';
import { Button } from '@/shared/components/Button';
import { mockClubDetail } from '../mock';
import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';

export const ClubInfoSidebarEditSection = () => {
  const {
    presidentName: initialPresidentName,
    presidentPhoneNumber: initialPresidentPhoneNumber,
    location: initialLocation,
    recruitStart,
    recruitEnd,
    regularMeetingInfo: initialRegularMeetingInfo,
    recruitStatus: initialRecruitStatus,
  } = mockClubDetail;

  const [presidentName, setPresidentName] = useState(initialPresidentName);
  const [editingField, setEditingField] = useState<string | null>(null);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  };

  const renderEditableItem = (
    label: string,
    value: string,
    fieldKey: string,
    onChange: (newValue: string) => void,
  ) => {
    const isEditing = editingField === fieldKey;

    return (
      <InfoItem>
        <span>{label}:</span>
        {isEditing ? (
          <InlineInput
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={() => setEditingField(null)}
            autoFocus
          />
        ) : (
          <span>{value}</span>
        )}
        {!isEditing && <EditIcon onClick={() => setEditingField(fieldKey)} />}
      </InfoItem>
    );
  };

  return (
    <SidebarContainer>
      {renderEditableItem('회장 이름', presidentName, 'presidentName', setPresidentName)}
      {renderEditableItem('연락처', initialPresidentPhoneNumber, 'presidentPhoneNumber', () => {})}
      {renderEditableItem('동방 위치', initialLocation, 'location', () => {})}
      <InfoItem>
        모집 기간: {formatDate(recruitStart)} ~ {formatDate(recruitEnd)}
      </InfoItem>
      {renderEditableItem('정기 모임', initialRegularMeetingInfo, 'regularMeetingInfo', () => {})}
      {renderEditableItem('모집 상태', initialRecruitStatus, 'recruitStatus', () => {})}

      <Button to='/'>지원하기</Button>
      <Notice>지원 시 유의사항이 여기에 들어갑니다.</Notice>
    </SidebarContainer>
  );
};

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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
}));

const InlineInput = styled.input(({ theme }) => ({
  border: 'none',
  borderBottom: `1px solid ${theme.colors.gray300}`,
  fontSize: theme.font.size.sm,
  padding: '2px 4px',
  flex: 1,
  textAlign: 'center',
  '&:focus': {
    outline: 'none',
    borderBottom: `1px solid ${theme.colors.primary}`,
  },
}));

const EditIcon = styled(FiEdit2)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.colors.gray500,
  '&:hover': {
    color: theme.colors.primary,
  },
}));

const Notice = styled.div(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
}));
