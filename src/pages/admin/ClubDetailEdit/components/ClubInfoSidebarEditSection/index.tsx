import 'react-datepicker/dist/react-datepicker.css';
import { useFormContext } from 'react-hook-form';
import { UnderlineInputField } from '@/shared/components/Form/InputField/UnderlineInputField';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import { formatDate } from '@/utils/dateUtils';
import * as S from './index.styled';

export const ClubInfoSidebarEditSection = () => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext<{
    presidentName: string;
    presidentPhoneNumber: string;
    location: string;
    recruitStart: string | null;
    recruitEnd: string | null;
    regularMeetingInfo: string;
    applicationNotice: string;
  }>();

  const formValues = getValues();

  return (
    <S.SidebarContainer>
      <S.InfoItem>
        <S.Label>회장 이름</S.Label>
        <S.DisplayWrapper>
          <S.DisplayText>{formValues.presidentName || '-'}</S.DisplayText>
        </S.DisplayWrapper>
      </S.InfoItem>

      <S.InfoItem>
        <S.Label>연락처</S.Label>
        <S.InputWrapper>
          <UnderlineInputField
            {...register('presidentPhoneNumber', {
              pattern: {
                value: /^\d{3}-\d{4}-\d{4}$/,
                message: '’ - ’를 포함한 형식으로 입력해주세요.',
              },
              validate: (value) =>
                !value ||
                /^\d{3}-\d{4}-\d{4}$/.test(value) ||
                '전화번호 형식은 000-0000-0000입니다.',
            })}
            invalid={!!errors.presidentPhoneNumber}
            message={errors.presidentPhoneNumber?.message}
          />
        </S.InputWrapper>
      </S.InfoItem>

      <S.InfoItem>
        <S.Label required>동방 위치</S.Label>
        <S.InputWrapper>
          <UnderlineInputField
            {...register('location', {
              required: '동방 위치를 입력해주세요.',
              maxLength: { value: 20, message: '20자 이하로 입력해주세요.' },
            })}
            invalid={!!errors.location}
            message={errors.location?.message}
          />
        </S.InputWrapper>
      </S.InfoItem>

      <S.InfoItem>
        <S.Label required>정기 모임</S.Label>
        <S.InputWrapper>
          <UnderlineInputField
            {...register('regularMeetingInfo', {
              required: '정기 모임 정보를 입력해주세요.',
              maxLength: { value: 50, message: '50자 이하로 입력해주세요.' },
            })}
            invalid={!!errors.regularMeetingInfo}
            message={errors.regularMeetingInfo?.message}
          />
        </S.InputWrapper>
      </S.InfoItem>

      <S.InfoItem>
        <S.Label>모집 기간</S.Label>
        <S.DisplayWrapper>
          <S.DisplayText>
            {formValues.recruitStart && formValues.recruitEnd
              ? `${formatDate(formValues.recruitStart)} ~ ${formatDate(formValues.recruitEnd)}`
              : '-'}
          </S.DisplayText>
        </S.DisplayWrapper>
      </S.InfoItem>

      <S.InfoItem column>
        <S.Label>지원 시 유의사항</S.Label>
        <OutlineTextareaField
          {...register('applicationNotice', {
            maxLength: { value: 100, message: '100자 이하로 입력해주세요.' },
            validate: (value) => !value || value.length <= 100 || '100자 이하로 입력해주세요.',
          })}
          invalid={!!errors.applicationNotice}
          message={errors.applicationNotice?.message}
        />
      </S.InfoItem>

      <S.SubText>- 모집 일정은 지원폼 수정 페이지에서 수정할 수 있습니다.</S.SubText>
      <S.SubText>- 회장 변경 시 개발팀에 문의하세요.</S.SubText>
    </S.SidebarContainer>
  );
};
