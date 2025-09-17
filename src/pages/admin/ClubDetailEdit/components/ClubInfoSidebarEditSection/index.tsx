import { mockClubDetail } from '../mock';
import { useState } from 'react';
import * as S from './index.styled';

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
      <S.InfoItem>
        <span>{label}:</span>
        {isEditing ? (
          <S.InlineInput
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={() => setEditingField(null)}
            autoFocus
          />
        ) : (
          <span>{value}</span>
        )}
        {!isEditing && <S.EditIcon onClick={() => setEditingField(fieldKey)} />}
      </S.InfoItem>
    );
  };

  return (
    <S.SidebarContainer>
      {renderEditableItem('회장 이름', presidentName, 'presidentName', setPresidentName)}
      {renderEditableItem('연락처', initialPresidentPhoneNumber, 'presidentPhoneNumber', () => {})}
      {renderEditableItem('동방 위치', initialLocation, 'location', () => {})}
      <S.InfoItem>
        모집 기간: {formatDate(recruitStart)} ~ {formatDate(recruitEnd)}
      </S.InfoItem>
      {renderEditableItem('정기 모임', initialRegularMeetingInfo, 'regularMeetingInfo', () => {})}
      {renderEditableItem('모집 상태', initialRecruitStatus, 'recruitStatus', () => {})}
      <S.Notice>지원 시 유의사항이 여기에 들어갑니다.</S.Notice>
    </S.SidebarContainer>
  );
};

