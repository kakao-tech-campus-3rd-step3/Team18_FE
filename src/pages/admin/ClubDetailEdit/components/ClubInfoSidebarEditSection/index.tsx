import { mockClubDetail } from '../mock';
import { useState } from 'react';
import * as S from './index.styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const ClubInfoSidebarEditSection = () => {
  const {
    presidentName: initialPresidentName,
    presidentPhoneNumber: initialPresidentPhoneNumber,
    location: initialLocation,
    recruitStart: initialRecruitStart,
    recruitEnd: initialRecruitEnd,
    regularMeetingInfo: initialRegularMeetingInfo,
    recruitStatus: initialRecruitStatus,
    applicationNotices: initialApplicationNotices,
  } = mockClubDetail;

  const [presidentName, setPresidentName] = useState(initialPresidentName);
  const [editingField, setEditingField] = useState<string | null>(null);

  const [recruitStart, setRecruitStart] = useState<Date | null>(
    initialRecruitStart ? new Date(initialRecruitStart) : null,
  );
  const [recruitEnd, setRecruitEnd] = useState<Date | null>(
    initialRecruitEnd ? new Date(initialRecruitEnd) : null,
  );
  const [applicationNotices, setApplicationNotices] = useState(initialApplicationNotices);


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

  //   const getRecruitStartString = () =>
  //     recruitStart
  //       ? `${recruitStart.getFullYear()}-${String(
  //           recruitStart.getMonth() + 1
  //         ).padStart(2, "0")}-${String(recruitStart.getDate()).padStart(
  //           2,
  //           "0"
  //         )}T00:00:00`
  //       : null;

  //   const getRecruitEndString = () =>
  //     recruitEnd
  //       ? `${recruitEnd.getFullYear()}-${String(
  //           recruitEnd.getMonth() + 1
  //         ).padStart(2, "0")}-${String(recruitEnd.getDate()).padStart(
  //           2,
  //           "0"
  //         )}T23:59:59`
  //       : null;

  return (
    <S.SidebarContainer>
      {renderEditableItem('회장 이름', presidentName, 'presidentName', setPresidentName)}
      {renderEditableItem('연락처', initialPresidentPhoneNumber, 'presidentPhoneNumber', () => {})}
      {renderEditableItem('동방 위치', initialLocation, 'location', () => {})}

      <S.InfoItem>
        <span>모집 시작일:</span>
        <DatePicker
          selected={recruitStart ?? undefined}
          onChange={(date: Date | null) => setRecruitStart(date)}
          dateFormat='yyyy/MM/dd'
          customInput={<S.InlineInput />}
        />
      </S.InfoItem>

      <S.InfoItem>
        <span>모집 마감일:</span>
        <DatePicker
          selected={recruitEnd ?? undefined}
          onChange={(date: Date | null) => setRecruitEnd(date)}
          minDate={recruitStart ?? undefined}
          dateFormat='yyyy/MM/dd'
          customInput={<S.InlineInput />}
        />
      </S.InfoItem>

      {renderEditableItem('정기 모임', initialRegularMeetingInfo, 'regularMeetingInfo', () => {})}
      {renderEditableItem('모집 상태', initialRecruitStatus, 'recruitStatus', () => {})}
      {renderEditableItem('지원 시 유의사항', applicationNotices, 'applicationNotices', setApplicationNotices )}
      
    </S.SidebarContainer>
  );
};
