import { UnderlineInputField } from '@/shared/components/Form/InputField/UnderlineInputField';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import DatePicker from 'react-datepicker';
import * as S from './index.styled';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormContext, Controller } from 'react-hook-form';

export const ClubInfoSidebarEditSection = () => {
  const {
    register,
    control,
    getValues,
    formState: { errors },
  } = useFormContext<{
    presidentName: string;
    presidentPhoneNumber: string;
    location: string;
    recruitStart: Date | null;
    recruitEnd: Date | null;
    regularMeetingInfo: string;
    applicationNotice: string;
  }>();

  return (
    <S.SidebarContainer>
      <S.InfoItem>
        <S.Label required>회장 이름:</S.Label>
        <UnderlineInputField
          {...register('presidentName', { required: '회장 이름을 입력해주세요.' })}
          invalid={!!errors.presidentName}
          message={errors.presidentName?.message}
        />
      </S.InfoItem>

      <S.InfoItem>
        <S.Label>연락처:</S.Label>
        <UnderlineInputField
          {...register('presidentPhoneNumber', { required: '연락처를 입력해주세요.' })}
          invalid={!!errors.presidentPhoneNumber}
          message={errors.presidentPhoneNumber?.message}
        />
      </S.InfoItem>

      <S.InfoItem>
        <S.Label required>동방 위치:</S.Label>
        <UnderlineInputField
          {...register('location', { required: '동방 위치를 입력해주세요.' })}
          invalid={!!errors.location}
          message={errors.location?.message}
        />
      </S.InfoItem>

      <S.InfoItem>
        <S.Label>모집 시작일:</S.Label>
        <Controller
          control={control}
          name="recruitStart"
          rules={{ required: '모집 시작일을 선택해주세요.' }}
          render={({ field, fieldState }) => (
            <DatePicker
              selected={field.value ?? undefined}
              onChange={(date) => field.onChange(date)}
              onBlur={field.onBlur}
              dateFormat="yyyy/MM/dd"
              customInput={<UnderlineInputField invalid={!!fieldState.error} message={fieldState.error?.message} />}
            />
          )}
        />
      </S.InfoItem>

      <S.InfoItem>
        <S.Label>모집 마감일:</S.Label>
        <Controller
          control={control}
          name="recruitEnd"
          rules={{ required: '모집 마감일을 선택해주세요.' }}
          render={({ field, fieldState }) => (
            <DatePicker
              selected={field.value ?? undefined}
              onChange={(date) => field.onChange(date)}
              onBlur={field.onBlur}
              minDate={getValues('recruitStart') ?? undefined}
              dateFormat="yyyy/MM/dd"
              customInput={<UnderlineInputField invalid={!!fieldState.error} message={fieldState.error?.message} />}
            />
          )}
        />
      </S.InfoItem>

      <S.InfoItem>
        <S.Label required>정기 모임:</S.Label>
        <UnderlineInputField
          {...register('regularMeetingInfo', { required: '정기 모임 정보를 입력해주세요.' })}
          invalid={!!errors.regularMeetingInfo}
          message={errors.regularMeetingInfo?.message}
        />
      </S.InfoItem>

      <S.InfoItem column>
  <S.Label>지원 시 유의사항:</S.Label>
  <OutlineTextareaField
    {...register('applicationNotice', { required: '지원 시 유의사항을 입력해주세요.' })}
    invalid={!!errors.applicationNotice}
    message={errors.applicationNotice?.message}
  />
</S.InfoItem>
    </S.SidebarContainer>
  );
};
